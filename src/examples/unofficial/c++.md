# nekos-best++
C++ API wrapper for [nekos.best](https://nekos.best/),
[API Documentation](https://docs.nekos.best/).

## Dependencies
- [curlpp](https://github.com/jpbarrette/curlpp/)
- libcurl
- [nlohmann/json](https://github.com/nlohmann/json) (included)

## Usage

Very simple to use and straightforward:

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

Get a list of available endpoints:

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

Recommended to check for last response result after every fetch by calling get_last_request_response(),
helps to determine whether a request failed or succeeded.

Every request is blocking, you can simply use thread if you like.

Read and compile example files for demonstration.
