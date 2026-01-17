/* Data Types:
undefined, null, boolean, string, symbol, bigint, number, and object(Non-primitive)
*/

// String
const firstName='John';
console.log(firstName, typeof firstName)

// Number
let age=24
console.log(age, typeof age)

// Boolean
let isTrue=true
console.log(isTrue, typeof isTrue)

// Null
let aptNumber=null
console.log(aptNumber, typeof aptNumber)

// Undefined
let score;
console.log(score, typeof score)

// Symbol(mostly not used)
let id=Symbol('id')
console.log(id, typeof id)

// BigInt
let number=84228795793543272442524234n // BigInt ends with n 
console.log(number, typeof number)

// reference or non-primitive types
// Array
let num=[1,2,3,4]
console.log(num, typeof num)

// Object
let person= {
    name:'John',
    age:24
}
console.log(person, typeof person)

// Function
function hello(){
    console.log('Hello')
}
console.log(hello, typeof hello)