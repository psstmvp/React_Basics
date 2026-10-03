// Program: Scope, Closures, and Hoisting

// ====================================================
// Class 12: Scope, Closures, and Hoisting
// ====================================================

// --- 1. SCOPES IN JAVASCRIPT ---
// Scope determines the accessibility (visibility) of variables.

// Global Scope
const globalAppName = "FullStackApp";

function testScope() {
    // Function / Local Scope
    const functionScopedVar = "I live inside testScope";

    if (true) {
        // Block Scope (let and const only)
        const blockScopedVar = "I live inside this if-block";
        var functionScopedWithVar = "I leak out of the if-block because of var!";
        console.log("Inside block:", blockScopedVar);
    }

    // console.log(blockScopedVar); // ReferenceError: blockScopedVar is not defined
    console.log("Leaked var:", functionScopedWithVar); // accessible! (reason why we avoid var)
}
testScope();


// --- 2. CLOSURES ---
// A closure is a function that remembers and accesses variables from its outer lexical scope
// even after that outer function has finished executing!

console.log("\n--- 2. Closures in Action (Counter Factory) ---");

function createCounter(initialValue = 0) {
    let count = initialValue; // Private variable enclosed in closure

    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getValue: function() {
            return count;
        }
    };
}

const myCounter = createCounter(10);
console.log("Initial Counter Value:", myCounter.getValue()); // 10
console.log("After Increment      :", myCounter.increment()); // 11
console.log("After Increment      :", myCounter.increment()); // 12
console.log("After Decrement      :", myCounter.decrement()); // 11
// 'count' cannot be directly modified or hacked from outside:
console.log("Direct access attempt:", myCounter.count); // undefined (Data Encapsulation!)


// --- 3. HOISTING ---
// JavaScript moves variable and function declarations to the top of their scope during compilation.

console.log("\n--- 3. Understanding Hoisting ---");

// Function declarations are FULLY HOISTED:
sayHello(); // Works even though defined below!

function sayHello() {
    console.log("Hello from hoisted function declaration!");
}

// Variables declared with 'var' are hoisted as 'undefined':
console.log("var before declaration:", hoistedVar); // undefined (no error, but dangerous!)
var hoistedVar = "Now I have value";

// Variables declared with 'let' and 'const' are hoisted into the TEMPORAL DEAD ZONE (TDZ):
// console.log(tdzVar); // ReferenceError: Cannot access 'tdzVar' before initialization!
const tdzVar = "Safe variable";

/*
====================================================
Class 12 Summary: Scope, Closures, and Hoisting
====================================================

1. The Three Scopes:
   - Global Scope  : Accessible everywhere.
   - Function Scope: Accessible only within the enclosing function.
   - Block Scope   : Variables declared with let and const inside { ... }.

2. What is a Closure?
   - A closure gives an inner function access to an outer function's scope.
   - Used for:
     * Data privacy (encapsulation).
     * State management (how React's useState hook retains values across re-renders!).
     * Function currying and event listeners.

3. Temporal Dead Zone (TDZ):
   - The time between entering a scope and variable declaration with let/const.
   - Accessing a variable in TDZ throws a ReferenceError.
====================================================
*/
