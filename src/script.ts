// Explicit Types
// Explicit type assignment are easier to read and more intentional.

let userName: string = "Borhan"; // explicitly says it's a string
let age: number = 25; // explicitly says it's a number
let isAdmin: boolean = true; // explicitly says it's a boolean

// Implicit Type
// Implicit - TypeScript will "guess" the type, based on the assigned value:
let firstName = "Dylan";

// 2️⃣ Union Types

// Union types let a variable hold more than one type — by joining them with the | (pipe) symbol.

let id: string | number;

id = 101; // ✅ OK
id = "ABC123"; // ✅ OK
// id = true;  // ❌ Error: boolean not allowed

type UserId = string | number;

function getUser(id: UserId) {
  console.log(`Fetching user with ID: ${id}`);
}

//এবার আমরা TypeScript-এর Special Types দেখবো।

// 1️⃣ any Type
// any lets a variable hold any type, like turning off TypeScript’s type checking.

let data: any;
data = 123; // ✅ OK
data = "Hello"; // ✅ OK
data = true; // ✅ OK

// 2️⃣ unknown Type
// unknown is safer than any. You can assign any type, but you must check the type before using it.

let value: unknown;
value = 123;
value = "Hello";

// Type narrowing is required
if (typeof value === "string") {
  console.log(value.toUpperCase());
}

// 3️⃣ void Type
// English: Represents no value — usually for functions that don’t return anything.

function logMessage(msg: string): void {
  console.log(msg);
}

// 4️⃣ never Type
//  Represents a value that never occurs — functions that never return or always throw errors.

function throwError(message: string): never {
  throw new Error(message);
}

// 5️⃣ null & undefined
//  Represent absence of a value. You can use them directly or in union types.
let user: string | null = null;
let ages: number | undefined = undefined;
