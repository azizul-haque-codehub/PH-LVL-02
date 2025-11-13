🔥 Vai — ekhon cholo bujhi TypeScript-er **`tsconfig.json` file** er **basic theke advanced use**, step by step 💡

---

## 🧱 1. Basic Concept

`tsconfig.json` holo TypeScript compiler-er (tsc) **configuration brain** — eta bole dey,
➡️ *kivabe, kon file theke, kon rule use kore TypeScript compile korbe.*

একটা simple config create korte:

```bash
tsc --init
```

Eta ekta default file create korbe like 👇

```json
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "strict": true,
    "outDir": "./dist"
  },
  "include": ["src"]
}
```

---

## ⚙️ 2. Core Options (Basic Level)

### 🔹 `target`

JS output version define kore.

```json
"target": "es5" // output old JS (browser support beshi)
"target": "es2020" // modern syntax
```

### 🔹 `module`

Module system specify kore.

```json
"module": "commonjs" // Node.js style
"module": "esnext"   // Modern ES modules
```

### 🔹 `outDir` & `rootDir`

```json
"rootDir": "./src", // where your TS files are
"outDir": "./dist"  // where compiled JS files go
```

### 🔹 `strict`

সব type-checking rules enable kore (best practice)

```json
"strict": true
```

---

## 🧠 3. Intermediate Options

### 🔹 `sourceMap`

Enable kore `.map` files for debugging (dev tools e TypeScript code dekhte parbe)

```json
"sourceMap": true
```

### 🔹 `allowJs`

JS files-ke compile korte dey.

```json
"allowJs": true
```

### 🔹 `checkJs`

JS file er moddheo type error check korbe.

```json
"checkJs": true
```

### 🔹 `esModuleInterop`

Default import compatibility fix kore.

```json
"esModuleInterop": true
```

### 🔹 `noImplicitAny`

Type na dile warning dey.

```json
"noImplicitAny": true
```

### 🔹 `skipLibCheck`

Libraries (.d.ts) er type checking skip kore (compile fast hoy)

```json
"skipLibCheck": true
```

---

## 🧩 4. Advanced Uses

### 🔹 Path Aliases

Project er moddhe import shortcut banate:

```json
"baseUrl": "./",
"paths": {
  "@utils/*": ["src/utils/*"],
  "@components/*": ["src/components/*"]
}
```

Then import like:

```ts
import { formatDate } from "@utils/date";
```

---

### 🔹 Multiple Builds (like Frontend + Backend)

You can create separate config files:

```
tsconfig.json        // base
tsconfig.frontend.json
tsconfig.backend.json
```

Each one can `"extends": "./tsconfig.json"`
and override specific settings (e.g. `"outDir"`).

---

### 🔹 Incremental Builds (faster recompile)

```json
"incremental": true,
"tsBuildInfoFile": "./.tsbuildinfo"
```

---

### 🔹 Composite Projects (Monorepo / Multi-module)

```json
"composite": true,
"references": [{ "path": "../shared" }]
```

— use case: multiple TS packages that depend on each other.

---

### 🔹 Declaration Files

Type definitions generate korte:

```json
"declaration": true,
"declarationDir": "./types"
```

→ eta useful when making npm packages.

---

## 🧰 5. Include / Exclude

```json
"include": ["src/**/*"],
"exclude": ["node_modules", "dist"]
```

---

## 🪄 6. Example: Full Pro Config

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "rootDir": "./src",
    "outDir": "./build",
    "strict": true,
    "sourceMap": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "allowSyntheticDefaultImports": true,
    "forceConsistentCasingInFileNames": true,
    "incremental": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src"],
  "exclude": ["node_modules", "build"]
}
```

---

## 🚀 Bonus Tips

✅ Always use `"strict": true`
✅ Use path aliases for clean imports
✅ Use `"incremental": true"` for large projects
✅ Split configs for dev/prod builds

---
 