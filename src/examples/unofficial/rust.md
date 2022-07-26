# [![Rust](https://cdn.discordapp.com/emojis/972378381867941928.webp?size=24&quality=lossless)](https://nekos.best/discord?ref=docs) Rust

---

## Installation

```toml
[dependencies]
nekosbest = "0.14.1"
```

## Example

```rust, noplaypen
#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let img_url: String = nekosbest::get(nekosbest::Category::Neko).await?.url;
    println!("{}", img_url);
    Ok(())
}
```

Or with an amount (Amount is capped at 20 by the server):

```rust, noplaypen
#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let images = nekosbest::get_amount(nekosbest::Category::Neko, 20).await?.0;
    println!("{:?}", images);
    Ok(())
}
```

Or if you already have a `reqwest::Client` that you want to use,
use `get_with_client` and `get_with_client_amount` respectively.

## Details

There is another property called `details`:

For `Category::Neko`, `Category::Husbando`, `Category::Kitsune`, `Category::Waifu` (Image endpoints):

```rust, noplaypen
#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let details = nekosbest::get(nekosbest::Category::Neko)
        .await?
        .details
        .try_into_image()
        .unwrap();
    println!("Source: {}", details.source_url);
    println!("Artist: {}", details.artist_name);
    println!("Artist link: {}", details.artist_href);
    Ok(())
}
```

For everything else (GIF endpoints):

```rust, noplaypen
#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let details = nekosbest::get(nekosbest::Category::Pat)
        .await?
        .details
        .try_into_gif()
        .unwrap();
    println!("Anime name: {}", details.anime_name);
    Ok(())
}
```

Or with the `strong-types` feature, bringing strong types guarantees for details, so no `unwrap` / `expect` for the details type:

**Warning**: Experimental, may change at any point in the future.

Remember to add the `st_` in front of `get`, `get_amount`, `get_with_client` and `get_with_client_amount`.

Neko:

```rust, noplaypen
#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let resp = nekosbest::st_get::<nekosbest::Neko>().await?;
    let details = resp.details();
    println!("Artist: {}", details.artist_name);
    println!("Artist link: {}", details.artist_href);
    println!("Source: {}", details.source_url);
    Ok(())
}
```

GIF:

```rust, noplaypen
#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let details = nekosbest::st_get::<nekosbest::Pat>().await?.details;
    println!("Anime name: {}", details.anime_name);
    Ok(())
}
```

By using the `local` feature, you can completely skip requests to the API.

```rust, noplaypen
#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let img_url = nekosbest::local::Neko.get(); // requires the "local" feature
    println!("{}", img_url);
    Ok(())
}
```

Or if you have your own random number:

```rust, noplaypen
fn main() {
    let your_random = unimplemented!();
    let img_url = nekosbest::local::Neko.get_random(your_random);
    println!("{}", img_url);
    Ok(())
}
```

Take a look at [the build script](build.rs) and [src/local.rs](src/local.rs) if
you want to find out how it works.

## Blocking client

All functions become blocking when used with the "blocking" feature.

## About

> Example added by: [**Dinu Blanovschi**](https://github.com/dnbln)
>
> The source code is available at [**GitHub**](https://github.com/dnbln/nb-rs)
>
> [![NekosBest](https://img.shields.io/crates/v/nekosbest?style=flat-square)](https://crates.io/crates/nekosbest) [![NekosBest](https://img.shields.io/crates/d/nekosbest?color=orange&style=flat-square)](https://crates.io/crates/nekosbest) [![NekosBest](https://img.shields.io/github/stars/dnbln/nb-rs?color=yellow&label=Stars&logo=github&style=flat-square)](https://github.com/dnbln/nb-rs)
