//Object Destructuring 
//Question 1
//What does the following code return/print?

let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets);
//8
console.log(yearNeptuneDiscovered);
//1846

//==========================================//
//Question 2
//what does the following code return/print?
let planetFacts = {
    numPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
  };
  
  let {numPlanets, ...discoveryYears} = planetFacts;

  console.log(discoveryYears); 
  //{yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

  //===============================================//

  //Question 3
  //What does the following code return/print?

  function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
  }
  
  getUserData({firstName: "Alejandro", favoriteColor: "purple"})
  // Your name is Alejandro and you like purple
  
  getUserData({firstName: "Melissa"})
  // Your name is Melissa and you like green
  
  getUserData({})
  // Your name is undefined and you like green

  //===========================================================//

  //Array Destructuring 
  //Question 4
  //What does the following code return/print?

  let [first, second, third] = ['Maya', 'Marisa', 'Chi'];

  console.log(first); 
  //Maya

  console.log(second);
  //Marisa

  console.log(third);
  //Chi


  //=============================================================//

  //Question 5
  //What does the following code return/print?

  let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
  ]

  console.log(raindrops);
  //"Raindrops on roses"

  console.log(whiskers);
  //"whiskers on kittens"

  console.log(aFewOfMyFavoriteThings);
  /*["Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"]
  */

    //=============================================================//


//Question 6:
//What does the following code return/print?

let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers)
//[10,30,20]

 //=============================================================//

 //Refactoring
 //Refactor ES5 code into ES2015.
 //Question 7:
 /* 
 var obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
  var a = obj.numbers.a;
  var b = obj.numbers.b;
  */

// Write an ES2015 Version 
const obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
  const {a,b} = obj.numbers

  //=========================================================================//
  //Question 8:
  //ES5 Array Swap
var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;

//Write an ES2015 Version
[arr[0], arr[1]] = [arr[1], arr[0]]

//=========================================================================//

//Question 9:
/*
Write a function called raceResults which accepts a single array argument. It should return an object with the keys first, second, third, and rest.

-first: the first element in the array

-second: the second element in the array

-third: the third element in the array

-rest: all other elements in the array

Write a one line function to make this work using,
- An arrow function
- Destructuring
-‘Enhanced’ object assignment (same key/value shortcut)
*/

//raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])
/*
  {
    first: "Tom",
    second: "Margaret",
    third: "Allison",
    rest: ["David", "Pierre"]
  }
*/

raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])
const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})

