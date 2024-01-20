// ==UserScript==
// @name               UserScript: UserScripts Plus
// @namespace          https://github.com/danydodson/userscript-plus
// @version            2.4.0
// @description        Show all UserJS for current site.
// @author             Nonce
// @license            MIT
// @icon               data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3ggEBCQHM3fXsAAAAVdJREFUOMudkz2qwkAUhc/goBaGJBgUtBCZyj0ILkpwAW7Bws4yO3AHLiCtEFD8KVREkoiFxZzX5A2KGfN4F04zMN+ce+5c4LMUgDmANYBnrnV+plBSi+FwyHq9TgA2LQpvCiEiABwMBtzv95RSfoNEHy8DYBzHrNVqVEr9BWKcqNFoxF6vx3a7zc1mYyC73a4MogBg7vs+z+czO50OW60Wt9stK5UKp9Mpj8cjq9WqDTBHnjAdxzGQZrPJw+HA31oulzbAWgLoA0CWZVBKIY5jzGYzdLtdE9DlcrFNrY98zobqOA6TJKHW2jg4nU5sNBpFDp6mhVe5rsvVasUwDHm9Xqm15u12o+/7Hy0gD8KatOd5vN/v1FozTVN6nkchxFuI6hsAAIMg4OPxMJCXdtTbR7JJCMEgCJhlGUlyPB4XfumozInrupxMJpRSRtZlKoNYl+m/6/wDuWAjtPfsQuwAAAAASUVORK5CYII=
// @include            *
{ ljs }
// @resource           ui https://cdn.jsdelivr.net/gh/danydodson/userscript-plus/dist/ui.html?_={time}
// @resource           count https://greasyfork.org/scripts/by-site.json
// @grant              GM_xmlhttpRequest
// @grant              GM_getResourceText
// @grant              GM_getValue
// @grant              GM_setValue
// @grant              unsafeWindow
// @noframes
// @connect            cdn.bootcss.com
// @connect            raw.githubusercontent.com
// @connect            gist.githubusercontent.com
// @connect            cdnjs.cloudflare.com
// @connect            greasyfork.org
// @connect            cdn.jsdelivr.net
// @run-at             document-end
// ==/UserScript==

unsafeWindow.GmAjax = GM_xmlhttpRequest;

(function () {
  
  { code }

})()
