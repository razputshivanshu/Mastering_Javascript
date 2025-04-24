// ============================================================================
// JavaScript String Operations: A Comprehensive Guide
// ============================================================================

// 1. Declaring Strings
// ---------------------------------------------------------------------------
// • Single or double quotes:
let greeting1 = 'Hello';
let greeting2 = "World";

// • Template literals (backticks) for interpolation and multi-line:
let name = 'Hitesh';
let repoCount = 50;

// ---------------------------------------------------------------------------
// 2. Concatenation vs. Interpolation
// ---------------------------------------------------------------------------
// • Traditional concatenation with + (less recommended):
console.log(greeting1 + ' ' + greeting2);          // "Hello World"
console.log(name + repoCount + ' value');          // "Hitesh50 value"

// • Template literals (recommended):
console.log(`Hello, my name is ${name}. I have ${repoCount} repositories.`);

// ---------------------------------------------------------------------------
// 3. String Object Constructor
// ---------------------------------------------------------------------------
// • Creates a String object (rarely needed):
const gameName = new String('Chess');
console.log(gameName);                              // [String: 'Chess']

// ---------------------------------------------------------------------------
// 4. Accessing Characters
// ---------------------------------------------------------------------------
console.log(name[0]);                                // 'H'
console.log(name.charAt(2));                         // 't'

// ---------------------------------------------------------------------------
// 5. Common Properties & Methods
// ---------------------------------------------------------------------------
console.log(name.length);                            // 6
console.log(name.indexOf('t'));                      // 2

// substring(start, end) — excludes end, does NOT accept negative indices
console.log(name.substring(0, 2));                   // 'Hi'

// slice(start, end) — excludes end, accepts negative indices
console.log(name.slice(-4, 4));                      // 'te'

// trim() — removes whitespace from both ends
const padded = '   hitesh   ';
console.log(padded.trim());                          // 'hitesh'

// ---------------------------------------------------------------------------
// 6. Replacing Content
// ---------------------------------------------------------------------------
let url = 'https://hitesh.com/hitesh%20chaudhary';
// replace() replaces first match; use regex with /g for all occurrences
let cleanUrl = url.replace(/%20/g, '-');
console.log(cleanUrl);                               // 'https://hitesh.com/hitesh-chaudhary'

// ---------------------------------------------------------------------------
// 7. Checking Substrings
// ---------------------------------------------------------------------------
console.log(cleanUrl.includes('hitesh'));            // true
console.log(cleanUrl.includes('Shivanshu'));         // false

// ---------------------------------------------------------------------------
// 8. Splitting Strings
// ---------------------------------------------------------------------------
let sentence = 'My name is Shivanshu Chauhan';
let words = sentence.split(' ');
console.log(words);                                  // ['My','name','is','Shivanshu','Chauhan']

// ============================================================================
// End of Guide
// ============================================================================
