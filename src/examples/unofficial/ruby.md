# Using Ruby


The source code is available at [GitHub](https://github.com/NekoFanatic/nekos-best.rb) ・ Made by [NekoFanatic](https://github.com/NekoFanatic)

[![NekosBest](https://img.shields.io/github/stars/NekoFanatic/nekos-best.rb?color=yellow&label=Stars&logo=github&style=flat-square)](github.com/NekoFanatic/nekos-best.rb)

---

## Installation

Download the [`nekosbest-2.0.2.gem`](https://github.com/NekoFanatic/nekos-best.rb/blob/master/nekosbest-2.0.2.gem) file and install the gem with:

    $ gem install nekosbest

## Usage

```ruby
require "nekosbest"

include Nekosbest

# one image / gif 
print Nekosbest.get_img("neko")

# more images / gifs (list with max 20 objects)
print Nekosbest.get_img("neko", 3)
```

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
