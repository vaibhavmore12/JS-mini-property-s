{
    // Trying to log the variables before declaration
    try {
        console.log(a);  // This will log: undefined (due to hoisting)
    } catch (e) {
        console.log(e.message);  // This won't run because var is hoisted
    }

    try {
        console.log(b);  // This will throw a ReferenceError
    } catch (e) {
        console.log(e.message);  // Output: Cannot access 'b' before initialization
    }

    try {
        console.log(c);  // This will throw a ReferenceError
    } catch (e) {
        console.log(e.message);  // Output: Cannot access 'c' before initialization
    }

    var a = 1;
    let b = 2;
    const c = 3;

    // Logging the variables after declaration
    console.log(a);  // Output: 1
    console.log(b);  // Output: 2
    console.log(c);  // Output: 3
}
