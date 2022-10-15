// 8. Write a program that takes as input two numbers and a string denoting the operation (“+”, “-
//   ”, “*”, “/”) and prints out the appropriate result. Watch out for division by zero!

var a = 1;
var b = 0;
var operation = "/";

var result = "";

switch (operation) {
    case "+":
        result = a + " + " + b + " = " + (a + b);
        break;
    case "-":
        result = a + " - " + b + " = " + (a - b);
        break;
    case "*":
        result = a + " * " + b + " = " + a * b;
        break;
    case "/":
        result = a + " / " + b + " = " + a / b;
        break;
    default:
        result;
        break;
}

console.log(result);