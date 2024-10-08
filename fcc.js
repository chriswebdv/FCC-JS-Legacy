//first commit

function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);

// Combine the if statements into a single if/else statement.

function testElse(val) {
  let result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

testElse(4);

// Convert the logic to use else if statements.

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

  else if (val < 5) {
    return "Smaller than 5";
  }
  else {
    return "Between 5 and 10";
  }

  
}

testElseIf(7);

// Change the order of logic in the function so that it will return the correct 
// statements in all cases.

function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);

// Write chained if/else if statements 

function testSize(num) {
  // Only change code below this line
  if (num < 5) {
    return "Tiny"
  } else if (num < 10) {
    return "Small"
  } else if (num < 15) {
    return "Medium"
  } else if (num < 20) {
    return "Large"
  } else {
    return "Huge"
  }


  return "Change Me";
  // Only change code above this line
}

testSize(7);

// Golf code

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes === 1) {
    return "Hole-in-one!"
  } else if (strokes <= par - 2) {
    return "Eagle"
  } else if (strokes === par - 1) {
    return "Birdie"
  } else if (strokes === par) {
    return "Par"
  } else if (strokes === par + 1) {
    return "Bogey"
  } else if (strokes === par + 2) {
    return "Double Bogey"
  } else {
    return "Go Home!"
  }


  return "Change Me";
  // Only change code above this line
}

golfScore(5, 4);

// Learn switch statements

function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
switch (val) {
  case 1:
    answer = "alpha";
    break;
  case 2:
    answer = "beta";
    break;
  case 3:
    answer = "gamma";
    break;
  case 4:
    answer = "delta";
    break;
}


  // Only change code above this line
  return answer;
}

caseInSwitch(1);

// use default with switch statements

function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case "a":
    answer = "apple";
    break;
    case "b":
    answer = "bird";
    break;
    case "c":
    answer = "cat";
    break;
    default:
    answer = "stuff"
    break;
  }
    


  // Only change code above this line
  return answer;
}

switchOfStuff(1);

// Multiple Identical Options in Switch Statements

function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;

  }

  // Only change code above this line
  return answer;
}

sequentialSizes(1);

// Array Map Function
const arr = [1, 2, 3, 4, 5];
const mappedArr = arr.map((num) => num + 1);
console.log(mappedArr); // Outputs [2, 3, 4, 5, 6]

// change if/ifelse to switch

function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
    default:
      answer = ""; 
  }
  // Only change code above this line
  return answer;
}

chainToSwitch(7);

// change this function

function isLess(a, b) {
  // Only change code below this line
  if (a < b) {
    return true;
  } else {
    return false;
  }
  // Only change code above this line
}

isLess(10, 15);

function isLess(a, b) {
  // Only change code below this line
  return a <= b;
  // Only change code above this line
}

isLess(10, 15);


// return undefined

// Setup
function abTest(a, b) {
  // Only change code below this line
  if (a < 0 || b < 0) {
    return undefined
  }


  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);

// Count cards

let count = 0;

function cc(card) {
  // Only change code below this line
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  if (count > 0) {
    return count + " Bet"
  } else {
    return count + " Hold"
  }
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

// Make an object Dog

const myDog = {
  // Only change code below this line
  name: "Misha",
  legs: 4,
  tails: 1,
  friends: ["me", "other cats"]

  // Only change code above this line
};

// Practice dot notation

// Setup
const testObj = {
  hat: "ballcap",
  shirt: "jersey",
  shoes: "cleats"
};

// Only change code below this line
const hatValue = testObj.hat;      // Change this line
const shirtValue = testObj.shirt;    // Change this line

// Practice using bracket notation

// Setup
const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line
const entreeValue = testObj["an entree"];   // Change this line
const drinkValue = testObj["the drink"];    // Change this line

// Using variables and bracket notation

// Setup
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line
const playerNumber = 16;  // Change this line
const player = testObj[playerNumber];   // Change this line

// Update name inside object

// Setup
const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line

myDog.name = "Happy Coder";

// Add properties
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog.bark = "woof";

// Delete property
// Setup
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// Only change code below this line

delete myDog.tails;

// Change switch statement to object

// Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
  const lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  }
result = lookup[val];
  // Only change code above this line
  return result;
}

phoneticLookup("charlie");

// Use the hasOwnProperty method
function checkObj(obj, checkProp) {
  // Only change code below this line
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
  return "Change Me!";
  // Only change code above this line
}

// Add new object to and array
const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
];

let newAlbum = {
  "artist": "Run DMC",
    "title": "My Adidas",
    "release_year": 1986,
    "formats": [
      "CD",
      "MP3",
      "LP"
    ],
}

myMusic.push(newAlbum);

// Accessing Nested Objects

const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = myStorage.car.inside["glove box"];

// second example
const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = myPlants[1].list[1];

//  Use while loop to log out numbers in descending order
// Setup
const myArray = [];

// Only change code below this line
let i = 5;

while (i >= 0) {
  myArray.push(i);
  i--;
}

// Use a for loop to push i into an array

// Setup
const myArray = [];

// Only change code below this line

for (let i = 1; i < 6; i++) {
  myArray.push(i);
}

// Use a for loop to push all the odd number into an array

// Setup
const myArray = [];

// Only change code below this line

for (let i = 1; i < 10; i += 2) {
  myArray.push(i);
}

// Push the odd numbers from 9 through 1 to myArray using a for loop.
// Setup
const myArray = [];

// Only change code below this line

for (let i = 9; i > 0; i -= 2) {
  myArray.push(i)
}

// Loop over array and add its total to the total variable
// Setup
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line

let total = 0;

for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

// embedded arrays
function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }

  // Only change code above this line
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

// Do while loop

// Setup
const myArray = [];
let i = 10;

// Only change code below this line
do {
  myArray.push(i);
  i++;
} while (i < 5);

// recursive functions

function sum(arr, n) {
  // Only change code below this line
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n + 1) + arr[n]
  }
  // Only change code above this line
}

// 
// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      } else {
      return "No such property"
      }
    } 
    }
  return "No such contact";

  // Only change code above this line
}

lookUpProfile("Akira", "likes");

// Random numbers

function randomFraction() {

  // Only change code below this line

  return Math.random();

  // Only change code above this line
}

//
function randomWholeNum() {
  return Math.floor(Math.random() * 10);;
}
