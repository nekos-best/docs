---
outline: [2, 3]
---

# API Endpoints

## Base URL

```
https://nekos.best/api/:version
```

Replace `:version` with one of the supported versions below.

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

Defaults to `1` if not specified.

#### Example (single result)

https://nekos.best/api/v2/neko

```json
{
  "results": [
    {
      "artist_name": "John Doe",
      "artist_href": "https://www.example.com/en/users/1234567",
      "source_url": "https://www.example.com/en/artworks/1234567",
      "url": "https://nekos.best/api/v2/neko/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.png",
      "dimensions": {
        "width": 420,
        "height": 690
      }
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
      "url": "https://nekos.best/api/v2/hug/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.gif",
      "dimensions": {
        "width": 420,
        "height": 690
      }
    },
    {
      "anime_name": "Generic Anime Name",
      "url": "https://nekos.best/api/v2/hug/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.gif",
      "dimensions": {
        "width": 420,
        "height": 690
      }
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
      "url": "https://nekos.best/api/v2/neko/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.png",
      "dimensions": {
        "width": 420,
        "height": 690
      }
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
      "url": "https://nekos.best/api/v2/hug/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.gif",
      "dimensions": {
        "width": 420,
        "height": 690
      }
    },
    {
      "anime_name": "Generic Anime Name",
      "url": "https://nekos.best/api/v2/hug/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.gif",
      "dimensions": {
        "width": 420,
        "height": 690
      }
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
