// 2. Write a program that shows text representation of a day in a week for a number input from
// 1 to 7. All other cases output a message explaining that input must be a number between 1
// and 7.
// For input 1, output should be “Monday”.
// For input 10, output should be “Input must be a number between 1 and 7”.

var dayNumber = 8;
var day = "";

switch (dayNumber) {
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    case 7:
        day = "Sunday";
        break;
    default:
        day = "Input must be a number between 1 to 7!";
}

console.log(day);