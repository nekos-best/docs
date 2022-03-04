# Using Rust

Example added by: [oaleaf](https://github.com/oaleaf)

[![NekosBest](https://img.shields.io/crates/v/nekosbest?style=flat-square)](https://crates.io/crates/nekosbest) [![NekosBest](https://img.shields.io/crates/d/nekosbest?color=orange&style=flat-square)](https://crates.io/crates/nekosbest)
[![NekosBest](https://img.shields.io/github/stars/dnbln/nb-rs?color=yellow&label=Stars&logo=github&style=flat-square)](https://github.com/dnbln/nb-rs)

---

Add the following to your `Cargo.toml`:

```toml
[dependencies]
nekosbest = "0.11.0"
```

Getting a single URL:

```rust,noplaypen
#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let img_url: String = nekosbest::get(nekosbest::Category::Neko).await?.url;
    println!("{}", img_url);
    Ok(())
}
```

Multiple URLs:

```rust,noplaypen
#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let images = nekosbest::get_amount(nekosbest::Category::Neko, 20).await?.0;
    println!("{:?}", images);
    Ok(())
}
```

## Details

For `Category::Neko` (previously `Category::Nekos`) and `Category::Kitsune`:

```rust,noplaypen
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

Everything else:

```rust,noplaypen
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

### With the `strong-types` feature

Note: this is an experimental feature, and may change at any time.

For `Category::Neko`:

```rust,noplaypen
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

Everything else:

```rust,noplaypen
#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let details = nekosbest::st_get::<nekosbest::Pat>().await?.details;
    println!("Anime name: {}", details.anime_name);
    Ok(())
}
```

## The `local` feature

Skip requests to the API completely, generating urls locally from metadata pulled in during build time:

```rust,noplaypen
fn main() -> Result<(), Box<dyn std::error::Error>> {
    let img_url = nekosbest::local::Neko.get(); // requires the "local" feature
    println!("{}", img_url);
    Ok(())
}
```

Or with your own random number (the default is the thread RNG):

```rust,noplaypen
fn main() {
    let your_random = unimplemented!();
    let img_url = nekosbest::local::Neko.get_random(your_random);
    println!("{}", img_url);
    Ok(())
}
```
