// Program: Asynchronous JavaScript, Callbacks, and Timers

// ====================================================
// Class 13: Asynchronous JavaScript & Timers
// ====================================================

// --- 1. SYNCHRONOUS VS ASYNCHRONOUS EXECUTION ---
// JavaScript is single-threaded (executes one line at a time).
// Synchronous code blocks the thread until finished.
// Asynchronous code delegates tasks (like network calls or timers) and continues execution!

console.log("--- 1. Execution Order Demonstration ---");
console.log("Step 1: Synchronous code starts.");

// setTimeout schedules a callback to run after specified milliseconds (non-blocking)
setTimeout(() => {
    console.log("Step 3: Asynchronous timer (after 1000ms delay) finished!");
}, 1000);

console.log("Step 2: Synchronous code finishes immediately (before timer callback)!");


// --- 2. SETINTERVAL AND CLEARINTERVAL ---
console.log("\n--- 2. Repeated Timer (setInterval) ---");
let ticks = 0;

// setInterval runs repeatedly every X milliseconds
const timerId = setInterval(() => {
    ticks++;
    console.log(`Heartbeat tick #${ticks} [${new Date().toLocaleTimeString()}]`);

    // Stop timer after 3 ticks to avoid infinite running in Node.js
    if (ticks >= 3) {
        clearInterval(timerId); // Cancels scheduled interval
        console.log("Heartbeat stopped with clearInterval().");
    }
}, 500);


// --- 3. CALLBACK FUNCTIONS AND CALLBACK HELL ---
// A callback is a function passed into another function to be called when an operation completes.

function fetchUserData(userId, callback) {
    console.log(`\nFetching user data for ID: ${userId}...`);
    setTimeout(() => {
        const user = { id: userId, username: "akash_dev" };
        callback(null, user);
    }, 800);
}

function fetchUserOrders(username, callback) {
    console.log(`Fetching orders for ${username}...`);
    setTimeout(() => {
        const orders = ["Order #101 - Laptop", "Order #102 - Monitor"];
        callback(null, orders);
    }, 800);
}

// Nested callbacks leading to "Pyramid of Doom" / Callback Hell:
fetchUserData(1, (err, user) => {
    if (err) return console.error(err);
    console.log("Received User:", user);

    fetchUserOrders(user.username, (err, orders) => {
        if (err) return console.error(err);
        console.log("Received Orders:", orders);
        console.log("--> This nesting was replaced by Promises in modern JS (Class 14)!");
    });
});

/*
====================================================
Class 13 Summary: Asynchronous JavaScript & Timers
====================================================

1. JavaScript Event Loop:
   - Call Stack: Runs current synchronous code.
   - Web APIs / Node APIs: Handles timers, HTTP requests, file reads in the background.
   - Callback Queue / Microtask Queue: Holds waiting callbacks.
   - Event Loop: Moves callbacks to the stack when the stack is empty.

2. Timers:
   - setTimeout(callback, ms): Runs callback once after ms delay.
   - clearTimeout(id): Cancels the timeout.
   - setInterval(callback, ms): Runs callback continuously every ms.
   - clearInterval(id): Stops interval timer.

3. The Problem with Callbacks:
   - Deeply nested callbacks become unreadable ("Callback Hell" / "Pyramid of Doom")
   - Difficult error handling.
   - Solved by Promises (Class 14) and Async/Await (Class 15)!
====================================================
*/
