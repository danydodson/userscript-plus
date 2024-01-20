# UserScript Plus

<!-- ![UserScript+.gif](https://raw.githubusercontent.com/danydodson/userscript-plus/main/crx/extension/screenshots/userscript+.gif) -->

[![Tampermonkey](https://img.shields.io/badge/Tampermonkey-up%20to%20date-green.svg)](https://tampermonkey.net/)
[![webpack](https://img.shields.io/badge/webpack-3.x-orange.svg)](https://github.com/webpack/webpack)
[![Vue](https://img.shields.io/badge/Vue-2.4%2B-yellow.svg)](https://vuejs.org/)
[![iView](https://img.shields.io/badge/iView-2.2.0-brightgreen.svg)](https://www.iviewui.com)
[![i18n](https://img.shields.io/badge/i18n-PR-blue.svg)](https://github.com/danydodson/userscript-plus/tree/master/src/common/lang)
[![GitHub stars](https://img.shields.io/github/stars/danydodson/userscript-plus.svg?style=social&label=Star&style=flat-square)](https://github.com/danydodson/userscript-plus)

Show current site all UserJS，The easier way to install UserJs for Tampermonkey. 

**Userscript +** is a `Tampermonkey` user script, the role is when you browse the web, from the bottom right corner automatically for you to recommend the current page `Tampermonkey` script, and can install a designated script.

Many times, we do not know whether some sites have users to provide the script to optimize the page, but **UserScript Plus** will be able to help you automatically find the applicable UserJS, and by default, according to the score from high to low order recommended to you, bring you a new `Tampermonkey` use experience!

## Installation
1. Install the Chrome/Firefox plugin `Tampermonkey`
    - Chrome Store: [Tampermonkey]( https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
    - Firefox Add-ons: [Tampermonkey](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey)
  
2. Install `UserScript Plus` via `GreasyFork` or `GitHub`
    - GreasyFork: [UserScript Plus: Show All UserScripts](https://greasyfork.org/en/scripts/482999-userscript-show-all-userscripts)
    - GitHub: [userscript-plus.user.js](https://github.com/danydodson/userscript-plus/raw/main/dist/userscript-plus.user.js)

### UserScript Plus Chrome/Firefox extension
![](https://raw.githubusercontent.com/jae-jae/_resources/master/img/175033.png)
  
  - Chrome Store: [userscript-plus](https://chrome.google.com/webstore/detail/okiocdganiomklllkfkmhneoibegifch)  
  
  - Github: [extension.crx](https://github.com/danydodson/userscript-plus/raw/main/crx/extension.crx)  
  
  - Firefox Add-ons: [userscript-plus](https://addons.mozilla.org/en-US/firefox/addon/userscript-for-tampermonkey)  

## Features
-  Automatically appear in the lower right corner, recommend scripts for you, and will automatically disappear after 10 seconds
-  Filter the top 50 script with the highest score
-  The script list supports search filtering
-  The script list supports custom sorting
-  Supports one-click installation script
-  Support for viewing script details
-  Support access to the script home page and author home page
-  Click the close button, the current site `this session` all the pages will no longer appear prompt box
-  A prompt box is displayed only when found available script for the current site
-  i18n international multilingual support.(**[Locale contributions](https://github.com/danydodson/userscript-plus/tree/master/src/common/lang) are welcomed!**)
-  Vue + iView UI design smooth and beautiful

## Whitelist and blacklist
> Edit script => Settings tab => Includes/Excludes

In `Tampermonkey` enter the script editing interface and select the `Settings` tab. A couple rows down are the `Includes/Excludes` options, set your white list and blacklist options here.  

See Figure:

![us+en-ex.gif](https://cdn.rawgit.com/jae-jae/_resources/master/img/us+en-ex.gif)

## Known bug
1. In some sites below the plug-in interface icon is not displayed，Such as Github

    **Reason**：This is because the security policy of these sites to prevent the plug-in icon font file loading, resulting in the icon does not display properly.

## License
MIT



