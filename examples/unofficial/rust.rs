// ANCHOR: single
#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let img_url: String = nekosbest::get(nekosbest::Category::Neko).await?.url;
    println!("{}", img_url);
    Ok(())
}
// ANCHOR_END: single

// ANCHOR: multiple
#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let images = nekosbest::get_amount(nekosbest::Category::Neko, 20).await?.0;
    println!("{:?}", images);
    Ok(())
}
// ANCHOR_END: multiple

// ANCHOR: neko_details
#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let details = nekosbest::get(nekosbest::Category::Neko)
        .await?
        .details
        .try_into_neko()
        .unwrap();
    println!("Source: {}", details.source_url);
    println!("Artist: {}", details.artist_name);
    println!("Artist link: {}", details.artist_href);
    Ok(())
}
// ANCHOR_END: neko_details

// ANCHOR: gif_details
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
// ANCHOR_END: gif_details

// ANCHOR: st_neko
#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let resp = nekosbest::st_get::<nekosbest::Neko>().await?;
    let details = resp.details();
    println!("Artist: {}", details.artist_name);
    println!("Artist link: {}", details.artist_href);
    println!("Source: {}", details.source_url);
    Ok(())
}
// ANCHOR_END: st_neko

// ANCHOR: st_gif
#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let details = nekosbest::st_get::<nekosbest::Pat>().await?.details;
    println!("Anime name: {}", details.anime_name);
    Ok(())
}
// ANCHOR_END: st_gif

// ANCHOR: local
fn main() -> Result<(), Box<dyn std::error::Error>> {
    let img_url = nekosbest::local::Neko.get(); // requires the "local" feature
    println!("{}", img_url);
    Ok(())
}
// ANCHOR_END: local

// ANCHOR: local_with_random
fn main() {
    let your_random = unimplemented!();
    let img_url = nekosbest::local::Neko.get_random(your_random);
    println!("{}", img_url);
    Ok(())
}
// ANCHOR_END: local_with_random
