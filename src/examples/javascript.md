<!-- markdownlint-disable MD001 -->

# [![JavaScript](https://cdn.discordapp.com/emojis/853021893070159882.webp?size=24&quality=lossless)](https://nekos.best/discord?ref=docs) JavaScript

---

#### Using `fetch`

```js
fetch('https://nekos.best/api/v2/neko')
  .then(response => response.json())
  .then(json => console.log(json.results[0].url))

// https://nekos.best/api/v2/neko/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.png
```

#### Using `async`

```js
async function getNeko() {
    const response = await fetch('https://nekos.best/api/v2/neko')
    const json = await response.json()
    console.log(json.results[0].url)
}

await getNeko()

// https://nekos.best/api/v2/neko/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.png
```

## Using our official wrapper

### Installation

`npm install nekos-best.js` | `yarn add nekos-best.js` | `pnpm install nekos-best.js`

### Usage

```js
import { Client, fetchRandom } from "nekos-best.js";

// You can use the `fetchRandom()` function to fetch a random neko.
console.log(await fetchRandom("neko")); // { results: [{ artist_href: '···', artist_name: '···', source_url: '···', url: 'https://nekos.best/api/v2/neko/XXXXXX-XXXXX.png' }] }

// Alternatively, you can initialize a new client which offers more features.
const nekosBest = new Client();

// Such as the `<Client>.fetch()` method.
console.log(await nekosBest.fetch("neko", 1)); // { results: [{ artist_href: '···', artist_name: '···', source_url: '···', url: 'https://nekos.best/api/v2/neko/XXXXXX-XXXXX.png' }] }
console.log(await nekosBest.fetch("hug", 10)); // { results: [{ artist_href: '···', artist_name: '···', source_url: '···', url: 'https://nekos.best/api/v2/hug/XXXXXX-XXXXX.gif' }, ···] }

// Or the `<Client>.fetchFile()` method to get a single file.
console.log(await nekosBest.fetchFile("neko")); // { artist_href: '···', ···, data: <Buffer> }
```

#### Build a simple Discord Bot with [`discord.js`](https://www.npmjs.com/package/discord.js)

```js
import { Client as DiscordClient } from "discord.js";
import { Client } from "nekos-best.js";

const discordClient = new DiscordClient();
const nekosBest = new Client();

discordClient.on("messageCreate", async (message) => {
    if (message.author.bot) return;

    if (message.content.startsWith('!neko')) {
        message.channel.send((await nekosBest.fetch("neko", 1)).results[0].url);
    }
})

discordClient.login("************************.******.***************************");
```

## Migrate from 5.X.X to 6.X.X

**❗ For the TypeScript users, the type `NbEndpointMetadata` will be removed in the 7.X.X version due to recent API changes**

### `<Client>.fetchRandom()` & `<Client>.fetchMultiple()` methods have been removed in favor of the `<Client>.fetch(category, amount)` method

```diff
const nekosBest = new Client();

- nekosBest.fetchRandom("neko")
+ nekosBest.fetch("neko", 1)
```

```diff
const nekosBest = new Client();

- nekosBest.fetchMultiple("neko", 15)
+ nekosBest.fetch("neko", 15)
```

### The `<Client>.init()` method has been removed

```diff
const nekosBest = new Client();

- await nekosBest.init();
```

## Migrate from 4.X.X to 5.X.X

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
