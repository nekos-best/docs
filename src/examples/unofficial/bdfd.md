# Using BDFD

Example added by: [oriel beck](https://github.com/oriel-beck)

---

## Getting a Image

```php
$nomention
$httpGet[https://nekos.best/api/v2/neko]
$title[Here is a Neko for you!]
$description[**Source:** $httpResult[results;0;source_url]]
$image[$httpResult[results;0;url]]
$footer[nekos.best API]
$color[#e91e63]
```

## Getting a GIF

```php
$nomention
$httpGet[https://nekos.best/api/v2/pat]
$description[<@$authorID> hugged <@$mentioned[1]>]
$image[$httpResult[results;0;url]]
$footer[nekos.best API - Anime: $httpResult[results;0;anime_name]]
$color[#e91e63]
```
