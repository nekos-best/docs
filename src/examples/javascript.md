<!-- markdownlint-disable MD001 -->

# [![JavaScript](https://cdn.discordapp.com/emojis/853021893070159882.webp?size=24&quality=lossless)](https://nekos.best/discord?ref=docs) JavaScript

---

#### Using `fetch`

```js
fetch('https://nekos.best/api/v2/neko')
  .then(response => response.json())
  .then(json => console.log(json.results[0].url))

// https://nekos.best/api/v2/neko/0001.png
```

#### Using `async`

```js
async function getNeko() {
    const response = await fetch('https://nekos.best/api/v2/neko')
    const json = await response.json()
    console.log(json.results[0].url)
}

await getNeko()

// https://nekos.best/api/v2/neko/0001.png
```

## Using our Wrapper

### Installation

`npm install nekos-best.js` | `yarn add nekos-best.js`

### Usage

```js
import { Client, fetchRandom } from "nekos-best.js";

// You can use the `fetchRandom()` function to fetch a random neko.
console.log(await fetchRandom("neko")); // { results: [{ artist_href: '···', artist_name: '···', source_url: '···', url: 'https://nekos.best/api/v2/neko/0247.png' }] }

// Alternatively, you can initialize a new client which offers more features.
const nekosBest = new Client();
await nekosBest.init();

// Such as the `<Client>.fetchRandom()` method.
console.log(await nekosBest.fetchRandom("neko")); // { results: [{ artist_href: '···', artist_name: '···', source_url: '···', url: 'https://nekos.best/api/v2/neko/0138.png' }] }

// You can use the `<Client>.fetchMultiple()` method to fetch multiple hug GIFs.
console.log(await nekosBest.fetchMultiple("hug", 10)); // { results: [{ artist_href: '···', artist_name: '···', source_url: '···', url: 'https://nekos.best/api/v2/hug/019.gif' }, ···] }

// Or the `<Client>.fetchFile()` method to get a single file.
console.log(await nekosBest.fetchFile("neko")); // { artist_href: '···', ···, data: <Buffer> }
```

#### Build a simple Discord Bot with [`discord.js`](https://www.npmjs.com/package/discord.js)

```js
import { Client as DiscordClient } from "discord.js";
import { Client } from "nekos-best.js";

const discordClient = new DiscordClient();
const NekosBest = new Client();
await NekosBest.init();

discordClient.on("messageCreate", async (message) => {
    if (message.author.bot) return;

    if (message.content.startsWith('!neko')) {
        message.channel.send((await NekosBest.fetchRandom("neko")).results[0].url);
    }
})

discordClient.login("************************.******.***************************");
```

### Migrate from 4.X.X

#### The `fetchNeko(category)` function has been removed in favor of the `<Client>.fetchRandom()` method and its shortcut `fetchRandom()`

```diff
- fetchNeko('category')
+ const nekosBest = new Client();
+ 
+ nekosBest.fetchRandom('category')
```

```diff
- fetchNeko('category')
+ fetchRandom('category')
```

#### The optional parameter `amount` of the `fetchNeko()` function has been removed in favor of the `<Client>.fetchMultiple()` method

```diff
- fetchNeko('category', 15)
+ const nekosBest = new Client();
+ 
+ nekosBest.fetchMultiple('category', 15)
```

### Other Changes

- The optional options `max` and `min` of the `fetchNeko()` function have been removed

## About

> Created by [**Thunder04**](https://github.com/Thunder04)
>
> The source code is available at [**GitHub**](https://github.com/nekos-best/nekos-best.js)
>
> [![NekosBest](https://img.shields.io/npm/v/nekos-best.js?color=red&logo=npm&style=flat-square)](https://www.npmjs.com/package/nekos-best.js) [![NekosBest](https://img.shields.io/npm/dm/nekos-best.js?color=red&logo=npm&style=flat-square)](https://www.npmjs.com/package/nekos-best.js) [![NekosBest](https://img.shields.io/github/stars/nekos-best/nekos-best.js?color=yellow&label=Stars&logo=github&style=flat-square)](https://github.com/nekos-best/nekos-best.js)
