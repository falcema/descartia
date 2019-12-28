var UglifyJS    = require('uglify-js');
var saveLicense = require('uglify-save-license');
var fs = require('fs');
var file = fs.readFileSync("descartia.js", "utf8");
var minified = UglifyJS.minify(file,{
  output: {
    comments: saveLicense
  }
}).code;
fs.writeFileSync('descartia.min.js',minified,"utf8");
