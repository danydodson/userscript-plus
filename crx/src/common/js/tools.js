/* global chrome, fetch */

import timeago from 'timeago.js'
import fuzzy from 'fuzzy.js'

let config = {
  api: 'https://greasyfork.org/en/scripts/by-site/{host}.json',
  sapi: "https://sleazyfork.org/scripts/by-site/{host}.json"
}

export default {
  timeagoFormat(time) {
    let lang = (navigator.language === 'en-us') ? 'en-us' : 'en_short'
    return timeago(null, lang).format(time)
  },

  installUserJs(uri) {
    let jsStr = `
    var evt = document.createEvent('MouseEvents');
    evt.initEvent('click', true, true);
    var link = document.createElement('a');
    link.href = '${uri}';
    link.dispatchEvent(evt);
    `
    chrome.tabs.executeScript(null, { code: jsStr })
  },

  /* Nano Templates - https://github.com/trix/nano */
  nano(template, data) {
    return template.replace(/\{([\w.]*)\}/g, function (str, key) {
      let keys = key.split('.')
      let v = data[keys.shift()]
      for (let i = 0, l = keys.length; i < l; i++) v = v[keys[i]]
      return (typeof v !== 'undefined' && v !== null) ? v : ''
    })
  },

  get currentTab() {
    return new Promise(function (resolve, reject) {
      let queryInfo = {
        active: true,
        currentWindow: true
      }

      chrome.tabs.query(queryInfo, (tabs) => {
        let tab = tabs[0]
        resolve(tab)
      })
    })
  },

  get sessionStorage() {
    return new Promise(function (resolve, reject) {
      chrome.runtime.getBackgroundPage(function (bg) {
        resolve(bg.sessionStorage)
      })
    })
  },

  get host() {
    return new Promise((resolve, reject) => {
      this.currentTab.then((tab) => {
        let a = document.createElement('a')
        a.href = tab.url
        let mainHost = a.hostname.split('.').splice(-2).join('.')
        resolve(mainHost)
      })
    })
  },

  // Get the script data of the oily monkey cache
  // getData(callback) {
  //   this.sessionStorage.then((bgSessionStorage) => {
  //     this.host.then((host) => {
  //       let data = bgSessionStorage.getItem(host)
  //       if (data) {
  //         data = JSON.parse(data)
  //         callback(data)
  //       } else {
  //         let api = this.nano(config.api, {
  //           host: host
  //         })
  //         fetch(api)
  //           .then((r) => {
  //             r.json().then((json) => {
  //               json = json.map((item) => {
  //                 item.user = item.users[0]
  //                 return item
  //               })
  //               bgSessionStorage.setItem(host, JSON.stringify(json))
  //               callback(json)
  //             })
  //           })
  //       }
  //     })
  //   })
  // },

  getData(callback) {
    this.sessionStorage.then(bgSessionStorage => {
      this.host.then(host => {
        let data = bgSessionStorage.getItem(host)
        if (data) {
          data = JSON.parse(data)
          callback(data)
        } else {
          let fetchJS = url => fetch(url).then(r => {
            r.json().then((json) => {
              json = json.map((item) => {
                item.user = item.users[0]
                return item
              })
              bgSessionStorage.setItem(host, JSON.stringify(json))
              callback(json)
            })
          })
          fetchJS(this.nano(config.api, { host: host }))
          fetchJS(this.nano(config.sapi, { host: host }))
          console.log(data)
        }
      })
    })
  },

  searcher(data, query) {
    let rt = []
    for (let i = 0; i < data.length; i++) {
      let item = data[i]
      let max = null
      let frt = null
      for (let key of ['name', 'description', 'user']) {
        if (key === 'user') {
          frt = fuzzy(item['user']['name'], query)
        } else {
          frt = fuzzy(item[key], query)
        }
        if (max === null) {
          max = frt
        } else if (max.score < frt.score) {
          max = frt
        }
      }
      rt.push({
        item,
        'score': max.score
      })
    }
    rt = rt.filter((a) => a.score !== 0).sort((a, b) => b.score - a.score).map((a) => a.item)
    return rt
  },

  isZH() {
    let nlang = navigator.language.toLowerCase()
    if (nlang === 'en-us') {
      nlang = 'en-us'
    }
    return nlang.search('en-') === 0
  }
}
