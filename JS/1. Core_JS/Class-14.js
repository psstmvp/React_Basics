// Program: Promises in JavaScript

// ====================================================
// Class 14: Promises in JavaScript
// ====================================================

// --- 1. WHAT IS A PROMISE? ---
// A Promise represents the eventual completion (or failure) of an asynchronous operation
// and its resulting value. It has 3 states:
// - PENDING   : Initial state, neither fulfilled nor rejected.
// - FULFILLED : The operation completed successfully (resolve).
// - REJECTED  : The operation failed with an error (reject).

function checkServerHealth(isServerOnline) {
    return new Promise((resolve, reject) => {
        console.log("Pinging server...");

        setTimeout(() => {
            if (isServerOnline) {
                // Operation succeeded
                resolve({ status: 200, message: "Server is healthy and running!" });
            } else {
                // Operation failed
                reject(new Error("503 Service Unavailable: Server is down!"));
            }
        }, 800);
    });
}

// --- 2. CONSUMING PROMISES (.then, .catch, .finally) ---
console.log("--- 1. Handling Fulfilled Promise ---");
checkServerHealth(true)
    .then(response => {
        // Runs when resolve() was called
        console.log("Success Result:", response.message);
    })
    .catch(error => {
        // Runs when reject() was called
        console.error("Error Caught:", error.message);
    })
    .finally(() => {
        // Runs regardless of success or failure (good for cleanup/spinners)
        console.log("Ping operation completed (finally block).");
    });


// --- 3. PROMISE CHAINING (Eliminating Callback Hell) ---
function getUserId(username) {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ id: 42, username }), 400);
    });
}

function getUserProfile(id) {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ id, role: "FullStackDeveloper", theme: "dark" }), 400);
    });
}

console.log("\n--- 2. Promise Chaining ---");
getUserId("akash_dev")
    .then(user => {
        console.log(`Step A: Got user ${user.username} with ID ${user.id}`);
        return getUserProfile(user.id); // Returns another promise
    })
    .then(profile => {
        console.log("Step B: Got profile data:", profile);
    })
    .catch(err => console.error("Chain Error:", err));


// --- 4. PROMISE.ALL() ---
// Runs multiple promises in parallel and waits for all of them to resolve!
const fetchUsersPromise = new Promise(res => setTimeout(() => res(["User A", "User B"]), 500));
const fetchPostsPromise = new Promise(res => setTimeout(() => res(["Post 1", "Post 2"]), 700));

Promise.all([fetchUsersPromise, fetchPostsPromise])
    .then(([users, posts]) => {
        console.log("\n--- 3. Promise.all() parallel results ---");
        console.log("All fetched at once:", { users, posts });
    })
    .catch(err => console.error("One of the parallel requests failed:", err));

/*
====================================================
Class 14 Summary: Promises in JavaScript
====================================================

1. Why Promises over Callbacks?
   - Flat, readable chainable syntax with .then().
   - Centralized error handling using a single .catch() block.
   - Clean handling of parallel requests with Promise.all().

2. Promise Static Methods:
   - Promise.all([p1, p2])      : Resolves when ALL pass; fails immediately if ANY fails.
   - Promise.allSettled([p1, p2]): Waits for all to finish, whether resolved or rejected.
   - Promise.race([p1, p2])     : Resolves/rejects as soon as the FASTEST promise settles.
   - Promise.resolve(val)       : Returns an immediately resolved promise.
   - Promise.reject(err)        : Returns an immediately rejected promise.
====================================================
*/
