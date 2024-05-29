function addNumbers(num1, num2) {
    console.log(sum); // Output: undefined due to hoisting
    var sum = num1 + num2;
    return sum;
}

console.log(addNumbers(5, 10)); // Output: 15
