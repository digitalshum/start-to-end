// //Q 1
let name = prompt("Please enter your name:");

alert(`Hello, ${name}! Welcome to our JS World!`);

// //Q 2
let num = prompt("Please enter a number:");

if (num === null || num === "") {
  num = 5;
}

num = parseInt(num);

document.write(`<h1>Multiplication Table of ${num}</h1>`);

for (let i = 1; i <= 10; i++) {
  document.write(`${num} x ${i} = ${num * i}<br><br>`);
}

// //Q 3
let city = prompt("Please enter your city name:");

if (city.toLowerCase() === "karachi") {
  document.write("Welcome to city of lights!<br><br>");
} else {
  document.write(`Welcome to ${city}!<br><br>`);
}

// //Q 4
let gender = prompt("Please enter your gender (male/female):");

if (gender.toLowerCase() === "male") {
  document.write("Good Morning Sir.");
} else if (gender.toLowerCase() === "female") {
  document.write("Good Morning Ma'am.<br>");
} else {
  document.write("Invalid input. Please enter male or female.<br>");
}

//Q 5
let color = prompt("Please enter the color of road traffic signal (red, yellow, green):");

switch (color.toLowerCase()) {
  case "red":
    document.write("Must Stop!<br>");
    break;
  case "yellow":
    document.write("Ready to Move!<br>");
    break;
  case "green":
    document.write("Go!<br>");
    break;
  default:
    document.write("Invalid input. Please enter red, yellow or green.<br>");
}

//Q 6
let maxAge = parseInt(prompt("Please enter the maximum age:"));
let currentAge = parseInt(prompt("Please enter your current age:"));

if (currentAge <= maxAge) {
  document.write("You are welcome!<br>");
} else {
  document.write("Sorry, you are not eligible.<br>");
}

//Q 7
let remainingFuel = parseFloat(prompt("Please enter the remaining fuel in your car (in litres):"));

if (remainingFuel < 2) {
  document.write("Please refill the fuel in your car.<br>");
} else {
  document.write("You have sufficient fuel.<br>");
}

//Q 8
//a
var a = 4;
if (++a === 5){
 alert("given condition for variable a is true");
}
// //b
var b = 82; 
if (b++ === 83){
 alert("given condition for variable b is true"); //bad mn chalaungi.
}
// //c
var c = 12;
if (c++ === 13){
 alert("condition 1 is true");
}
if (c === 13){
 alert("condition 2 is true");
}
if (++c < 14){
 alert("condition 3 is true");
}
if(c === 14){
 alert("condition 4 is true");
}
// //d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
 alert("The cost equals");
}

//e
if (true){
    alert("True");
   }
   if (false){
    alert("False");
   }
   //f
   if("car" < "cat"){
    alert("car is smaller than cat");
   }

//Q 9
let subject1 = parseInt(prompt("Enter marks obtained in Subject 1:"));
let subject2 = parseInt(prompt("Enter marks obtained in Subject 2:"));
let subject3 = parseInt(prompt("Enter marks obtained in Subject 3:"));
let totalMarks = parseInt(prompt("Enter total marks:"));

let marksObtained = subject1 + subject2 + subject3;
let percentage = (marksObtained / totalMarks) * 100;

let grade, remarks;

if (percentage >= 90) {
    grade = 'A';
    remarks = 'Excellent!';
} else if (percentage >= 80) {
    grade = 'B';
    remarks = 'Good!';
} else if (percentage >= 70) {
    grade = 'C';
    remarks = 'Fair!';
} else if (percentage >= 60) {
    grade = 'D';
    remarks = 'Pass!';
} else {
    grade = 'F';
    remarks = 'Fail!';
}

document.write(`
  <h1>Result</h1>
  <p>Total Marks: ${totalMarks}</p>
  <p>Marks Obtained: ${marksObtained}</p>
  <p>Percentage: ${percentage.toFixed(2)}%</p>
  <p>Grade: ${grade}</p>
  <p>Remarks: ${remarks}</p><br>
`);

//Q 10
let item1 = prompt("Enter name of item 1:");
let item2 = prompt("Enter name of item 2:");

let price1 = parseFloat(prompt("Enter price of item 1:"));
let price2 = parseFloat(prompt("Enter price of item 2:"));

let quantity1 = parseInt(prompt("Enter ordered quantity of item 1:"));
let quantity2 = parseInt(prompt("Enter ordered quantity of item 2:"));

let shippingCharges = parseFloat(prompt("Enter shipping charges:"));

let subtotal = (price1 * quantity1) + (price2 * quantity2);
let totalCosts = subtotal + shippingCharges;

let discount = 0;
let finalCost = totalCosts;

if (totalCosts > 2000) {
  discount = totalCosts * 0.1;
  finalCost = totalCosts - discount;
}

document.write(`
  <h1>Shoping Cart</h1>
  <table border="1">
    <tr>
      <th>Item</th>
      <th>Price</th>
      <th>Quantity</th>
      <th>Total</th>
    </tr>
    <tr>
      <td>${item1}</td>
      <td>${price1}</td>
      <td>${quantity1}</td>
      <td>${price1 * quantity1}</td>
    </tr>
    <tr>
      <td>${item2}</td>
      <td>${price2}</td>
      <td>${quantity2}</td>
      <td>${price2 * quantity2}</td>
    </tr>
    <tr>
      <td colspan="3">Subtotal:</td>
      <td>${subtotal}</td>
    </tr>
    <tr>
      <td colspan="3">Shipping Charges:</td>
      <td>${shippingCharges}</td>
    </tr>
    <tr>
      <td colspan="3">Total Cost:</td>
      <td>${totalCost}</td>
    </tr>
    <tr>
      <td colspan="3">Discount:</td>
      <td>${discount}</td>
    </tr>
    <tr>
      <td colspan="3">Final Cost:</td>
      <td>${finalCost}</td>
    </tr>
  </table><br>
`);

//Q 11
// let secretNumber = Math.floor(Math.random() * 10) + 1;

// let userGuess = parseInt(prompt("Guess the secret number (1-10):"));

// if (userGuess === secretNumber) {
// document.write("Bingo! Correct answer");
// } else if (userGuess + 1 === secretNumber) {
// document.write("Close enough to the correct answer");
// } else {
// document.write("Sorry, try again! The secret number was " + secretNumber);
// }

//a
// let secretNumber = Math.floor(Math.random() * 10) + 1;

// let userGuess = parseInt(prompt("Guess the secret number (1-10):"));

// if (userGuess === secretNumber) {
//   document.write("Bingo! Correct");
// } else if (userGuess < secretNumber) {
//   document.write("Too low! The secret number was " + secretNumber);
// } else {
//   document.write("Too high! The secret number was " + secretNumber);
// }

//b
// let secretNumber = Math.floor(Math.random() * 10) + 1;

// let userGuess = parseInt(prompt("Guess the secret number (1-10):")); //bad mn dekhna hy

// if (userGuess === secretNumber) {
//   document.write("Bingo! Correct");
// } else if (userGuess + 1 === secretNumber || userGuess - 1 === secretNumber) {
//   document.write("Close enough to the correct answer");
// } else if (userGuess < secretNumber) {
//   document.write("Too low! The secret number was " + secretNumber);
// } else {
//   document.write("Too high! The secret number was " + secretNumber);
// }

//Q 12
let number = parseInt(prompt("Enter a number:"));

if (number % 3 === 0) {
document.write(number + " is divisible by 3.<br>");
} else {
document.write(number + " is not divisible by 3.<br><br>");
}

//Q 13
let teamAName = prompt("Enter Team A's name:");
let teamBName = prompt("Enter Team B's name:");

let teamAScore = parseInt(prompt("Enter " + teamAName + "'s total score:"));
let teamBScore = parseInt(prompt("Enter " + teamBName + "'s total score:"));

if (teamAScore > teamBScore) {
document.write(teamAName + " wins!<br>");
} else if (teamAScore < teamBScore) {
document.write(teamBName + " wins!<br>");
} else {
document.write("It's a tie!<br>");
}