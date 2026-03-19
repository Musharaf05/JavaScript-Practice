let x

const num=5

x=num.toString() // converts number to string

x=num.toString().length // 1 (we can't directly use length property on number) it gives digits of number

x=num.toFixed(2) // 5.00 (it adds decimal points to the number)

console.log(x) 