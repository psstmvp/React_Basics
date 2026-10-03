// Program: Loops and Iteration

// ====================================================
// Class 5: Loops and Iteration
// ====================================================

// --- 1. CLASSIC FOR LOOP ---
// Syntax: for (initialization; condition; increment/decrement)
console.log("--- 1. Classic for loop (Counts 1 to 5) ---");
for (let i = 1; i <= 5; i++) {
    console.log(`Counter value: ${i}`);
}

// --- 2. WHILE LOOP ---
// Runs as long as condition evaluates to true
console.log("\n--- 2. While loop (Doubling numbers under 50) ---");
let number = 2;
while (number < 50) {
    console.log(`Current power: ${number}`);
    number *= 2;
}

// --- 3. DO-WHILE LOOP ---
// Body executes AT LEAST ONCE before condition is evaluated
console.log("\n--- 3. Do-While loop ---");
let attempt = 10;
do {
    console.log(`Attempt #${attempt}: This runs once even if attempt is already >= 5!`);
    attempt++;
} while (attempt < 5);

// --- 4. BREAK AND CONTINUE ---
console.log("\n--- 4. break and continue demo ---");
for (let i = 1; i <= 6; i++) {
    if (i === 3) {
        console.log(`--> Skipped number ${i} using 'continue'`);
        continue; // jumps directly to next iteration
    }
    if (i === 5) {
        console.log(`--> Terminated loop at number ${i} using 'break'`);
        break; // exits the loop completely
    }
    console.log(`Processing item: ${i}`);
}

// --- 5. MODERN FOR...OF LOOP (Iterates over Array values) ---
console.log("\n--- 5. Modern for...of loop on Array ---");
const techStack = ["HTML", "CSS", "JavaScript", "React", "Node.js"];
for (const tech of techStack) {
    console.log(`Learning technology: ${tech}`);
}

// --- 6. FOR...IN LOOP (Iterates over Object keys) ---
console.log("\n--- 6. for...in loop on Object properties ---");
const serverConfig = { host: "localhost", port: 5000, protocol: "https" };
for (const key in serverConfig) {
    console.log(`${key} => ${serverConfig[key]}`);
}

/*
====================================================
Class 5 Summary: Loops and Iteration
====================================================

1. Loop Choices:
   - for: Best for standard counting and index-based loops.
   - while: Best when you don't know the exact count in advance.
   - do-while: Best when code MUST run at least once (e.g. prompt user for password).
   - for...of: Best modern loop for iterating directly over arrays/strings.
   - for...in: Used to loop through the property keys of an object.

2. Loop Control:
   - continue: Skips the current turn and jumps to next iteration.
   - break: Stops and exits the entire loop immediately.

3. Caution:
   - Always ensure your loop has a terminating condition; otherwise an infinite
     loop will freeze your Node.js server or browser thread!
====================================================
*/
