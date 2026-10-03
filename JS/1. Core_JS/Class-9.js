// Program: Array Higher-Order Methods (Essential for React & Full Stack)

// ====================================================
// Class 9: Array Higher-Order Methods
// ====================================================

// Sample e-commerce products data from a REST API:
const products = [
    { id: 1, title: "Wireless Headphones", price: 80, inStock: true, category: "Electronics" },
    { id: 2, title: "Mechanical Keyboard", price: 120, inStock: false, category: "Electronics" },
    { id: 3, title: "Coffee Mug", price: 15, inStock: true, category: "Home" },
    { id: 4, title: "Gaming Mouse", price: 60, inStock: true, category: "Electronics" },
    { id: 5, title: "Desk Lamp", price: 35, inStock: true, category: "Home" }
];


// --- 1. .forEach() ---
// Executes a callback function once for each array element (does NOT return anything)
console.log("--- 1. .forEach() Method ---");
products.forEach((product, index) => {
    console.log(`Product #${index + 1}: ${product.title} costs $${product.price}`);
});


// --- 2. .map() ---
// Transforms each item and returns a NEW ARRAY with identical length.
// (USED CONSTANTLY IN REACT TO RENDER LISTS OF JSX ELEMENTS!)
console.log("\n--- 2. .map() Method ---");
const productTitles = products.map(product => product.title);
console.log("List of Titles:", productTitles);

// Applying 10% discount to all prices:
const discountedProducts = products.map(product => ({
    ...product,
    discountedPrice: product.price * 0.9
}));
console.log("Discounted Product #1:", discountedProducts[0]);


// --- 3. .filter() ---
// Returns a NEW ARRAY containing only items that satisfy the boolean condition
console.log("\n--- 3. .filter() Method ---");
const inStockProducts = products.filter(product => product.inStock);
console.log(`In-Stock Products Count: ${inStockProducts.length}`);

const electronicsUnder100 = products.filter(
    product => product.category === "Electronics" && product.price <= 80
);
console.log("Affordable Electronics:", electronicsUnder100.map(p => p.title));


// --- 4. .find() and .findIndex() ---
// .find() returns the FIRST item matching the condition; .findIndex() returns its index
console.log("\n--- 4. .find() and .findIndex() Methods ---");
const keyboard = products.find(p => p.id === 2);
console.log("Found Product with ID 2:", keyboard.title);

const mugIndex = products.findIndex(p => p.title === "Coffee Mug");
console.log("Coffee Mug is at index:", mugIndex);


// --- 5. .reduce() ---
// Accumulates array items into a single final value (e.g. sum, object, average)
console.log("\n--- 5. .reduce() Method ---");
// Calculate total inventory value of all in-stock products
const totalCartPrice = products
    .filter(p => p.inStock)
    .reduce((accumulator, currentProduct) => {
        return accumulator + currentProduct.price;
    }, 0); // 0 is initial accumulator value

console.log("Total In-Stock Cart Price: $" + totalCartPrice);


// --- 6. .some() and .every() ---
// .some() returns true if AT LEAST ONE item satisfies condition
// .every() returns true ONLY IF ALL items satisfy condition
console.log("\n--- 6. .some() and .every() Methods ---");
const hasAnyExpensiveItem = products.some(p => p.price > 100);
console.log("Any item over $100? :", hasAnyExpensiveItem); // true

const areAllItemsInStock = products.every(p => p.inStock);
console.log("Are ALL items in stock? :", areAllItemsInStock); // false

/*
====================================================
Class 9 Summary: Array Higher-Order Methods
====================================================

1. Higher-Order Method Comparison:
   - .map()   : Transforms each item -> Returns new array of SAME length.
   - .filter(): Selects subset of items -> Returns new array of SMALLER or equal length.
   - .find()  : Returns the FIRST matching element (or undefined).
   - .reduce(): Collapses entire array into ONE single value (sum, object, count).
   - .forEach(): Just loops for side effects -> Returns undefined.

2. React Connection:
   In React, lists are rendered exclusively with .map():
   {products.map(product => (
       <ProductCard key={product.id} data={product} />
   ))}
====================================================
*/
