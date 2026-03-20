let x

x=Math.sqrt(9) // 3 (It gives square root of a number)

x=Math.abs(-5) // 5 (It gives positive number even if we put negative number)

x=Math.round(4.5) // 5 (It rounds off the number)

x=Math.round(4.2) // 4

x=Math.ceil(4.2) // 5

x=Math.floor(4.9) // 4

x=Math.pow(2,3) // 8 (It gives power of the number)

x=Math.min(4,2,5) // 2 (Returns smallest number)

x=Math.max(4,10,2) // 10 (Returns largest number)

x=Math.random() // (Returns random number)

x=Math.random()*10 // (Gives random number between 0 to 9 and you want to 10 just add Math.random()*10+1 )

x=Math.floor(Math.random()*10) // (gives decimal value)

console.log(x)

// Challenge

let z=Math.floor(Math.random()*100+1) //generates random number between 0 to 100
let y=Math.floor(Math.random()*50+1)  //generates random number between 0 to 50

let sum=z+y
let diff=z-y
let mul=z*y
let div=z/y
let rem=z%y

console.log("Challenge Outputs:")
console.log(sum)
console.log(diff)
console.log(mul)
console.log(div)
console.log(rem)
