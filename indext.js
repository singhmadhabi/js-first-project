/*
//console.log("Welcome");
const person = "Madhabi";

person= prompt("Enter Your Name","UserName");
let password = prompt("Enter Your Password"," ");
const isLegal = confirm("Are you the member of Broadway Infosys?");

if(isLegal && person === "Madhabi") {
    alert("Welcome to the class");
}
if(!isLegal) {
    alert("SORRY! Access Denied");
}
console.log(person, password, isLegal);

//if else
if (a === 0) {
} else if (a === 1) {
} else if (a === 2) {
} else {
    alert("Invalid day");
}


//switch case
switch (a === 0) {
    case value:
    case value:
    default:
}

//Ternary operator

if (a === 0) {
    console.log("it's 0");
} else {
    console.log("it's not 0");
}

//Ternary operatory
const answer = a === 0 ? console.log("it's 0") : console.log("it's not 0");

*/

/*
let day = Number(prompt("Enter a number"));
console.log({day})

switch(day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day");
}
*/
/*
const Number1 = Number(prompt("Enter a first number"));
const Number2 = Number(prompt("Enter a second number"));
const operator = prompt("Enter a operator");
let result;

switch (operator) {
  case "+": {
    result = Number1 + Number2;
    break;
  }
  case "-": {
    result = Number1 - Number2;
    break;
  }
  case "*": {
    result = Number1 * Number2;
    break;
  }
  case "/": {
    if (Number2 !== 0) {
      result = Number1 / Number2;
    } else {
      console.log("Error: Division by zero.");
      return;
    }
    break;
  }
  case "%": {
    result = Number1 % Number2;
    break;
  }
  default:
    console.log("Invalid operator");
}
console.log(Number1, Number2, result);
*/
/*
const Number1 = Number(prompt("Enter a first number"));
const Number2 = Number(prompt("Enter a second number"));
const operator = prompt("Enter an operator");
let result;

switch (operator) {
  case "+":
    result = Number1 + Number2;
    break;
  case "-":
    result = Number1 - Number2;
    break;
  case "*":
    result = Number1 * Number2;
    break;
  case "/":
    if (Number2 !== 0) {
      result = Number1 / Number2;
    } else {
      console.log("Error: Division by zero.");
      return;
    }
    break;
  case "%":
    result = Number1 % Number2;
    break;
  default:
    console.log("Invalid operator");
}

console.log(`${Number1} ${operator} ${Number2} = ${result}`);
*/

// Loops
// For Loop
/*
let i;
for (i = 0; i < 10; i++) {
  console.log("the value of i is", i);
}
*/

// while loop
/*
let i = 0;

while (i < 10) {
  if (i <= 10) {
    console.log(i);
  }
  i++;
}
*/

//D0...while
/*
let i = 0;

do {
  if (i <= 10) {
    console.log(i);
  }
  i++; //(i = i + 2) or (i += 2)
} while (i < 10);
*/

//switch case
/*
for (let i = 0; i < 10; i++) {
  switch (true) {
    case i <= 10:
      console.log(i);
      break;
    default:
      break;
  }
}
*/

/*
//Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.
function isMultipleOf3Or7(num) {
  if (num <= 0) {
    return false;
  }

  return num % 3 === 0 || num % 7 === 0;
}

// Test the function
const number = 21;

if (isMultipleOf3Or7(number)) {
  console.log(`${number} is a multiple of 3 or 7.`);
} else {
  console.log(`${number} is not a multiple of 3 or 7.`);
}
*/
/*
//Write a JavaScript program to get the current date.
function getCurrentDate() {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

console.log(getCurrentDate());
*/
/*
const currentDate = new Date();
console.log(currentDate);
*/
/*
//Write a JavaScript program to count the number of vowels in a given string.
function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("Madhabi"));
console.log(countVowels("PranavKushwaha"));
console.log(countVowels("RaktimShrestha"));
*/

/*write a function that checks the username and password and send the following messages: 
if no username, username required, if no password, password required, if username !== username not found,
if username and passwoerd matches, access granted
*/
/*
//array
const vehicles = ("car", "bus", "cycle", "truck", "bike");
console.log(vehicles.length);
vehicles.push("car");
console.log(vehicles);

*/

//destructure
//spread
const [first, second, third, ...rest] = [1, 2, 3, 4];
console.log(rest);

const { a, b, ...other } = { a: 1, b: 2, c: 3 };
console.log(other);
