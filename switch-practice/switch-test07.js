// 7. Write a program that takes as input a city name and outputs the country where the city is.
// You may choose which cities and countries you want to output yourself, however there has
// to be at least 5 countries and 15 cities. Note that each country must have a different
// number of cities. Input different from the listed cities should output a message&quot;Please
// choose a different city&quot;.

var city = "Berlin";
var country = "";

switch (city) {
    case "Beograd":
    case "Novi Sad":
    case "Obrenovac":
    case "Zrenjanin":
        country = "Srbija";
        break;
    case "Vienna":
    case "Linz":
    case "Salzburg":
    case "Graz":
        country = "Austria";
        break;
    case "Berlin":
    case "Munchen":
    case "Dortmund":
    case "Frankfurt":
    case "Stuttgart":
        country = "Germany";
        break;
    default:
        country = "Please choose a different city";
}

console.log(country);