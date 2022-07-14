# [![CS](https://cdn.discordapp.com/emojis/972378383147208744.webp?size=32&quality=lossless)](https://nekos.best/discord?ref=docs) C\#

---

## Installation

Add the NuGet package `NekosBestApiNet` to your project:

```ps
dotnet add package NekosBestApiNet
```

## Usage

```cs
using System;
using System.Threading.Tasks;
using NekosBestApiNet;

public class ExampleClass
{
  private readonly NekosBestApi _nekosBestApi;

  public ExampleClass() 
    => _nekosBestApi = new NekosBestApi();

  public async Task Hug() 
  {
    var image = await _nekosBestApi.ActionsApi.Hug();

    Console.WriteLine(image.Results.FirstOrDefault().Url);
  }
}
```

## Example using custom HttpClient

You can provide your own HttpClient instance, but you have to set the BaseAddress manually

```cs
using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using NekosBestApiNet;

class ExampleClass
{
    private NekosBestApi _nekosBestApi;

    public ExampleClass()
    {
        var httpClient = new HttpClient
        {
            BaseAddress = new Uri("https://nekos.best/api/v2")
        };

        _nekosBestApi = new NekosBestApi(httpClient);
    }
}
```

## Example using dependency injection

Create a ServiceCollection, then add an instance of the NekosBestApi class to it

```cs
using System;
using System.Threading.Tasks;
using NekosBestApiNet;
using Microsoft.Extensions.DependencyInjection;

public class Startup 
{
  private NekosBestApi _nekosBestApi;

  private IServiceProvider _serviceProvider;

  public void Init() 
  {
    var services = new ServiceCollection();

    _nekosBestApi = new NekosBestApi();

    ConfigureServices(services);
    _serviceProvider = services.BuildServiceProvider();
  }

  public async Task RunAsync() 
  {
    var exampleClass = _serviceProvider.GetService<ExampleClass>();

    var image = await _nekosBestApi.ActionsApi.Hug();

    Console.WriteLine(image.Results.FirstOrDefault().Url);
  }

  private void ConfigureServices(IServiceCollection services) 
  {
    services.AddSingleton(_nekosBestApi);
    services.AddSingleton<ExampleClass>();
  }
}
```

### Using this in a class

```cs
using System.Threading.Tasks;
using NekosBestApiNet;
using NekosBestApiNet.Models.Images;

public class ExampleClass 
{
  private readonly NekosBestApi _nekosBestApi;

  public ExampleClass(NekosBestApi nekosBestApi) 
    => _nekosBestApi = nekosBestApi;

  public async Task<ActionResult> Hug()
    => await _nekosBestApi.Hug();
}
```

## About

> Example added by: [**Pusheon**](https://github.com/Pusheon)
>
> The source code is available at [**GitHub**](https://github.com/Sylveon76/Nekos.Best-API)
>
> [![NekosBest](https://img.shields.io/nuget/v/NekosBestApiNet?color=white&logo=nuget&style=flat-square)](https://www.nuget.org/packages/NekosBestApiNet/) [![NekosBest](https://img.shields.io/nuget/dt/NekosBestApiNet?color=white&logo=nuget&style=flat-square)](https://www.nuget.org/packages/NekosBestApiNet/) [![NekosBest](https://img.shields.io/github/stars/Sylveon76/Nekos.Best-API?color=yellow&label=Stars&logo=github&style=flat-square)](https://github.com/Sylveon76/Nekos.Best-API)
