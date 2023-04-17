<!-- markdownlint-disable MD028 -->

# Endpoints

---

## GET `/endpoints`

Lists all available categories.

> **Example:** <https://nekos.best/api/v2/endpoints>
>
> **Returns:**
>
> ```json
> {
>     "neko": {"format": "png"},
>     ···,
>     "wink": {"format": "gif"}
> }
> ```

## GET `/:category?amount=X`

Gets a random image or GIF from the available [categories](reference.md#categories) along with its metadata.

The amount query may be used to retrieve multiple assets at once. The amount is a number such that `1 ≤ X ≤ 20`.

> **Example:** <https://nekos.best/api/v2/neko>
>
> **Returns:**
>
> ```json
>{
>   "results":[
>      {
>         "artist_href":"https://www.pixiv.net/en/users/47065875",
>         "artist_name":"かえで",
>         "source_url":"https://www.pixiv.net/en/artworks/88682108",
>         "url":"https://nekos.best/api/v2/neko/bbffa4e8-dc40-11ed-afa1-0242ac120002.png"
>      }
>   ]
>}
> ```

> **Example:** <https://nekos.best/api/v2/hug?amount=2>
>
> **Returns:**
>
> ```json
>{
>   "results":[
>      {
>         "anime_name":"Sword Art Online",
>         "url":"https://nekos.best/api/v2/hug/c6a7d384-dc40-11ed-afa1-0242ac120002.gif"
>      },
>      {
>         "anime_name":"Hibike! Euphonium",
>         "url":"https://nekos.best/api/v2/hug/ca26cfba-dc40-11ed-afa1-0242ac120002.gif"
>      }
>   ]
>}
> ```

## GET `/search?query=X&type=X&category=X&amount=X`

The query parameter can be used to search for a specific phrase in the image or GIF source. Use the type query to get **`1` images** or **`2` GIFs** results.

\* Optional parameters: Use the category query for getting images or GIFs from a specific endpoint. The amount query may be used to retrieve multiple results at once.

> **Example:** <https://nekos.best/api/v2/search?query=Aramaru&type=1>
>
> **Returns:**
>
> ```json
>{
>    "results":[
>        {
>            "artist_href":"https://twitter.com/Aramarufox/",
>            "artist_name":"Aramarufox",
>            "source_url":"https://twitter.com/Aramarufox/status/1491744680999940101",
>            "url":"https://nekos.best/api/v2/kitsune/ca26cfba-dc40-11ed-afa1-0242ac120002.png"
>        }
>    ]
>}
>```

> **Example:** <https://nekos.best/api/v2/search?query=Senko&type=2&category=pat&amount=2>
>
> **Returns:**
>
> ```json
>{
>    "results":[
>        {
>            "anime_name":"Sewayaki Kitsune no Senko-san",
>            "url":"https://nekos.best/api/v2/pat/ca26cfba-dc40-11ed-afa1-0242ac120002.gif"
>        },
>        {
>            "anime_name":"Sewayaki Kitsune no Senko-san",
>            "url":"https://nekos.best/api/v2/pat/ca26cfba-dc40-11ed-afa1-0242ac120002.gif"
>        }
>    ]
>}
>```

## GET `/:category/:filename.:format`

Gets a specific image from our categories. Replace `:filename` with the asset's filename and `:format` with the category's format.

**Note:** The asset's metadata are provided URL-encoded, in the response's headers under `anime_name`, `artist_name`, `artist_href` and `source_url`.

> **Example:** <https://nekos.best/api/v2/hug/ca26cfba-dc40-11ed-afa1-0242ac120002.gif>
>
> **Returns:** *Binary data*
