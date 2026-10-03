// Program: Conditional Statements

// ====================================================
// Class 4: Conditional Statements
// ====================================================

// --- 1. IF...ELSE IF...ELSE STATEMENTS ---
const userScore = 88;

console.log("--- 1. Grade Evaluation using if-else ---");
if (userScore >= 90) {
    console.log("Grade: A+ (Outstanding Performance)");
} else if (userScore >= 80) {
    console.log("Grade: A (Excellent Work)");
} else if (userScore >= 70) {
    console.log("Grade: B (Good)");
} else if (userScore >= 50) {
    console.log("Grade: C (Pass)");
} else {
    console.log("Grade: F (Fail - Review and Retake)");
}


// --- 2. SWITCH STATEMENT ---
// Best for comparing a single variable against multiple exact values
const requestMethod = "POST";

console.log("\n--- 2. REST API Request Router using switch ---");
switch (requestMethod) {
    case "GET":
        console.log("Fetching / Reading resource data from database...");
        break; // Stops execution from falling through to the next case
    case "POST":
        console.log("Creating new resource record in database...");
        break;
    case "PUT":
    case "PATCH":
        console.log("Updating existing resource record in database...");
        break;
    case "DELETE":
        console.log("Removing resource record from database...");
        break;
    default:
        console.log("Error: Unsupported HTTP request method!");
        break;
}


// --- 3. TRUTHY AND FALSY VALUES ---
// In JS, every value is inherently considered 'truthy' or 'falsy' in a boolean context.
console.log("\n--- 3. Understanding Falsy Values in JavaScript ---");
// The 6 standard Falsy values: false, 0, "", null, undefined, NaN

const emailInput = ""; // empty string is falsy

if (!emailInput) {
    console.log("Validation Alert: Email input cannot be empty!");
}

const userSession = { username: "akash_dev" }; // Non-empty object is truthy
if (userSession) {
    console.log("User is authenticated as:", userSession.username);
}

/*
====================================================
Class 4 Summary: Conditional Statements
====================================================

1. If-Else vs Switch:
   - Use if/else for ranges (e.g. score >= 80), complex boolean logic (&&, ||).
   - Use switch when matching a specific variable against discrete constant values.

2. The 6 Falsy Values in JavaScript:
   - false
   - 0 (and -0, 0n)
   - "" (empty string)
   - null
   - undefined
   - NaN (Not-a-Number)
   * EVERYTHING ELSE is TRUTHY (including empty arrays [] and empty objects {})!

3. Backend API Role:
   - Validating incoming user request bodies:
     if (!req.body.email || !req.body.password) {
         return res.status(400).json({ error: "Missing fields" });
     }
====================================================
*/
