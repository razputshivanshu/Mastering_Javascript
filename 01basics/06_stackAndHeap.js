/**
 * =============================================================================
 * Understanding Memory Management in JavaScript: Stack vs. Heap
 * =============================================================================
 *
 * JavaScript engines manage memory using two main regions:
 *   1. The **Stack**: for storing primitive values
 *   2. The **Heap**: for storing objects, arrays, and functions (non-primitive values)
 *
 * ----------------------------------------------------------------------------- 
 * 1. Primitive Data Types
 *    • String, Number, Boolean, Null, Undefined, Symbol, BigInt
 *    • Stored directly on the **Stack**
 *    • **Copy by value**: assigning one primitive to another copies the value itself,
 *      so the two variables are completely independent.
 *
 *    Example:
 *    --------
 *    let myYoutubeName = "Shivanshu Chauhan";
 *    let anotherName   = myYoutubeName;      // copy the string value
 *
 *    anotherName = "Unnati Sharma";          // updates only `anotherName`
 *
 *    console.log(myYoutubeName);             // "Shivanshu Chauhan"
 *    console.log(anotherName);               // "Unnati Sharma"
 *
 * ----------------------------------------------------------------------------- 
 * 2. Non-Primitive Data Types
 *    • Object, Array, Function
 *    • Stored in the **Heap**
 *    • **Copy by reference**: assigning one object to another copies the reference
 *      (pointer) to the same underlying data in the heap. Mutating via one
 *      reference affects all references to that object.
 *
 *    Example:
 *    --------
 *    let user1 = {
 *      name:        "Shivanshu Chauhan",
 *      email:       "xyz@gmail.com",
 *      phoneNumber: 2233223,
 *    };
 *
 *    let user2 = user1;      // both `user1` and `user2` point to the same object
 *
//  *    // Mutating the object via `user2`...
 *    user2.name        = "Unnati Sharma";
 *    user2.email       = "abc@gmail.com";
 *    user2.phoneNumber = 322323223;
 *
 *    console.log(user1);
//  *    // {
//  *    //   name: "Unnati Sharma",
//  *    //   email: "abc@gmail.com",
//  *    //   phoneNumber: 322323223
//  *    // }
 *
 *    console.log(user2);
//  *    // {
//  *    //   name: "Unnati Sharma",
//  *    //   email: "abc@gmail.com",
//  *    //   phoneNumber: 322323223
//  *    // }
 *
 * ----------------------------------------------------------------------------- 
 * Key Takeaways
 * -----------------------------------------------------------------------------
 *  • **Primitives** live on the stack and are assigned/copied by **value**.
 *  • **Objects/Arrays/Functions** live on the heap and are assigned/copied by **reference**.
 *  • Understanding the difference helps avoid unintended side-effects when
 *    passing values around, especially in function calls or state updates.
 *
 * =============================================================================
 */
