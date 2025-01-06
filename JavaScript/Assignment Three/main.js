alert("Welcome to my JS World!");
//Q 1

prompt("type 13+9");

let a = 13;
let b = 9;
let c = a + b;
alert(c)

//Q2

prompt("type 13-9");
let d = 13;
let e = 9;
let f = d - e;
alert(f)

prompt("type 13*9");
let g = 13;
let h = 9;
let i = g * h;
alert(i)

prompt("type 13/9");
let j = 13;
let k = 9;
let l = j / k;
alert(l)

prompt("type 13%9");
let m = 13;
let n = 9;
let o = m % n;
alert(o)

//Q 3

let s = 3;
let sum = s + 1;
alert("3 + 1 = " + sum);

let p = sum + 7;
alert("4 + 7 = " + p);

let r = 11
let w = r - 1;
alert(w);

let aa = w % 3;
alert(aa);

//Q 4

let ticket = 600
let tickets = ticket * 5;
alert(tickets);

//Q 5

let num = prompt("Enter no 5 to print table");
if (num === null || num === "") {
  num = 5;
}

document.write(`${num} x 1 = ${num * 1} <br>
${num} x 2 = ${num * 2} <br>
${num} x 3 = ${num * 3} <br>
${num} x 4 = ${num * 4} <br>
${num} x 5 = ${num * 5} <br>
${num} x 6 = ${num * 6} <br>
${num} x 7 = ${num * 7} <br>
${num} x 8 = ${num * 8} <br>
${num} x 9 = ${num * 9} <br>
${num} x 10 = ${num * 10}<br><br>`);

//Q 6

//Celsius se Fahrenheit
let celsius = 30;
let fahrenheit = (celsius * 9/5) + 32;
console.log(`${celsius}°C is ${fahrenheit}°F`);

// Fahrenheit se Celsius
let fahrenheit2 = 86;
let celsius2 = (fahrenheit2 - 32) * 5/9;
console.log(`${fahrenheit2}°F is ${celsius2}°C`);

// //Q 7

// Price of items
let priceItem1 = 100;
let priceItem2 = 200;

// Ordered quantity of items
let quantityItem1 = 2;
let quantityItem2 = 1;

// Shipping charges
let shippingCharges = 50;

// Calculate subtotal
let subtotalItem1 = priceItem1 * quantityItem1;
let subtotalItem2 = priceItem2 * quantityItem2;
let totalSubtotal = subtotalItem1 + subtotalItem2;

// Calculate total
let total = totalSubtotal + shippingCharges;

// Display checkout details
console.log("Checkout Details:");
console.log(`Item 1: ${priceItem1} x ${quantityItem1} = ${subtotalItem1}`);
console.log(`Item 2: ${priceItem2} x ${quantityItem2} = ${subtotalItem2}`);
console.log(`Subtotal: ${totalSubtotal}`);
console.log(`Shipping Charges: ${shippingCharges}`);
console.log(`Total: ${total}`);

// //Q 8

// Take input from user
let totalMarks = prompt("Enter total marks:");
let obtainedMarks = prompt("Enter marks obtained:");

// Compute percentage
let percentage = (obtainedMarks / totalMarks) * 100;

// Show result in browser
document.write(`Total Marks: ${totalMarks}<br>`);
document.write(`Obtained Marks: ${obtainedMarks}<br>`);
document.write(`Percentage: ${percentage.toFixed(2)}%<br> <br>`);

//Q 9

let usDollars = 10;
let saudiRiyals = 25;

let pakistaniRupees = (usDollars * 104) + (saudiRiyals * 28);

document.write(`Total Pakistani Rupees: ${pakistaniRupees}<br><br>`);

//Q 10 

let num1 = 10;

let result = (((num1 + 5) * 10) / 2);

document.write(`Result: ${result}<br><br>`);

//Q 11

let currentYear = 2025;
let birthYear = 1990;

let age1 = currentYear - birthYear;
let age2 = age1 - 1;

document.write(`They are either ${age1} or ${age2} years old.<br><br>`);

//Q 12

let radius = 12;
let pi = 3.142;

let circumference = 2 * pi * radius;
let area = pi * radius * radius;

document.write(`Radious of a circle: ${radius}<br>`);
document.write(`The circumference is: ${circumference}<br>`);
document.write(`The area is: ${area}<br><br>`);

//Q 13

let num2 = prompt("Enter a number: 10");

let aaa = 10;
console.log(++aa);
console.log(aaa)

let ab = 11;
console.log(ab++);
console.log(ab);

let ac = 12;
console.log(--ac);
console.log(ac);

let ad = 11;
console.log(ad--);
console.log(ad);

//Q 14

// let aas = 2;
// let bas = 5;

// let result = (--aas - --bas + ++bas + bas--);
// console.log(result);

//Q 15

let favoriteSnack = "Chocolates";
let currentAge = 15;
let maxAge = 85;
let amountPerDay = 2;

let yearsRemaining = maxAge - currentAge;
let totalAmount = yearsRemaining * 365 * amountPerDay;

document.write(`You will need ${totalAmount} ${favoriteSnack} to last you until the ripe old age of ${maxAge}.`);