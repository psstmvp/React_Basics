// Program: Strings and String Methods

// ====================================================
// Class 7: Strings and String Methods
// ====================================================

// --- 1. TEMPLATE LITERALS (Backticks `` and ${}) ---
const developer = "John Doe";
const framework = "React";
const experienceYears = 3;

// Old way (string concatenation):
const oldGreeting = "Hello, my name is " + developer + " and I use " + framework + " for " + experienceYears + " years.";

// Modern way (Template Literal):
const modernGreeting = `Hello, my name is ${developer} and I use ${framework} for ${experienceYears} years.`;

console.log("--- 1. Template Literals ---");
console.log(modernGreeting);

// Multi-line strings work effortlessly with template literals:
const sqlQuery = `
    SELECT id, username, email
    FROM users
    WHERE is_active = true
    ORDER BY created_at DESC;
`;
console.log("\nMulti-line string:\n", sqlQuery);


// --- 2. ESSENTIAL STRING METHODS ---
const rawEmail = "   Student.Dev@GMAIL.com   ";

console.log("--- 2. String Methods Demonstration ---");
console.log("Original raw string     :", `"${rawEmail}"`);

// .length property (counts total characters)
console.log("Length of string        :", rawEmail.length);

// .trim() (strips leading and trailing whitespace - essential for form cleaning)
const cleanEmail = rawEmail.trim();
console.log("After .trim()           :", `"${cleanEmail}"`);

// .toLowerCase() and .toUpperCase() (normalizing user input)
const normalizedEmail = cleanEmail.toLowerCase();
console.log("After .toLowerCase()    :", normalizedEmail);

// .includes() (checks if substring exists - returns boolean)
console.log("Contains '@gmail.com'?  :", normalizedEmail.includes("@gmail.com"));

// .startsWith() and .endsWith()
console.log("Starts with 'student'?  :", normalizedEmail.startsWith("student"));
console.log("Ends with '.com'?       :", normalizedEmail.endsWith(".com"));

// .slice(start, end) (extracts portions of a string)
const fullUrl = "https://api.github.com/users/akash";
const protocol = fullUrl.slice(0, 5); // "https"
console.log("Extracted protocol      :", protocol);

// .replace() and .replaceAll()
const sampleText = "I love Python and Python is great.";
console.log("Replace first 'Python'  :", sampleText.replace("Python", "JavaScript"));
console.log("Replace all 'Python'    :", sampleText.replaceAll("Python", "JavaScript"));

// .split() (splits string into array of parts)
const tagList = "react,nodejs,mongodb,express";
const tagsArray = tagList.split(",");
console.log("Split into Array        :", tagsArray);

/*
====================================================
Class 7 Summary: Strings and String Methods
====================================================

1. Template Literals (``):
   - Allow embedding variables and expressions directly: `${variable}`.
   - Support multiline text without awkward '\n' escape characters.

2. Key Methods in Web Applications:
   - input.trim()            : Stripping spaces before saving to database.
   - input.toLowerCase()     : Case-insensitive search & email normalization.
   - string.includes("word") : Checking search keywords or URL parameters.
   - string.split(",")       : Converting comma-separated form inputs to arrays.
====================================================
*/
