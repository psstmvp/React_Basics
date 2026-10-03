// Program: Operators and Expressions

// ====================================================
// Class 3: Operators and Expressions
// ====================================================

// --- 1. ARITHMETIC OPERATORS ---
let num1 = 15;
let num2 = 4;

console.log("--- 1. Arithmetic Operators ---");
console.log("Addition (15 + 4)       :", num1 + num2); // 19
console.log("Subtraction (15 - 4)    :", num1 - num2); // 11
console.log("Multiplication (15 * 4) :", num1 * num2); // 60
console.log("Division (15 / 4)       :", num1 / num2); // 3.75
console.log("Modulus / Remainder (%) :", num1 % num2); // 3 (15 divided by 4 leaves remainder 3)
console.log("Exponentiation (2 ** 3) :", 2 ** 3);      // 8 (2 raised to power 3)

// --- 2. ASSIGNMENT & SHORTHAND OPERATORS ---
let count = 10;
count += 5; // equivalent to count = count + 5; (15)
count -= 2; // count = count - 2; (13)
count *= 2; // count = count * 2; (26)
console.log("\n--- 2. Assignment Operators ---");
console.log("Updated count after shorthand operations:", count);

// --- 3. COMPARISON OPERATORS (== vs ===) ---
console.log("\n--- 3. Comparison Operators ---");
console.log("Loose Equality   (5 == '5')  :", 5 == "5");   // true (converts string to number - DANGEROUS!)
console.log("Strict Equality  (5 === '5') :", 5 === "5");  // false (checks BOTH type and value - BEST PRACTICE!)
console.log("Loose Not Equal  (5 != '5')  :", 5 != "5");   // false
console.log("Strict Not Equal (5 !== '5') :", 5 !== "5");  // true
console.log("Greater than (10 > 5)        :", 10 > 5);     // true
console.log("Less than or equal (10 <= 10):", 10 <= 10);   // true

// --- 4. LOGICAL OPERATORS (&&, ||, !) ---
console.log("\n--- 4. Logical Operators ---");
let hasToken = true;
let isUserAdmin = false;

// AND (&&): returns true only if BOTH operands are true
console.log("hasToken && isUserAdmin :", hasToken && isUserAdmin); // false

// OR (||): returns true if AT LEAST ONE operand is true
console.log("hasToken || isUserAdmin :", hasToken || isUserAdmin); // true

// NOT (!): inverts the boolean truth value
console.log("!hasToken               :", !hasToken);               // false

// --- 5. TERNARY OPERATOR (condition ? ifTrue : ifFalse) ---
console.log("\n--- 5. Ternary Operator ---");
let cartTotal = 120;
// If total > 100, shipping is free (0), otherwise $15
let shippingFee = cartTotal > 100 ? 0 : 15;
console.log(`Cart total: $${cartTotal}, Shipping fee: $${shippingFee}`);

/*
====================================================
Class 3 Summary: Operators and Expressions
====================================================

1. Golden Rule of Equality in JavaScript:
   - Always use strict equality === and strict inequality !==.
   - Avoid loose equality == because it performs unexpected type conversions
     (e.g., false == 0 is true, "" == 0 is true, null == undefined is true).

2. Ternary Operator in Full Stack / React:
   - In React JSX, you cannot write regular if/else statements inside HTML tags.
   - Instead, the ternary operator is used constantly for conditional rendering:
     {isLoggedIn ? <UserProfile /> : <LoginButton />}

3. Short-Circuit Evaluation:
   - expr1 && expr2 -> If expr1 is false, expr2 is skipped.
   - expr1 || expr2 -> If expr1 is true, expr2 is skipped.
====================================================
*/
