---
lastUpdated: false
---

# Adding Unofficial Libraries

## Contribution Guidelines for Unofficial Libraries

* Submissions **must** be written in English.
* The library owner must join our [Discord server](https://nekos.best/discord?ref=docs)
* Libraries must follow good code quality practices.
* Libraries must **not** contain malware or and other unsafe behavior.
* The library must be publicly accessible and actively maintained.
* Provide clear installation and usage instructions in your repository.

### We reserve the right to:

* Modify your submission after review.
* Remove your submission if it becomes outdated, unsafe, or unmaintained.

## Adding a New Unofficial Library

### 1. Fork this repository

### 2. Clone your fork and `cd` into the project directory

### 3. Install VitePress

You can find VitePress prerequisites in
[the official documentation](https://vitepress.dev/guide/getting-started#prerequisites).

::: code-group

```sh [npm]
npm add -D vitepress@next
```

```sh [pnpm]
pnpm add -D vitepress@next
```

```sh [yarn]
yarn add -D vitepress@next vue
```

```sh [bun]
bun add -D vitepress@next
```

:::

---

### 4. Add Your Unofficial Library to the Sidebar

1. Open `/docs/.vitepress/config.mts`.
2. Locate the **"Unofficial Libraries"** section in the sidebar.
3. Add a link to your library’s repository.
4. Keep the list in alphabetical order by programming language.

---

### 5. Start the Development Server

Before creating a pull request, verify locally that your changes did not break anything.

::: code-group

```sh [npm]
npm run dev
```

```sh [pnpm]
pnpm run dev
```

```sh [yarn]
yarn dev
```

```sh [bun]
bun run dev
```

:::

---

### 6. Create a Pull Request

Submit a pull request to the original repository.
