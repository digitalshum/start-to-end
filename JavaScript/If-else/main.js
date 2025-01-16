//Q1

let number = prompt("Enter a number:");
number = parseInt(number);

if (number % 3 === 0) {
  document.write(number + " is divisible by 3.");
} else {
  document.write("Number is not divisible by 3.");
}

//Q2

let numberr = prompt("Enter a number:");
number = parseInt(numberr);

if (number % 2 === 0) {
  document.write(numberr + " is an even number.");
} else {
  document.write(numberr + " is an odd number.");
}

//Q3

let age = prompt("Enter your age:");
age = parseInt(age);

if (age > 18) {
  document.write("Old enough");
} else {
  document.write("Too young");
}

//Q4

let myName = "John"; // apna naam yahan likhein
let userName = prompt("Enter your name:");

if (userName.toLowerCase() === myName.toLowerCase()) {
  document.write("Hello, " + userName + "! It's nice to meet someone with the same name as me.");
}

//Q5

let numbers = prompt("Enter a number:");
number = parseInt(numbers);

switch (numbers % 3) {
  case 0:
    document.write("Number is divisible by 3.");
    break;
  default:
    document.write("Number is not divisible by 3.");
}

///Q6

let char = prompt("Enter a character:");

let asciiCode = char.charCodeAt(0);

if (asciiCode >= 48 && asciiCode <= 57) {
  document.write("The character is a number.");
} else if (asciiCode >= 65 && asciiCode <= 90) {
  document.write("The character is an uppercase letter.");
} else if (asciiCode >= 97 && asciiCode <= 122) {
  document.write("The character is a lowercase letter.");
} else {
  document.write("The character is a special character.");
}
