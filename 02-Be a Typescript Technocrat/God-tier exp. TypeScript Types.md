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
 Bro, tahole নে — **Shape-Based TypeScript Thinking Full Mental Model**
এটা তোর মাথায় ঢুকে গেলে TypeScript আর কখনো hard লাগবে না।
This is like “TS brain upgrade pack” 💥
(Mixed Bangla + English exactly how you like — স্বাচ্ছন্দ্য + comfort vibe)

---

# 🚀 **Shape-Based TypeScript Thinking — The Complete Mental Model**

## ⭐ 1) **TS = Shape System, Runtime = JS**

সবচেয়ে important—the foundation:

> **TypeScript শুধু shape check করে।
> Data আসলে সবসময় JavaScript.**

👉 অর্থাৎ TS বলে দেয়:

* তোমার object দেখতে কেমন হবে
* key gulo কি হবে
* ki property optional
* ki type return করবে
* ki data allow / disallow

কিন্তু runtime execution?
➡ JS করে।

---

# ⭐ 2) **Everything = Shape (Even functions!)**

Most people think “object”-এর shape define করা যায়।
But reality:

➡ Object has shape
➡ Array has shape
➡ Function has shape
➡ Class instance has shape
➡ Even union/intersection has shape rules
➡ Generics create shape dynamically
➡ Utility types modify shape

**So, TS = Shape manipulation toolkit.**

---

# ⭐ 3) **Two Kinds of Shape**

Understanding এইটা = God-mode clarity.

### 🔹 1) **Value-Level Shape (Primitive/Data)**

* number
* string
* boolean
* null
* undefined
  এগুলো data-এর atomic shape.

### 🔹 2) **Structure-Level Shape**

* object
* interface
* type alias
* class
* function type
* generics
* utility types
* mapped types
* conditional types

এগুলো rules declare করে:

> “এটা দেখতে এমন হবে।”

---

# ⭐ 4) **Type Alias = Shape Label**

```ts
type User = { name: string; age: number };
```

`User` কোনো new data type না.
এটা শুধু shape-এর নাম।

➡ “এ object-এর shape নাম User।”

---

# ⭐ 5) **Interface = Contract Shape**

```ts
interface Car {
  brand: string;
  model: string;
}
```

➡ “যে এই shape follow করবে, সে valid.”

Interface = contract
Type alias = shape label

**Both describe shapes.**

---

# ⭐ 6) **Intersection = Shape Merge**

```ts
type A = { a: number };
type B = { b: number };
type C = A & B;
// shape = { a: number, b: number }
```

Intersection = **AND** shape.
দুইটা shape combine হয়ে নতুন structure হয়।

---

# ⭐ 7) **Union = Shape Switch**

```ts
type ID = string | number;
```

Union = multiple possible shapes.

---

# ⭐ 8) **Function Type = Behavior Shape**

```ts
type Add = (x: number, y: number) => number;
```

তুই function-এর “shape” describe করছিস:

* input shape
* output shape

TS শুধু এই structure validate করবে.

---

# ⭐ 9) **Class = Runtime Value + Compile-Time Shape**

```ts
class User {
  name: string;
}
```

Class এর দুইটা nature:

1. Runtime → behaves like JS object constructor
2. Compile-time → shape হিসেবে use হয়

এটাই reason:

```ts
const u: User = new User();
```

Works perfectly.

---

# ⭐ 10) **Generics = Dynamic Shape Creator**

```ts
type Box<T> = { item: T };
```

Generics = placeholder shape
Later data অনুযায়ী shape create করে।

এটা TS-এর সবচেয়ে শক্তিশালী part.

---

# ⭐ 11) **Utility Types = Shape Transformers**

* `Partial<T>` → সব property optional shape
* `Required<T>` → সব required shape
* `Pick<T, K>` → shape থেকে specific অংশ
* `Omit<T, K>` → বাদ দেওয়া shape
* `Readonly<T>` → read-only shape version
* `Record<K, T>` → key-value shape generator

সবই shape manipulation.

---

# ⭐ 12) **Mapped Types = Shape Factory**

```ts
type ReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};
```

এটা whole shape loop করে নতুন shape বানায়।
**Insane power.**

---

# ⭐ 13) **Conditional Types = Logic-Based Shape**

```ts
type IsString<T> = T extends string ? true : false;
```

TS type system = programming language.
Data না, **shape logic** execute করে।

---

# ⭐ 14) **Infer = Shape Extraction Tool**

```ts
type R<T> = T extends (...args: any[]) => infer R ? R : never;
```

Infer = hidden shape বের করে আনে.
🔥 TS-এর most advanced power.

---

# ⭐ 15) **The Master Mental Model (Remember Always)**

> **TypeScript is not about data.
> It’s about describing the shape of data.**

And:

> **Types = Rules
> Interfaces = Contracts
> Classes = Shape + Runtime
> Generics = Dynamic shapes
> Utilities = Shape transformers
> Conditional + Infer = Shape logic**

যখনই নতুন কিছু শিখবি, নিজেকে জিজ্ঞেস কর:

➡ “এটা আরেকটা shape define করছে?”
➡ “না কি shape change করছে?”
➡ “না কি shape restrict করছে?”

এই তিনটা question = 100% clarity.

---

# 🔥 Want Level-2? (Super Advanced Mental Model Pack)

If you want bro, next step e ami দিবো:

### ✔ TypeScript structural typing

### ✔ Shape compatibility rules

### ✔ Excess property check

### ✔ Type narrowing full system

### ✔ Discriminated unions

### ✔ Control flow analysis

### ✔ How shape system works under-the-hood

### ✔ How TS compiler infers shape automatically

Just say:
**“Bro Level-2 দে”**
ar I’ll drop the god-tier follow-up 😎💥
