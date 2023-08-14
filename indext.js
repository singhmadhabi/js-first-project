//console.log("Welcome");
var person = "Madhabi";

person= prompt("Enter Your Name","UserName");
let password = prompt("Enter Your Password"," ");
const isLegal = confirm("Are you the member of Broadway Infosys?");

if(isLegal && person === "Madhabi") {
    alert("Welcome to the class");
}
if(isLegal) {
    alert("SORRY! Access Denied");
}
console.log(person, password, isLegal);