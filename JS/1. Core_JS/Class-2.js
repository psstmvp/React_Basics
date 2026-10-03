// Program: Variables and Data Types

// ====================================================
// Class 2: Variables and Data Types
// ====================================================

// --- 1. VARIABLE DECLARATION KEYWORDS (var vs let vs const) ---

// 'const' is used for variables whose values will NOT change (RECOMMENDED DEFAULT)
const companyName = "Tech Solutions Inc.";
console.log("Company:", companyName);
// companyName = "New Name"; // TypeError: Assignment to constant variable!

// 'let' is used when a variable value WILL change over time (e.g. counters, state)
let userAge = 25;
console.log("Initial Age:", userAge);
userAge = 26; // Valid re-assignment
console.log("Updated Age:", userAge);

// 'var' is older (pre-ES6), function-scoped, and has hoisting quirks (AVOID in modern code!)
var legacyVariable = "Avoid using var in modern projects";
console.log("Legacy var:", legacyVariable);


// --- 2. PRIMITIVE DATA TYPES ---

// A. String: textual data wrapped in quotes ("", '', or ``)
const studentName = "Alice";

// B. Number: integers, decimals, and negative numbers
const marks = 94.5;
const temperature = -4;

// C. Boolean: logical true or false
const isEnrolled = true;
const hasGraduated = false;

// D. Undefined: variable declared but not yet assigned any value
let futureRole;
console.log("futureRole value:", futureRole); // prints: undefined

// E. Null: intentional absence of any value
const middleName = null;

// F. BigInt: numbers larger than 2^53 - 1 (append 'n' at end)
const largeNumber = 9007199254740995n;

// G. Symbol: unique and immutable primitive identifier
const secretKey = Symbol("apiKey");


// --- 3. CHECKING TYPES USING 'typeof' OPERATOR ---
console.log("\n--- Checking Types using typeof operator ---");
console.log("typeof studentName :", typeof studentName); // "string"
console.log("typeof marks       :", typeof marks);       // "number"
console.log("typeof isEnrolled  :", typeof isEnrolled);  // "boolean"
console.log("typeof futureRole  :", typeof futureRole);  // "undefined"
console.log("typeof middleName  :", typeof middleName);  // "object" (Known JavaScript historical bug!)
console.log("typeof largeNumber :", typeof largeNumber); // "bigint"
console.log("typeof secretKey   :", typeof secretKey);   // "symbol"

/*
====================================================
Class 2 Summary: Variables and Data Types
====================================================

1. Modern Variable Declaration Rules:
   - Rule #1: Always prefer 'const'.
   - Rule #2: Use 'let' only when you intend to reassign the value.
   - Rule #3: Never use 'var' in modern Full Stack code.

2. Scope Differences:
   - let & const are BLOCK SCOPED: they exist only inside { } curly brackets.
   - var is FUNCTION SCOPED: it leaks outside of if-statements and loops!

3. JavaScript Data Types:
   - Primitive: string, number, boolean, undefined, null, bigint, symbol
   - Non-Primitive (Reference): Object, Array, Function
====================================================
*/
