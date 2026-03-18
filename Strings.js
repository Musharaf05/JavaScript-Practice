let x

const name='John'
const age=25

x='Hello, my name is '+name+' and i am '+age+' years old'

// Template literals(It prints the string exactly how you specified by enclosing using backtick(`) )
x=`Hello, my name is ${name} and i am ${age} years old`

// String Properties and Methods

// Gives length of the string
const s='Hello World'
x=s.length // 11

// Access individual characters of string
x=s[0] // H

x=s.__proto__; // This will list all the properties and methods that can be used in string(shows in browser console)

// Uppercase and Lowercase conversion
x=s.toUpperCase() // HELLO WORLD
x=s.toLowerCase() // hello world

// Accessing characters of the string
x=s.charAt(0) // H
x=s.indexOf("H") // 0 (this return index of the string)

// seperating string
x=s.substring(0,5) // Hello (starts with index 0 to 4)
x=s.substring(7) // orld (starts with index 7 and returns the remaining characters till the end)
x=s.slice(-11) // see this later

// trim
x="       Hello World          "
x=x.trim() // it removes whitespaces(gap) in the string only in the beginning and ending not in center

// replacing string
x=s.replace("World","John") // Hello John (replace world with john)

// searching characters
x=s.includes("World") // true

// splitting string into array
x=s.split(" ") // [ 'Hello', 'World' ] (split string based on " "(space) )
x=s.split("") /* [
  'H', 'e', 'l', 'l',
  'o', ' ', 'W', 'o',
  'r', 'l', 'd'
] */ // (split string by each character)

// Challenge : Capitalize first letter of word

const myString="developer"
let myNewString
myNewString=myString.charAt(0).toUpperCase()+myString.substring(1)
console.log(myNewString)

console.log(x)