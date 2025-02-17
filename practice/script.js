// give output in console
console.log("hello world")
console.log('hello world')

alert("hi this is alert")
var prompt =prompt("enter your name")
console.log(prompt)
var confirm = confirm("are you an adult")
console.log(confirm)

// var is older variable declaration method
// user can redeclar var
// var is muttable variable
var a = 10
var a =20
a = 30

// let an improved version of the var keyword. 
let h =11
// not allowed to declare again
// let h =22
h = 22


const c = 12
// not allowed to change value
// const c =13
c =13
console.log(a,b,c)


var array = [10,20,30,40]
console.log(array)
let leng = array.length
let popfun = array.pop()
let pushfun = array.push(70)

console.log(leng)
console.log(popfun)
console.log(array)

let text = "Hello"; text += " World";
let x = 10;
x **= 2;

console.log(text)
console.log(x)

// datatypes
// Numbers:
let length = 16;
let weight = 7.5;
console.log(length)
console.log(weight)

// Strings:
let color = "Yellow";
let lastName = "Johnson";
console.log(color)
console.log(lastName)

// Booleans
let i = true;
let u = false;
console.log(u)
console.log(i)

// Object:
const person = {firstName:"John", lastName:"Doe"};
console.log(person.firstName)
console.log(person["lastName"])
console.log(person)

//adding new property to object
console.log(person.age = 5)
console.log(person)

// delete property to object
console.log(delete person.age)
console.log(person)

let p = person.firstName;
let y = "20";
console.log(x + " is " + y + " years old.")

// Array object:
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars)

// Date object:
const date = new Date("2022-03-25");
console.log(date)

let j;       // Now x is undefined
j = 5;       // Now x is a Number
j = "John";
console.log(j)

function addition(a,b){
    return a +b;
}
console.log(addition)
console.log(addition(10,20))


function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }
  
  let value = toCelsius(70);
console.log(value)

//constructor in object
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }
  const myFather = new Person("John", "Doe", 50, "blue");
  console.log(myFather.firstName)

  // class
  class Person {
    constructor(first, last, age, eye) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.eyeColor = eye;
    }
}

const myMother = new Person("John", "Doe", 50, "blue");
console.log(myMother.age); // Outputs: 50

// let and var 
function testVarLet() {
  if (true) {
      var x = 10; // var is function-scoped
      let y = 20; // let is block-scoped
  }
  console.log(x); // ✅ Works: var is function-scoped
  console.log(y); // ❌ Error: let is block-scoped
}

testVarLet();




// let and var
