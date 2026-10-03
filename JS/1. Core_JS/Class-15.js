// Program: Async / Await and REST API Data Handling

// ====================================================
// Class 15: Async / Await and REST API Data Handling
// ====================================================

// --- 1. WHAT IS ASYNC / AWAIT? ---
// 'async/await' is syntactic sugar built on top of Promises.
// It allows us to write asynchronous code that looks and behaves like clean synchronous code!

// Helper function simulating a REST API network call to a database
function fetchProductFromDatabase(productId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (productId > 0) {
                resolve({
                    id: productId,
                    name: "Full Stack Web Development Masterclass",
                    price: 49.99,
                    inStock: true
                });
            } else {
                reject(new Error("Invalid Product ID: ID must be a positive number!"));
            }
        }, 500);
    });
}

function processPayment(amount) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ transactionId: "TXN_998877", status: "PAID", amount });
        }, 500);
    });
}


// --- 2. ASYNC FUNCTION WITH TRY...CATCH ERROR HANDLING ---
async function handleCheckoutFlow(productId) {
    console.log(`--- Starting Checkout for Product #${productId} ---`);

    try {
        // 'await' pauses execution of this async function until the promise resolves!
        console.log("1. Fetching product details from database...");
        const product = await fetchProductFromDatabase(productId);
        console.log("   Found Product:", product.name, `($${product.price})`);

        console.log("2. Processing payment with payment gateway...");
        const paymentResult = await processPayment(product.price);
        console.log("   Payment Successful! TXN ID:", paymentResult.transactionId);

        console.log("3. Checkout complete! Returning receipt to client.\n");
        return { success: true, receipt: paymentResult };

    } catch (error) {
        // Catches any rejected promise or thrown error in the try block
        console.error("   Checkout Failed! Reason:", error.message, "\n");
        return { success: false, error: error.message };

    } finally {
        console.log("   [Audit Log] Checkout session closed.");
    }
}


// --- 3. EXECUTING ASYNC FUNCTIONS ---
async function main() {
    // Test Case 1: Successful checkout
    await handleCheckoutFlow(101);

    // Test Case 2: Handled error checkout
    await handleCheckoutFlow(-5);
}

main();

/*
====================================================
Class 15 Summary: Async / Await
====================================================

1. Rules of Async / Await:
   - The 'await' keyword can ONLY be used inside functions marked with 'async'.
   - An 'async' function ALWAYS returns a Promise.
   - If an error is thrown, the Promise is rejected.

2. Error Handling:
   - Always wrap 'await' calls inside a try...catch block to handle network errors,
     server crashes, or invalid data responses gracefully.

3. Role in Full Stack Web Development:
   - Frontend (React):
     async function loadPosts() {
         try {
             const res = await fetch("https://api.example.com/posts");
             const data = await res.json();
             setPosts(data);
         } catch(err) {
             setError(err.message);
         }
     }
   - Backend (Node.js & Express):
     app.get("/users", async (req, res) => {
         const users = await UserModel.find();
         res.json(users);
     });
====================================================
*/
