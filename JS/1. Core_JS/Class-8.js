// Program: Arrays and Basic Array Operations

// ====================================================
// Class 8: Arrays and Basic Array Operations
// ====================================================

// --- 1. CREATING ARRAYS & ACCESSING ELEMENTS ---
const fruits = ["Apple", "Banana", "Cherry", "Mango"];

console.log("--- 1. Array Basics ---");
console.log("Entire array           :", fruits);
console.log("Total items (.length)  :", fruits.length);
console.log("First item (index 0)   :", fruits[0]); // Apple
console.log("Last item              :", fruits[fruits.length - 1]); // Mango

// Modifying an element by index
fruits[1] = "Blueberry";
console.log("After modifying index 1:", fruits);


// --- 2. ADDING AND REMOVING ELEMENTS ---
console.log("\n--- 2. Push, Pop, Shift, Unshift ---");

// .push() -> Adds elements to the END of array
fruits.push("Orange");
console.log("After .push('Orange')  :", fruits);

// .pop() -> Removes the LAST element
const removedLast = fruits.pop();
console.log("After .pop()           :", fruits, "| Removed item:", removedLast);

// .unshift() -> Adds elements to the BEGINNING of array
fruits.unshift("Strawberry");
console.log("After .unshift('...')  :", fruits);

// .shift() -> Removes the FIRST element
const removedFirst = fruits.shift();
console.log("After .shift()         :", fruits, "| Removed item:", removedFirst);


// --- 3. SLICE VS SPLICE ---
console.log("\n--- 3. Slice (Non-mutating) vs Splice (Mutating) ---");

// .slice(start, end) creates a SHALLOW COPY of a portion without changing the original array
const numbers = [10, 20, 30, 40, 50];
const subArray = numbers.slice(1, 4); // takes indices 1, 2, 3 (not 4)
console.log("Original numbers       :", numbers);
console.log("Result of .slice(1, 4) :", subArray);

// .splice(startIndex, deleteCount, item1, item2...) MUTATES (alters) original array!
const colors = ["Red", "Green", "Blue", "Yellow"];
// Delete 1 item at index 1 and insert "Purple" in its place
const deleted = colors.splice(1, 1, "Purple");
console.log("After .splice(1, 1, 'Purple'):", colors, "| Deleted:", deleted);


// --- 4. USEFUL UTILITIES: indexOf, includes, reverse, concat ---
console.log("\n--- 4. Array Utilities ---");
console.log("IndexOf 'Blue' in colors :", colors.indexOf("Blue")); // 2
console.log("Includes 'Red' in colors :", colors.includes("Red")); // true

const listA = [1, 2];
const listB = [3, 4];
const combined = listA.concat(listB);
console.log("Concatenated list        :", combined);

/*
====================================================
Class 8 Summary: Arrays and Basic Operations
====================================================

1. Array Methods Cheat Sheet:
   - push(item)   : Adds to end
   - pop()        : Removes from end
   - unshift(item): Adds to start
   - shift()      : Removes from start
   - slice(start, end): Non-destructive copy of elements
   - splice(start, count, ...insert): Destructive modification in-place
   - includes(val): Checks if element exists (returns boolean)

2. Critical Rule for React Developers:
   - In React state management, state must be IMMUTABLE!
   - Prefer methods that do NOT mutate the original array (.slice(), .concat(), spread [...])
     over methods that mutate (.splice(), .reverse(), .sort()).
====================================================
*/
