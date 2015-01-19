var tester = prompt("enter a string");
var lowtest = tester.toLowerCase();
var hightest = tester.toUpperCase();



alert(tester + " has " + tester.length + " charecters \n The word in lowercase is: "
 + lowtest + "\n The word in upper case is: " + hightest + "\n I want " + tester + "\n Subword: " + tester.substring(1,4));