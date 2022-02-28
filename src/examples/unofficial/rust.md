# Using Rust

Example added by: [oaleaf](https://github.com/oaleaf)

---

Add the following to your `Cargo.toml`:

```toml
[dependencies]
nekosbest = "0.11.0"
```

Getting a single URL:

```rust
{{#include rust.rs:single}}
```

Multiple URLs:

```rust
{{#include rust.rs:multiple}}
```

# Details

For `Category::Neko` (previously `Category::Nekos`) and `Category::Kitsune`:

```rust
{{#include rust.rs:neko_details}}
```

Everything else:

```rust
{{#include rust.rs:gif_details}}
```

## With the `strong-types` feature

Note: this is an experimental feature, and may change at any time.

For `Category::Neko`:

```rust
{{#include rust.rs:st_neko}}
```

Everything else:

```rust
{{#include rust.rs:st_gif}}
```

# The `local` feature
Skip requests to the API completely, generating urls locally from metadata pulled in during build time:

```rust
{{#include rust.rs:local}}
```

Or with your own random number (the default is the thread RNG):

```rust
{{#include rust.rs:local_with_random}}
```
