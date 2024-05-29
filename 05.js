{
    // Trying to log the variable before assignment
    try {
        console.log(b);  // This will throw a ReferenceError
    } catch (e) {
        console.log(e.message);  // Output: Cannot access 'b' before initialization
    }

    // Variable declaration
    let b;

    // Assigning a value
    b = 10;

    // Logging the variable after assignment
    console.log(b);  // Output: 10
}
