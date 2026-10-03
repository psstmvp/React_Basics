// Program: Modern ES6+ JavaScript Features

// ====================================================
// Class 11: Modern ES6+ Features
// ====================================================

// --- 1. DESTRUCTURING ASSIGNMENT ---
// Unpacking values from arrays or objects into distinct variables

// A. Object Destructuring (Extremely common in React Props!):
const userProfile = {
    id: 101,
    name: "Samantha Ray",
    email: "samantha@example.com",
    role: "Admin"
};

// Instead of: const name = userProfile.name; const email = userProfile.email;
const { name, email, role, phone = "Not Provided" } = userProfile;
console.log("--- 1. Object Destructuring ---");
console.log(`Name: ${name}, Email: ${email}, Role: ${role}, Phone: ${phone}`);

// B. Array Destructuring (Used in React Hooks like const [count, setCount] = useState(0)):
const rgbColors = [255, 128, 0];
const [red, green, blue] = rgbColors;
console.log("\n--- Array Destructuring ---");
console.log(`R: ${red}, G: ${green}, B: ${blue}`);


// --- 2. SPREAD OPERATOR (...) ---
// Expands an iterable into individual elements (used for copying and merging)

console.log("\n--- 2. Spread Operator (...) ---");
// Copying & Merging Arrays:
const frontend = ["HTML", "CSS", "JS"];
const backend = ["Node.js", "Express", "MongoDB"];
const fullStack = [...frontend, ...backend, "Git & GitHub"];
console.log("Merged Stack:", fullStack);

// Copying & Updating Objects (IMMUTABLE STATE UPDATES IN REACT!):
const originalUser = { id: 1, name: "Mark", status: "offline" };
const updatedUser = {
    ...originalUser, // copies all properties
    status: "online" // overrides status property safely
};
console.log("Original User :", originalUser);
console.log("Updated User  :", updatedUser);


// --- 3. REST PARAMETER (...) ---
// Condenses multiple function arguments into a single array
console.log("\n--- 3. Rest Parameter ---");
function calculateCartTotal(discountPercent, ...itemPrices) {
    // itemPrices is an array of all remaining arguments
    const subtotal = itemPrices.reduce((acc, price) => acc + price, 0);
    const finalAmount = subtotal * (1 - discountPercent / 100);
    return finalAmount;
}

console.log("Cart Total (10% discount on 20, 50, 30): $" + calculateCartTotal(10, 20, 50, 30));


// --- 4. OPTIONAL CHAINING (?.) ---
// Safely accesses nested object properties without throwing 'Cannot read property of undefined' error
console.log("\n--- 4. Optional Chaining (?.) ---");
const client = {
    name: "Acme Corp",
    contact: {
        email: "contact@acme.com"
        // phone is missing
    }
};

console.log("Client Email :", client?.contact?.email);
console.log("Client Phone :", client?.contact?.phone?.countryCode); // returns undefined safely, NO ERROR!


// --- 5. NULLISH COALESCING OPERATOR (??) ---
// Returns the right-hand operand only if the left-hand operand is null or undefined
console.log("\n--- 5. Nullish Coalescing (??) ---");
const userSettings = {
    itemsPerPage: 0, // 0 is a valid number, NOT null/undefined!
    theme: null
};

// '||' mistakenly treats 0 as falsy and replaces it with default 10:
console.log("Using OR (||) :", userSettings.itemsPerPage || 10); // 10 (Incorrect!)

// '??' correctly keeps 0 because it's not null/undefined:
console.log("Using ??      :", userSettings.itemsPerPage ?? 10); // 0 (Correct!)
console.log("Theme fallback:", userSettings.theme ?? "system-default"); // "system-default"

/*
====================================================
Class 11 Summary: Modern ES6+ Features
====================================================

1. React Developer Essentials:
   - Object Destructuring: Receiving props in functional components:
     function UserCard({ name, avatar, bio }) { ... }
   - Spread Operator: Creating new state objects without mutating old state:
     setUserData(prev => ({ ...prev, name: "New Name" }));

2. Optional Chaining (?.) and Nullish Coalescing (??):
   - Vital when dealing with asynchronous API responses where nested data might not yet be loaded.
   - Prevents the classic "Uncaught TypeError: Cannot read properties of undefined".
====================================================
*/
