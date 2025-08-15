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
