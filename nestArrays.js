// It includes nesting, concat and spread in array
let x

const fruits=['apple','orange','grapes']
const berries=['strawberry','blueberry','rasberry']

// Adds array into the array
/* fruits.push(berries) [
  'apple',
  'orange',
  'grapes',
  [ 'strawberry', 'blueberry', 'rasberry' ]
]*/

// Accessing nested array
x=fruits[3] // [ 'strawberry', 'blueberry', 'rasberry' ]
//x=fruits[3][1] // blueberry

const allFruits=[fruits,berries]

x=allFruits /* [
  [
    'apple',
    'orange',
    'grapes',
    [ 'strawberry', 'blueberry', 'rasberry' ]
  ],
  [ 'strawberry', 'blueberry', 'rasberry' ]
]*/


x=allFruits[1][0] // strawberry

// concat(it combines arrays into single array)
x=fruits.concat(berries) // [ 'apple', 'orange', 'grapes', 'strawberry', 'blueberry', 'rasberry' ]

// Spread Operator(...)
x=[...fruits,...berries] // [ 'apple', 'orange', 'grapes', 'strawberry', 'blueberry', 'rasberry' ] (it is same like concat but spread operator is modern)

// Flatten arrays(convert nested arrays into single array)
const arr=[1,[2,3],4,5,[6,7],8]
x=arr.flat() /* [
  1, 2, 3, 4,
  5, 6, 7, 8
]*/

// Static methods on Array object

// check the given argument is array
x=Array.isArray(fruits) // true

console.log(x)