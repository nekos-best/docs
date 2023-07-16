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
	// init the client first to cache all available endpoints for it to be able to get random endpoint
	nekos_best::init();

	printf("base_url: %s\n", nekos_best::get_base_url().c_str());
	nekos_best::QueryResult result_struct = nekos_best::fetch("", 5);

	// check the response
	const nekos_best::Response res = nekos_best::get_last_request_response();

	printf("[RESPONSE] STATUS_CODE: %ld\n", res.status_code);
	printf("[RESPONSE] HEADERS:\n");

	for (const auto header : res.headers)
		printf("\"%s\": \"%s\"\n", header.first.c_str(), header.second.c_str());

	printf("\n");

	printf("[RESPONSE] JSON:\n%s\n\n", res.raw_json.dump(2).c_str());
	for (const nekos_best::Meta& data : result_struct.results) {
		printf("Got url: %s\n", data.url.c_str());
	}

	return 0;
}
```

#### Get a list of available endpoint:

```cpp
#include <stdio.h>
#include "nekos-best++.hpp"

int main() {
	printf("%s\n", nekos_best::get_base_url().c_str());

	// as we call get_available_endpoints() here thus caching the endpoints data from the API,
	// we don't need to initialize the client anymore.
	const std::map<std::string, nekos_best::EndpointSpec> res = nekos_best::get_available_endpoints();

	for (const auto& d : res) {
		printf("KEY: \"%s\"\n", d.first.c_str());

		printf("FORMAT: \"%s\"\n", nekos_best::get_str_format(d.second.format).c_str());
		printf("MAX: \"%s\"\n", d.second.max.c_str());
		printf("MIN: \"%s\"\n", d.second.min.c_str());
		printf("NAME: \"%s\"\n", d.second.name.c_str());
		printf("\n");
	}

	return 0;
}
```

#### Downloading:

```cpp
const std::string search_result = "https://nekos.best/api/v2/neko/c841bace-142f-41ee-a042-666b1bb4554a.png";

std::ostringstream download_stream;
// 					download search result
nekos_best::Meta meta = nekos_best::download(search_result, &download_stream);

std::ofstream file;

// no image info from the API, we can just name it this for now
// or better specify endpoint you know which gives which
// and have a proper filename with an extension
file.open("image", std::ios::out);

if (!file.is_open()) {
	fprintf(stderr, "[download ERROR] Can't open stream for writing\n");
}
else {
	// get header size
	const auto response = nekos_best::get_last_request_response();
	// 		strip header from actual image data
	file << download_stream.str().substr(response.header_size);
	file.close();
	printf("Image saved to \'image\'\n");
}
```

Recommended to check for last response result after every fetch by calling get_last_request_response(),
helps to determine whether a request failed or succeeded.

You can check whether you're rate limited from making any more request to an endpoint with the is_rate_limited() function.
Get the RateLimitInfo struct of an endpoint by calling get_rate_limit_info().

Every request is blocking, you can simply use thread if you like. Use the ns_mutex mutex for thread safety.

Read and compile example files for demonstration.

## About

> Example added by: [**Neko-Life**](https://github.com/Neko-Life)
>
> The source code is available at [**GitHub**](https://github.com/Neko-Life/nekos-bestpp)
>
> [![NekosBest](https://img.shields.io/github/stars/Neko-Life/nekos-bestpp?color=yellow&label=Stars&logo=github&style=flat-square)](https://github.com/Neko-Life/nekos-bestpp)
