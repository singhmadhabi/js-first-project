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
