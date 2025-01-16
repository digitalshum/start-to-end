// //Q1

// // document.write("<br><h2>5 Times Wrire</h2><br>")

// // for (let i = 0; i < 5; i++) {
// //     document.write("Hello World<br>");
// // }

// // //Q2 

// // document.write("<br><h2>Counting 1 to 10</h2><br>")


// // for (let i = 1; i <= 10; i++) {
// //     document.write(i);
// // }

// // //Q3

// // document.write("<br><h2>Table</h2><br>")

// // let tableNumber = prompt("Enter a num to print multiplication table");
// // let tableLenght = prompt("Enter lenght of multiplication table");

// // for (let i = 1; i <= tableLenght; i++) {
// //     let result = tableNumber * i;
// //     document.write(`${tableNumber} X ${i} = ${result}<br>`);
// // }

// //Q4

// document.write("<br><h2>Mobiles Names</h2><br>")

// let A = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"];

// for (let i = 0; i < A.length; i++) {
//     document.write(A[i] + "<br>");
// }

// //Q5

// document.write("<br><h2>Fruits</h2><br>")


// let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// for (let i = 0; i < fruits.length; i++) {
//   document.write(`Index: ${i}, ${fruits[i]}<br>`);
// }

//Q19

document.write("<br><h2>Starts</h2><br>")

let initialStars = prompt("Enter the initial number of stars: ");

for (let i = initialStars; i >= 1; i--) {
  let stars = "";
  for (let j = 1; j <= i; j++) {
    stars += "*";
  }
  document.write(stars + "<br>");}

  //Q20
//a
  let lines = prompt("Enter the number of lines: ");

for (let i = 1; i <= lines; i++) {
  let pattern = "";
  for (let j = 1; j <= 5; j++) {
    pattern += "* ";
  }
  document.write(pattern + "<br>");
}

//b

let linesStars = prompt("Enter the number of lines: ");

for (let i = 1; i <= lines; i++) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern += "* ";
  }
  document.write(pattern + "<br>");
}

