<!-- markdownlint-disable MD010 MD001 MD026 -->

# [![CPP](https://cdn.discordapp.com/emojis/1043849608230608937.webp?size=32&quality=lossless)](https://nekos.best/discord?ref=docs) C++

---

## Dependencies

- [curlpp](https://github.com/jpbarrette/curlpp/)
- libcurl
- [nlohmann/json](https://github.com/nlohmann/json) (included)

## Usage

#### Simple request:

```cpp
#include <stdio.h>
#include "nekos-best++.hpp"

int main() {
	nekos_best::QueryResult result_struct = nekos_best::fetch("neko", 2);

for (const nekos_best::Meta& data : result_struct.results) {
	printf("Got url: %s\n", data.url.c_str());
}

return 0;
}
```

#### Get a list of available endpoint

```cpp
#include <stdio.h>
#include "nekos-best++.hpp"

int main() {
	const std::map<std::string, nekos_best::EndpointSpec> res = nekos_best::get_available_endpoints();

	for (const auto& d : res) {
		printf("[RESULT] res:\n%s\n", d.second.json_result.dump(2).c_str());
		printf("KEY: \"%s\"\n", d.first.c_str());

		printf("FORMAT: \"%s\"\n", d.second.format.c_str());
		printf("MAX: \"%s\"\n", d.second.max.c_str());
		printf("MIN: \"%s\"\n", d.second.min.c_str());
		printf("NAME: \"%s\"\n", d.second.name.c_str());
		printf("\n");
	}

	return 0;
}
```

Every request is blocking, you can simply use thread if you like.

Read and compile example files for demonstration.

## About

> Example added by: [**Neko-Life**](https://github.com/Neko-Life)
>
> The source code is available at [**GitHub**](https://github.com/Neko-Life/nekos-bestpp)
>
> [![NekosBest](https://img.shields.io/github/stars/Neko-Life/nekos-bestpp?color=yellow&label=Stars&logo=github&style=flat-square)](https://github.com/Neko-Life/nekos-bestpp)
