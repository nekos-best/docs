# <a href="https://nekos.best/discord?ref=docs"><img src="https://i.imgur.com/3yRL7Oi.png" width="40" alt="Dart"></a> Dart

- [With Wrapper](#example-with-a-package)
- [Without Wrapper](#example-without-wrapper)
## Example with a package
### Installation

Add the Dart [nekos_best](https://pub.dev/packages/nekos_best) package to your project

```bash
$ dart pub add nekos_best
```

### Usage
Import the package to your project and use the methods.

```dart
import 'package:nekos_best/nekos_best.dart' as nb;

void main() async {
    var neko = await nb.fetch(endpoint: 'neko');
    print(neko);
}
```
The package only exports a single function `fetch`
```dart
var random = nb.fetch();
var single_neko = nb.fetch(endpoint: 'neko');
var multi_neko = nb.fetch(endpoint: 'neko', amount: 5);
```
You can specify the amount of results you want, or the category from which to get result. Both are optional. By default amount is set to 1. If endpoint is unspecified, it uses a randomly generated endpoint.

The function returns a list of class [NBResponse](https://github.com/Yakiyo/nekos_best_dart/blob/main/README.md#response). You can access it's fields with dot notation.
```dart
var baka = await nb.fetch(endpoint: 'baka');
// It always returns a list of NBResponse, so 
// we need to get the first element from the list
print("url: ${baka[0].url}, source: ${baka[0].anime_name}");
```

More details on the package can be found in the repo's [README](https://github.com/Yakiyo/nekos_best_dart#readme). Example is in the [example](https://github.com/Yakiyo/nekos_best_dart/tree/main/example) directory.

## Example without wrapper
Add [http](https://pub.dev/packages/http) to your project and import it.
```dart
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
>Example by [Yakiyo](https://github.com/Yakiyo)
>
>Package source code is available on [Github](https://github.com/Yakiyo/nekos_best_dart)
>
>[![Pub Package](https://img.shields.io/pub/v/nekos_best.svg)](https://pub.dev/packages/nekos_best) [![Github](https://img.shields.io/github/stars/Yakiyo/nekos_best_dart?style=social)](https://github.com/Yakiyo/nekos_best_dart)
