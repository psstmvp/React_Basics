// Program: Functions in JavaScript

// ====================================================
// Class 6: Functions in JavaScript
// ====================================================

// --- 1. FUNCTION DECLARATION ---
// Hoisted: Can be called before its definition in the code
function greetUser(userName) {
    return `Hello, ${userName}! Welcome to full stack development.`;
}

console.log("--- 1. Function Declaration ---");
console.log(greetUser("akash"));


// --- 2. FUNCTION EXPRESSION ---
// Stored in a variable, NOT hoisted
const calculateArea = function (width, height) {
    return width * height;
};

console.log("\n--- 2. Function Expression ---");
console.log("Rectangle Area (10 x 5):", calculateArea(10, 5));


// --- 3. ARROW FUNCTIONS (ES6 => Standard in Modern React) ---
// Arrow functions provide a cleaner, concise syntax and lexical 'this' binding
const addNumbers = (a, b) => {
    return a + b;
};

// Shorthand: Single expression returns automatically (implicit return)
const square = num => num * num;

console.log("\n--- 3. Arrow Functions ---");
console.log("addNumbers(20, 30) :", addNumbers(20, 30));
console.log("square(7)          :", square(7));


// --- 4. DEFAULT PARAMETERS ---
// Default values used when arguments are omitted or undefined
function createDatabaseUser(username, role = "Viewer", isActive = true) {
    return {
        username: username,
        role: role,
        isActive: isActive,
        createdAt: new Date().toISOString()
    };
}

console.log("\n--- 4. Default Parameters ---");
console.log("User with defaults:", createDatabaseUser("alex_dev"));
console.log("User with custom role:", createDatabaseUser("admin_sarah", "SuperAdmin"));


// --- 5. FIRST-CLASS CITIZENS (Functions as arguments / Callbacks) ---
// In JS, functions can be passed into other functions as arguments
function calculateDiscount(price, discountFn) {
    return discountFn(price);
}

const tenPercentOff = price => price * 0.90;
const festivalFiftyOff = price => price * 0.50;

console.log("\n--- 5. Functions as Arguments (Callbacks) ---");
console.log("Regular 10% discount on $200:", calculateDiscount(200, tenPercentOff));
console.log("Festival 50% discount on $200:", calculateDiscount(200, festivalFiftyOff));

/*
====================================================
Class 6 Summary: Functions in JavaScript
====================================================

1. Arrow Functions (=>) vs Regular Functions:
   - Arrow functions do NOT have their own 'this' keyword (they inherit 'this' from the enclosing scope).
   - In React functional components and hooks (useState, useEffect), arrow functions
     are the standard syntax used everywhere.

2. Syntax Forms of Arrow Functions:
   - Zero parameters : const sayHi = () => "Hello";
   - One parameter   : const double = x => x * 2;
   - Multiple params : const sum = (a, b) => a + b;
   - Multiple lines  : const doWork = (a, b) => { ... return result; };

3. Default Parameters:
   - Provide fallback values: function fn(a = 10, b = 20) { ... }
====================================================
*/
