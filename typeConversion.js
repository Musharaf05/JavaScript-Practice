// Converting string to number
let amount='100'
let greet='hello'
amount=parseInt(amount)
greet=parseInt(greet)
console.log(amount, typeof amount)
console.log(greet, typeof greet)

// number to string
let score=95
score=score.toString()
console.log(score, typeof score)

// string to float
let perc='91.2'
perc=parseFloat(perc) 
//using parseInt() will only take 91
let perce=parseInt(perc) 
console.log(perc, typeof perc)
console.log(perce, typeof perce)

// number to boolean
let istrue=1 //If it is zero it gives false and any other numbers will be true
istrue=Boolean(istrue)
console.log(istrue, typeof istrue)