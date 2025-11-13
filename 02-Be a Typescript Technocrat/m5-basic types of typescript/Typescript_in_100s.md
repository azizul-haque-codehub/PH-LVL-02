Vai 😎 — ekhane TypeScript er **100-second crash guide** dei, super-short but full power ⚡👇

---

### 🧠 What is TypeScript?

👉 JavaScript + Types = TypeScript
Eta JavaScript-er superset, meaning **every JS code valid in TS**, but with extra type-safety, autocompletion, and bug detection.

---

### ⚙️ Setup

```bash
npm install -g typescript
tsc --init
```

* `.ts` file likho → compile with `tsc file.ts` → output `file.js`

---

### 🧩 Basics

```ts
let name: string = "Rafi";
let age: number = 19;
let isPro: boolean = true;

function greet(user: string): string {
  return `Hello ${user}`;
}
```

---

### 🧱 Objects & Arrays

```ts
type User = { name: string; age: number };
const person: User = { name: "Rafi", age: 19 };

let numbers: number[] = [1, 2, 3];
let users: User[] = [person];
```

---

### 🧮 Union & Literal Types

```ts
let status: "success" | "error" = "success";
let id: number | string = 101;
```

---

### ⚡ Interfaces

```ts
interface Product {
  id: number;
  name: string;
  price?: number; // optional
}

const item: Product = { id: 1, name: "Phone" };
```

---

### 🧠 Generics

```ts
function identity<T>(value: T): T {
  return value;
}
let output = identity<string>("Hello");
```

---

### 🧩 Classes

```ts
class Car {
  constructor(public brand: string, private speed: number) {}
  drive(): void {
    console.log(`${this.brand} is running at ${this.speed}km/h`);
  }
}
```

---

### 🧰 Enums

```ts
enum Direction {
  Up,
  Down,
  Left,
  Right,
}
```

---

### 🔐 Type Inference & Casting

```ts
let x = 10; // inferred number
let input = document.querySelector("input") as HTMLInputElement;
```

---

### 💡 Pro Tips

* Always use `strict` mode in `tsconfig.json`
* Use `type` for unions, `interface` for object shapes
* Use `never` for impossible cases
* Use `unknown` instead of `any`

---

⚙️ **Compile → Run Flow:**

```bash
tsc index.ts && node index.js
```

---
 