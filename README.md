# `snowpack-plugin-unicode`

With this [`snowpack`](https://www.snowpack.dev) plugin you can load files with unicode text directly into a javascript string.

### Usage

This converts the file contents into an array of numberic `UTF-16` character codes and then uses `String.fromCharCode` in the browser to load this.

```js
import stringContents from "./Unicode.md"
```

### Installation

```
npm install -D snowpack-plugin-unicode
```

And to your `snowpack.config.json` add

```json
{ // snowpack.config.json
    "plugins": [
        ["snowpack-plugin-unicode", {
            inputExtensions: [".md", ".csv.txt" ],
            inputEncoding: "utf-8"
        }]
        /* ... rest of your plugins */
    ]
}
```

There is one optional configuration setting: `inputExtensions`.
With this you specify which extensions we should load.
Default is `['.md', '.txt']`.

The source file encoding defaults to `utf-8`, but can be changed with the configuration setting `inputEncoding` (not tested extensively).