const fs = require('fs')

let jsWrapper = bytes => {
    return `'use strict';
// loads from UTF-16 byte array
let contents = String.fromCharCode(${bytes.join(',')});
export default contents
`.trim()
}

module.exports = function (snowpackConfig, pluginOptions) {

    // config options & their defaults
    let opts = pluginOptions || {}
    let inputEncoding = opts.inputEncoding || 'utf-8'
    let inputExtensions = opts.inputExtensions || [".md", ".txt"]

    return {
        name: 'unicode',
        resolve: {
            input: inputExtensions,
            output: [".js"]
        },
        load({ filePath }) {
            let inputStr = fs.readFileSync(filePath, inputEncoding)
            let utf16 = Buffer.from(inputStr, inputEncoding)
            let bytes = Array.from(utf16.values())
            let module = jsWrapper(bytes)
            return { ".js": module }
        }
    };
};
