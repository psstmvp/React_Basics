// Program: Introduction to JavaScript and Console Output

// ====================================================
// Class 1: Introduction to JavaScript & Console Output
// ====================================================

// 1. Single-line comments start with two forward slashes (//)
/* 
   2. Multi-line comments start with a slash-star 
      and end with a star-slash 
*/

// Printing messages to the console
console.log("Welcome to JavaScript for Full Stack Web Development!");
console.log("JavaScript is running directly via Node.js runtime without any HTML or CSS!");

// Printing numbers and mathematical calculations
console.log("The answer to 10 + 25 is:", 10 + 25);

// Different console methods:
// Standard informational message
console.info("Info: Node.js is executing this script.");

// Warning message (useful for deprecation warnings)
console.warn("Warning: This is a sample warning message.");

// Error message (useful for debugging exceptions)
console.error("Error: This is a sample error message.");

// Tabular format for structured data
console.table([
    { name: "John Doe", role: "Frontend Developer", language: "JavaScript" },
    { name: "Jane Smith", role: "Backend Developer", language: "Node.js" },
    { name: "Alex Wong", role: "Full Stack Engineer", language: "TypeScript" }
]);

/*
====================================================
Class 1 Summary: Introduction to JavaScript
====================================================

1. What is JavaScript?
   - JavaScript is a high-level, interpreted programming language.
   - It is the only language natively supported by web browsers.
   - With Node.js, JavaScript can also run outside browsers directly on servers,
     making it the ultimate language for Full Stack development!

2. How to run this file directly:
   - Open your terminal / command prompt.
   - Navigate to this folder.
   - Run: node Class-1.js

3. Console Output Methods:
   - console.log()   : Standard output for debugging and inspecting variables.
   - console.warn()  : Prints warnings in yellow in most terminals/consoles.
   - console.error() : Prints errors in red.
   - console.table() : Displays arrays of objects in a clean table format.
====================================================
*/
