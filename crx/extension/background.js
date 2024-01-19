
const countApi = 'https://greasyfork.org/scripts/by-site.json'

function getCurrentTabUrl(callback) {
  var queryInfo = {
    active: true,
    currentWindow: true
  }
  
  
  chrome.tabs.query(queryInfo, (tabs) => {
    var tab = tabs[0]
    var url = tab.url
    console.assert(typeof url === 'string', 'tab.url should be a string')
    callback(url)
  })
}

function getUrlHost(url) {
  let a = document.createElement('a')
  a.href = url
  let mainHost = a.hostname.split('.').splice(-2).join('.')
  return mainHost
}

function changeBadge(data) {
  getCurrentTabUrl(function (url) {
    let host = getUrlHost(url)
    let count = data[host]
    count = count > 50 ? 50 : count
    sessionStorage.setItem('host', host)
    if (count) {
      // use text: count.toString() to show count badge
      chrome.browserAction.setBadgeText({ text: '' })
    } else {
      chrome.browserAction.setBadgeText({ text: '' })
    }
  })
}

fetch(countApi).then((r) => {
  r.json().then((data) => {
    console.log('count data loaded!')
    chrome.tabs.onUpdated.addListener(() => { changeBadge(data) })
    chrome.tabs.onActivated.addListener(() => { changeBadge(data) })
  })
})
