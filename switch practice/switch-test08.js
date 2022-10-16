// 8. Write a program that takes as input two numbers and a string denoting the operation (“+”, “-
//   ”, “*”, “/”) and prints out the appropriate result. Watch out for division by zero!

var a = 1;
var b = 1;
var operation = "/";

var result = "";

// switch (operation) {
//     case "+":
//         result = a + " + " + b + " = " + (a + b);
//         break;
//     case "-":
//         result = a + " - " + b + " = " + (a - b);
//         break;
//     case "*":
//         result = a + " * " + b + " = " + a * b;
//         break;
//     case "/":
//         result = a + " / " + b + " = " + a / b;
//         break;
//     default:
//         result;
//         break;
// }

// console.log(result);

if (b === 0 && operation == "/") {
    console.log("Can't divide with 0");
} else if (operation == "/") {
    console.log(a + " / " + b + " = " + a / b);
} else if (operation == "*") {
    console.log(a + " * " + b + " = " + a * b);
} else if (operation == "+") {
    console.log(a + " + " + b + " = " + a + b);
} else if (operation == "-") {
    console.log(a + " - " + b + " = " + a - b);
} else {
    console.log("Need numbers for arithmethic operations!");
}