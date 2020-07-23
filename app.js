/**------------------------>Chapter 01<-------------------------
//Q1
//alert("Welcome to Our Website");
//Q2
alert("Error! Please enter a valid password.");
//Q3
alert("Welcome to JS land,,,\nHappy Coding!");
//Q4
alert("Welcemoe to JS land");
alert("Happy Coding!");
//Q7
    C

var person = prompt("Please enter your name", "Harry Potter");

if (person == null || person == "") {
  txt = "User cancelled the prompt.";
} else {
  txt = "Hello " + person + "! How are you today?";
}
------------------------->>>>>>>>>Chapter 02<<<<<<<<<--------------------------
//Q1
var username;
//Q2
var myName = "Muhammad Hamza";
document.write(myName);
//Q3

alert(message);

var message = "Hello Wold!"
window.alert(message);
//Q4
var nam =prompt("Enter your name :");
var age =prompt("Enter your age :");
var certi =prompt("Enter your certificate :");

window.alert(nam);
window.alert("your age is :",age);
window.alert("certified ",certi);
//Q5
  alert("PIZZA\nPIZZ\nPIZ\nPI\nP");
//Q7
var book ="A smarter way to learn to JavaScript";
alert("I am trying to learn from the book "+book);
  //Q8
var a="Yah! I can write HTML content through JavaScript";
document.writeln(a);
//Q9
alert("▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬");
-------------------->>>>>>Chapter 03 <<<<<-------------------
//Q1
var age1 = 23;
alert("I am "+age1+" years old"); 
//Q4
var name1 = prompt("Enter your name :"); 
var product = prompt("Product name :");
var qty = prompt("Quantity :");

document.write(name1+" ordered "+qty+" "+product+" on XYZ Store");

---------------->>>> Chapter 05<<<<<<<<---------------
//Q1-2
var val1 = prompt("First value :");
var val2 = prompt("Second value :");
var sum = val1.valueOf() + val2.valueOf();
var sub = val1.valueOf() - val2.valueOf();
var div = val1.valueOf() / val2.valueOf();
var mul = val1.valueOf() * val2.valueOf();
document.write(" Sum of "+val1+" and "+val2+" is "+sum);
document.write(" Sub of "+val1+" and "+val2+" is "+sub);
document.write(" mul of "+val1+" and "+val2+" is "+mul);
document.write(" divi of "+val1+" and "+val2+" is "+div);
//Q4**/
var ticket = 600;
var qty1 = prompt("Quantity of tickets :");
var res = ticket.valueOf() * qty1.valueOf();
document.write("Total cost to buy "+qty1+" ticketst to a movie is "+res+"PKR");