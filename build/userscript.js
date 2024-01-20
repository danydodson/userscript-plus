var babel = require("babel-core")
var fs = require("fs")
var tpl = fs.readFileSync('./userscript/tpl.js').toString()
var code = babel.transformFileSync("./userscript/main.js").code

var nano = function (template, data) {
  return template.replace(/\{([\w\.]*)\}/g, function (str, key) {
    let keys = key.split(".")
    let v = data[keys.shift()]
    for (let i = 0, l = keys.length; i < l; i++) v = v[keys[i]]
    return (typeof v !== "undefined" && v !== null) ? v : ""
  })
}

var renderOut = function (outFile, ljs) {
  var ujs = nano(tpl, {
    ljs: ljs,
    code: code,
    time: (+new Date())
  })

  fs.writeFile(outFile, ujs, function (err) {
    if (err) {
      return console.log(err)
    }
    return console.log('build-out:' + outFile)
  })
}

var time = (+new Date())

var ljs = `// @require            https://cdn.jsdelivr.net/gh/danydodson/l.js/userjs/l.userjs.min.js
// @require            https://cdn.jsdelivr.net/gh/danydodson/l.js@master/lib.js
// @resource           uiJs https://cdn.jsdelivr.net/gh/danydodson/Userscript-Plus/dist/ui.js?_=${time}`

// var ljs_GF = `// @require            https://greasyfork.org/scripts/23419-l-js/code/ljs.js
// // @require            https://greasyfork.org/scripts/430303-l-lib2-js/code/l-lib2js.js
// // @resource           uiJs https://cdn.jsdelivr.net/gh/danydodson/userscript-plus/dist/ui.gf.js?_=${time}`


renderOut('./dist/userscript-plus.user.js', ljs)

// greasyfork version
// renderOut('./dist/userscript-plus.gf.user.js', ljs_GF)
