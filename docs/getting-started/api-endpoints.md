---
outline: [2, 3]
---

# API Endpoints

## Base URL

```
https://nekos.best/api/:version
```

Replace `:version` with one of the supported versions below.

All requests must include a `User-Agent` header. We’d appreciate it if you included your app name, version, and website link in the following format: `APP_NAME/VERSION (WEBSITE_URL)`. For example: `NekoApp/1.0 (https://example.com)`

## Versions

<div class="versions-table">
  <div class="versions-row header">
    <div class="version-col">Version</div>
    <div class="version-col">Status</div>
  </div>

  <div class="versions-row">
    <div class="version-col"><span class="version-chip current">v2</span></div>
    <div class="version-col">Current & Maintained</div>
  </div>
</div>

## Categories

Categories define the type of content returned by the API. Each category maps to a fixed file format.

### Images

<div class="category-grid">
  <span class="category-chip">husbando</span>
  <span class="category-chip">kitsune</span>
  <span class="category-chip">neko</span>
  <span class="category-chip">waifu</span>
</div>

### GIFs

<div class="category-grid">
  <span class="category-chip">angry</span>
  <span class="category-chip">baka</span>
  <span class="category-chip">bite</span>
  <span class="category-chip">blush</span>
  <span class="category-chip">bonk</span>
  <span class="category-chip">bored</span>
  <span class="category-chip">cry</span>
  <span class="category-chip">cuddle</span>
  <span class="category-chip">dance</span>
  <span class="category-chip">facepalm</span>
  <span class="category-chip">feed</span>
  <span class="category-chip">handhold</span>
  <span class="category-chip">handshake</span>
  <span class="category-chip">happy</span>
  <span class="category-chip">highfive</span>
  <span class="category-chip">hug</span>
  <span class="category-chip">kick</span>
  <span class="category-chip">kiss</span>
  <span class="category-chip">laugh</span>
  <span class="category-chip">lurk</span>
  <span class="category-chip">nod</span>
  <span class="category-chip">nom</span>
  <span class="category-chip">nope</span>
  <span class="category-chip">pat</span>
  <span class="category-chip">peck</span>
  <span class="category-chip">poke</span>
  <span class="category-chip">pout</span>
  <span class="category-chip">punch</span>
  <span class="category-chip">run</span>
  <span class="category-chip">shoot</span>
  <span class="category-chip">shrug</span>
  <span class="category-chip">slap</span>
  <span class="category-chip">sleep</span>
  <span class="category-chip">smile</span>
  <span class="category-chip">smug</span>
  <span class="category-chip">stare</span>
  <span class="category-chip">tableflip</span>
  <span class="category-chip">think</span>
  <span class="category-chip">thumbsup</span>
  <span class="category-chip">tickle</span>
  <span class="category-chip">wave</span>
  <span class="category-chip">wink</span>
  <span class="category-chip">yawn</span>
  <span class="category-chip">yeet</span>
</div>

## Endpoints

### <Badge type="tip" text="GET" class="http-get" /> /endpoints

Returns all available API categories and their associated file formats.

#### Example

https://nekos.best/api/v2/endpoints
```json
{
  "neko": { "format": "png" },
  "...": {},
  "wink": { "format": "gif" }
}
```

::: tip
Use this endpoint to dynamically discover supported categories instead of hardcoding them.
:::

---

### <Badge type="tip" text="GET" class="http-get" /> /:category

Returns a random image or GIF from the specified category, including metadata.

#### Query Parameters

| Name   | Type   | Required | Description                                |
| ------ | ------ | -------- | ------------------------------------------ |
| amount | number | No       | Number of results to return (`1 ≤ X ≤ 20`) |

By default the API defaults amount to `1`.

#### Example (single result)

https://nekos.best/api/v2/neko

```json
{
  "results": [
    {
      "artist_name": "John Doe",
      "artist_href": "https://www.example.com/en/users/1234567",
      "source_url": "https://www.example.com/en/artworks/1234567",
      "url": "https://nekos.best/api/v2/neko/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.png"
    }
  ]
}
```

#### Example (multiple results)

https://nekos.best/api/v2/hug?amount=2

```json
{
  "results": [
    {
      "anime_name": "Generic Anime Name",
      "url": "https://nekos.best/api/v2/hug/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.gif"
    },
    {
      "anime_name": "Generic Anime Name",
      "url": "https://nekos.best/api/v2/hug/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.gif"
    }
  ]
}
```

---

### <Badge type="tip" text="GET" class="http-get" /> /search

Search for images or GIFs using metadata such as artist names or source titles.

#### Query Parameters

| Name     | Type   | Required | Description                      |
| -------- | ------ | -------- | -------------------------------- |
| query    | string | Yes      | Search phrase                    |
| type     | enum   | Yes      | `1` = images, `2` = GIFs         |
| category | string | No       | Restrict results to a category   |
| amount   | number | No       | Number of results (`1 ≤ X ≤ 20`) |

#### Example (image search)

https://nekos.best/api/v2/search?query=John&type=1

```json
{
  "results": [
    {
      "artist_name": "John Doe",
      "artist_href": "https://www.example.com/en/users/1234567",
      "source_url": "https://www.example.com/en/artworks/1234567",
      "url": "https://nekos.best/api/v2/neko/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.png"
    }
  ]
}
```

#### Example (GIF search with category)

https://nekos.best/api/v2/search?query=Generic&type=2&category=pat&amount=2

```json
{
  "results": [
    {
      "anime_name": "Generic Anime Name",
      "url": "https://nekos.best/api/v2/hug/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.gif"
    },
    {
      "anime_name": "Generic Anime Name",
      "url": "https://nekos.best/api/v2/hug/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.gif"
    }
  ]
}
```

---

### <Badge type="tip" text="GET" class="http-get" /> /:category/:filename.:format

Retrieves a specific asset directly.

#### Path Parameters

| Name     | Description                |
| -------- | -------------------------- |
| category | Category name              |
| filename | Asset filename (UUID)      |
| format   | File format (`png`, `gif`) |

::: info
Metadata for this endpoint is returned via **URL-encoded HTTP response headers**.
:::

**Available headers:**

* `anime_name`
* `artist_name`
* `artist_href`
* `source_url`

#### Example

https://nekos.best/api/v2/hug/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.gif

**Response:** Binary image or GIF data
