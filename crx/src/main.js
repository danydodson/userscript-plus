import Vue from 'vue'
import App from './App.vue'
import iView from 'iview'
import 'iview/dist/styles/iview.css' // use CSS
import 'animate.css'
import VueI18n from 'vue-i18n'
import localeMessage from '../../src/common/js/locale'

Vue.locale = (locale) => {}

Vue.use(VueI18n)

Vue.use(iView)

let nlang = navigator.language.toLowerCase()
if (nlang === 'en') {
  nlang = 'en'
}
let lang = localeMessage[nlang] ? nlang : 'en'

const i18n = new VueI18n({
  locale: lang,
  messages: localeMessage
})

let appEl = window.document.getElementById('app')

new Vue({ // eslint-disable-line no-new
  i18n,
  el: appEl,
  render: h => h(App)
})
