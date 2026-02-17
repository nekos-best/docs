# JavaScript

## Using fetch
```js
fetch('https://nekos.best/api/v2/neko')
  .then(response => response.json())
  .then(json => console.log(json.results[0].url))

// https://nekos.best/api/v2/neko/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.png
```

## Using async
```js
async function getNeko() {
    const response = await fetch('https://nekos.best/api/v2/neko')
    const json = await response.json()
    console.log(json.results[0].url)
}

await getNeko()

// https://nekos.best/api/v2/neko/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.png
```
