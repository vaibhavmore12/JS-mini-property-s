console.log(multiplyNumbers(5, 10));  // This will throw a ReferenceError

// Function expression
const multiplyNumbers = function(num1, num2) {
    return num1 * num2;
};

// Correct usage: calling the function after its definition
console.log(multiplyNumbers(5, 10));