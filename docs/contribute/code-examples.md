---
lastUpdated: false
---

# Adding New Code Examples

## Contribution Guidelines for Code Examples

* Submissions **must** be written in English.
* Document your example as thoroughly as possible.
* Ensure your code works and has been properly tested.

### We reserve the right to:

* Modify your submission after it is submitted.
* Remove your submission if necessary.

## Creating a New Code Example

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

### 4. Add Your Code Example

#### 4.1 Create the example file

1. Create a new file in `/docs/examples` named after the programming language.
2. The filename must end with `.md`.
3. Include at least **two different ways** to make API calls.

#### 4.2 Add the example to the sidebar

1. Open `/docs/.vitepress/config.mts`.
2. Locate the **"Code Examples"** section in the sidebar.
3. Add your new file to the list.
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
