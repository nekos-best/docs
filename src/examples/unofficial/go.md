<!-- markdownlint-disable MD014 -->

# [![CS](https://cdn.discordapp.com/emojis/1128611804596158574.webp?size=24&quality=lossless)](https://nekos.best/discord?ref=docs) Go

---

## Installation
Add the module to your project
```bash
$ go get -u github.com/Yakiyo/nekos_best.go
```

## Usage
Import it in your code
```go
import (
    nb github.com/Yakiyo/nekos_best.go
)
```
Full reference at [go.pkg.dev](https://pkg.go.dev/github.com/Yakiyo/nekos_best.go)

### Fetch a single entry
```go
res, err := nb.Fetch("neko")
if err != nil {
    // handle err
}
fmt.Println(res.Url, res.Artist_name, res.Artist_href)
```

### Fetch multiple entries
```go
res, _ := nb.FetchMany("baka", 3)

fmt.Println(res[0].Url)
```

### Fetch a file
```go
import "os"

res, _ := nb.FetchFile("pat")

os.WriteFile("image.png", res.Data, 0644)

// print associated entry for the image
fmt.Println(res.Body)
```

### Search for an entry
```go
res, _ := nb.Search("Gochuumon wa Usagi Desuka??", "baka", 3)

fmt.Println(res)
```

### Generate random category
```go
cat := nb.RandomCategory()
```

## Example without the module
```go
package main

import (
    "fmt"
    "io"
    "net/http"
    "encoding/json"
)

// Result of an entry for nekos.best api response for 
// an image endpoint
type Result struct {
    Url string
    Artist_name string
    Artist_href string
}

// The entire api response returned
type Api_Response struct {
    Results []Result
}

func main() {
    res, err := http.Get("https://nekos.best/api/v2/neko")
    if err != nil {
        fmt.Println("Error %v", err)
        return
    }
    // Read body to bytes and defer the close
    defer res.Body.Close()
    bytes, err := io.ReadAll(res.Body)
    if err != nil {
        fmt.Println("Error %v", err)
        return
    }
    // Parse []byte to json
    response := &Api_Response{}
    json.Unmarshal(bytes, response)
    fmt.Println(response.Results[0])
}
```

## About

> Example added by: [**Yakiyo**](https://github.com/Yakiyo)
>
> Package source code is available on [**Github**](https://github.com/Yakiyo/nekos_best.go)
>
> [![Go Reference](https://pkg.go.dev/badge/github.com/Yakiyo/nekos_best.go.svg)](https://pkg.go.dev/github.com/Yakiyo/nekos_best.go) [![NekosBest](https://img.shields.io/github/stars/Yakiyo/nekos_best.go?color=yellow&label=Stars&logo=github&style=flat-square)](https://github.com/Yakiyo/nekos_best.go)