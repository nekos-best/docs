<!-- markdownlint-disable MD028 -->

# Endpoints

---

## GET `/endpoints`

Lists all available categories along with their limits.

> **Example:** <https://nekos.best/api/v2/endpoints>
>
> **Returns:**
>
> ```json
> {
>     "neko": {"min": "0001", "max": "0577", "format": "png"},
>     ···,
>     "wink": {"min": "001", "max": "015", "format": "gif"}
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
>         "url":"https://nekos.best/api/v2/neko/0427.png"
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
>         "url":"https://nekos.best/api/v2/hug/008.gif"
>      },
>      {
>         "anime_name":"Hibike! Euphonium",
>         "url":"https://nekos.best/api/v2/hug/004.gif"
>      }
>   ]
>}
> ```

## GET `/:category/:filename.:format`

Gets a specific image from our categories. Replace `:filename` with the asset's filename and `:format` with the category's format.

**Note:** The asset's metadata are provided URL-encoded, in the response's headers under `anime_name`, `artist_name`, `artist_href` and `source_url`.

> **Example:** <https://nekos.best/api/v2/hug/001.gif>
>
> **Returns:** *Binary data*
