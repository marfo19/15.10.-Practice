// 5. Write a program that for a 1-12 number input (representing a month in a year) shows what
// season it is. All inputs different from 1-12 output a message explaining that input must be a
// number between 1 and 12.

var monthNum = 1;
var season = "";

switch (monthNum) {
    case 1:
        season = "Winter";
        break;
    case 2:
        season = "Winter";
        break;
    case 3:
        season = "Spring";
        break;
    case 4:
        season = "Spring";
        break;
    case 5:
        season = "Spring";
        break;
    case 6:
        season = "Summer";
        break;
    case 7:
        season = "Summer";
        break;
    case 8:
        season = "Summer";
        break;
    case 9:
        season = "Fall";
        break;
    case 10:
        season = "Fall";
        break;
    case 11:
        season = "Fall";
        break;
    case 12:
        season = "Winter";
        break;
    default:
        season = "Input must be a number between 1 to 12!";
}

console.log(season);