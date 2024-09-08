// function
function randomWholeNum() {
  return Math.floor(Math.random() * 10);;
}

console.log(typeof addTwo); // should log: 'function'
console.log(addTwo(10)); // should log: 12

// write function that concasts an "s" to the end of a string
// ADD CODE HERE

function addS(str) {
  return str + "s"
}

// Uncomment these to check your work!
console.log(typeof addS); // should log: 'function'
console.log(addS('cat')); // should log: 'cats'

// Create function that concats "Hi," to a string argument and returns it.
function sayHello(str) {
  return "Hi, " + str
}

// Uncomment these to check your work!
console.log(sayHello('Mary')); // should log: 'Hi, Mary'
console.log(sayHello('Haley')); // should log: 'Hi, Haley'

// write function that concats two strings

function wereAwesome(you, yourBuddy) {
	return yourBuddy + " and " + you + " are awesome!"
}


// Uncomment the lines below to test your function:
console.log(wereAwesome("Dave", "Will")); // => "Will and Dave are awesome!"
console.log(wereAwesome("Victoria", "Jenny")); // => "Jenny and Victoria are awesome!"
console.log(wereAwesome("Chris", "Jac")); // => "Jac and Chris are awesome!"
console.log(wereAwesome("Phillip", "Skyler")); // => "Skyler and Phillip are awesome!"
