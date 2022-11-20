<!-- markdownlint-disable MD014 -->

# [![CS](https://cdn.discordapp.com/emojis/1037721964162330764.webp?size=32&quality=lossless)](https://nekos.best/discord?ref=docs) Dart

---

## Installation

Add the Dart [`nekos_best`](https://pub.dev/packages/nekos_best) package to your project:

```bash
$ dart pub add nekos_best
```

## Usage

Import the package to your project and use the methods.

```c
import 'package:nekos_best/nekos_best.dart' show fetch, Client;

void main() async {
    // Use the `fetch` function to fetch a random neko
    var neko = await fetch(endpoint: 'neko');
    print(neko);

    // Alternatively you can initiate a `Client` class which
    // provides more methods and functions
    var client = Client();

    // `Client.fetch` method
    var baka = client.fetch(endpoint: 'baka');
    // `Client.fetch` for a random category
    var random = client.fetch();
    // `Client.fetch` with an amount
    var five_nekos = client.fetch(endpoint: 'baka', amount: 5);
    // `Client.fetchFile` method
    var kitsune_file = client.fetchFile('kitsune');
    // `Client.search` method
    var search = client.search('Gochuumon wa Usagi Desuka??');
}
```
The package uses [NBResponse](https://pub.dev/documentation/nekos_best/latest/nekos_best/NBResonse-class.html) and [NBBufferResponse](https://pub.dev/documentation/nekos_best/latest/nekos_best/NBBufferResonse-class.html) classes in it's return values. You can access the fields with dot notation.

```c
var baka = await client.fetch(endpoint: 'baka');
// It always returns a List<NBResponse>, so 
// we need to get the first element from the list
print("url: ${baka[0].url}, source: ${baka[0].anime_name}");
```
See [example/struct_example.dart](https://github.com/Yakiyo/nekos_best_dart/blob/main/example/structs_example.dart) for details and consult the [Api Reference](https://pub.dev/documentation/nekos_best/latest/nekos_best/nekos_best-library.html)


More details on the package can be found in the repo's [README](https://github.com/Yakiyo/nekos_best_dart#readme). Examples on all methods, usage, classes are in the [example](https://github.com/Yakiyo/nekos_best_dart/tree/main/example) directory.

### Example without wrapper

Add [http](https://pub.dev/packages/http) to your project and import it.

```c
import 'package:http/http.dart' as http;
import 'dart:convert' as convert;

void main() async {
    var url = Uri.parse('https://nekos.best/api/v2/neko');
    var res = await http.get(url);
    var neko = convert.jsonDecode(res.body) as Map<String, dynamic>;
    print(neko['results'][0]);
}
```

## About

> Example added by: [**Yakiyo**](https://github.com/Yakiyo)
>
> Package source code is available on [**Github**](https://github.com/Yakiyo/nekos_best_dart)
>
> [![NekosBest](https://img.shields.io/pub/v/nekos_best?logo=dart&style=flat-square&label=Version)](https://pub.dev/packages/nekos_best) [![NekosBest](https://img.shields.io/pub/popularity/nekos_best?color=blue&logo=dart&style=flat-square&label=Popularity)](https://pub.dev/packages/nekos_best) [![NekosBest](https://img.shields.io/github/stars/Yakiyo/nekos_best_dart?color=yellow&label=Stars&logo=github&style=flat-square)](https://github.com/Yakiyo/nekos_best_dart)
