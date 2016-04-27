# browserify-incremental test

Tested on OSX, node v5.10.1, npm v3.8.3  
Clone this repo and run the following command:

```js
node index.js
```

## Currently

Expected result:

```sh
bundling...
bundle callback
```

Actual result:

```sh
bundling...
```

Note that if you don't require react in foo.js then bundle callback is called successfully.

## With resumed stream

Modify line 86 of `node_modules/browserify-cache-api/lib/BrowserifyCache.js` to:

```js
bundleStream.pipe(outputStream).resume();
```
Expected result:

```sh
bundling...
bundle callback
```

Actual result:

```sh
bundling...
bundle callback
```
