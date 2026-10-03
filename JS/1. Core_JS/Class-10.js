// Program: Objects and Object Manipulation

// ====================================================
// Class 10: Objects and Object Manipulation
// ====================================================

// --- 1. CREATING OBJECTS (Key - Value pairs) ---
const developer = {
  firstName: "Akash",
  lastName: "Kumar",
  role: "Full Stack Engineer",
  experienceYears: 4,
  skills: ["JavaScript", "TypeScript", "React", "Node.js", "MongoDB"],
  address: {
    city: "Bangalore",
    country: "India",
    pincode: "560001"
  },
  // Object Method
  getFullName: function () {
    // 'this' refers to the current object
    return `${this.firstName} ${this.lastName}`;
  }
};

console.log("--- 1. Accessing Object Properties ---");
// Dot notation (recommended)
console.log("Full Name (method)  :", developer.getFullName());
console.log("City (nested)       :", developer.address.city);

// Bracket notation (used when key is stored in a dynamic variable)
const dynamicKey = "role";
console.log("Dynamic property    :", developer[dynamicKey]);


// --- 2. ADDING, UPDATING, AND DELETING PROPERTIES ---
console.log("\n--- 2. Modifying Properties ---");
developer.isAvailableForHire = true; // Adding new property
developer.experienceYears = 5;       // Updating existing property
delete developer.address.pincode;    // Deleting property
console.log("Updated developer object:", developer);


// --- 3. OBJECT UTILITIES (Object.keys, Object.values, Object.entries) ---
console.log("\n--- 3. Object Utilities ---");
const userSettings = { theme: "dark", notifications: true, language: "en" };

// Object.keys() returns an array of property names
console.log("Keys    :", Object.keys(userSettings));

// Object.values() returns an array of property values
console.log("Values  :", Object.values(userSettings));

// Object.entries() returns an array of [key, value] pairs
console.log("Entries :", Object.entries(userSettings));


// --- 4. OBJECT FREEZE & SEAL ---
console.log("\n--- 4. Object.freeze() vs Object.seal() ---");
const config = { apiEndpoint: "https://api.myapp.com", timeout: 5000 };
Object.freeze(config); // Makes object immutable (cannot add, edit, or delete keys)
config.timeout = 10000; // Silently ignored (or throws error in strict mode)
console.log("Config timeout after freeze:", config.timeout); // still 5000

/*
====================================================
Class 10 Summary: Objects and Object Manipulation
====================================================

1. Dot Notation vs Bracket Notation:
   - Dot notation: obj.property (cleaner, used 95% of the time).
   - Bracket notation: obj["property"] or obj[variableKey] (required when key name has spaces,
     special characters, or is evaluated dynamically at runtime).

2. The 'this' Keyword in Methods:
   - In a regular method, 'this' points to the object that owns the method.
   - Note: Do NOT use arrow functions for object methods if you need 'this', because
     arrow functions do not have their own 'this' binding!

3. Full Stack Usage:
   - Every JSON payload exchanged between a React frontend and Node.js backend
     is parsed into a JavaScript object!
====================================================
*/
