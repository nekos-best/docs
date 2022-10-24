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
    var neko = await nb.fetch('neko');
    print(neko);
}
```
#### Fetch a single value:
```dart
import 'package:nekos_best/nekos_best.dart' as nb;

// Provide a category
var neko = await nb.fetch('neko');
print(neko);
// Without a category. It'll use a random one
var random = await nb.fetch();
print(random);
```
#### Fetch multiple values:
Amount is capped at 20. If unspecified, it defaults to 5.
```dart
import 'package:nekos_best/nekos_best.dart' as nb;

var multipleBaka = await nb.fetchMultiple('baka', amount: 10);
print(multipleBaka);
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
