let x

const arr=[23,40,29,10,5]

// Adds an element to the last
arr.push(100) // [ 23, 40, 29, 10, 5, 100 ]

// removes element in the last
arr.pop() // [ 23, 40, 29, 10, 5 ]

// Adds element to the first
arr.unshift(99) // [ 99, 23, 40, 29, 10, 5 ]

// removes element in the first
arr.shift() // [ 23, 40, 29, 10, 5 ]

// reverse the array
//arr.reverse() // [ 5, 10, 29, 40, 23 ]

// checks the given element is present in the array
x=arr.includes(10) // true

// returns the index of the given array element 
x=arr.indexOf(29) // 2 (if the given element is not in the array it returns -1)

// return all the element from index 1
x=arr.slice(1) // [ 40, 29, 10, 5 ]

// return all the element from index 1 to 3 (leaving the index 4 element)
x=arr.slice(1,4) // [ 40, 29, 10 ] (stops before index 4)

// Splice()
// it removes the specified index element from the original array 
//x=arr.splice(1,4) // x=[ 40, 29, 10, 5 ], arr=[23] (splice method removed the specified index element from the original array)

/*Important Points
It modifies the original array (not a copy ⚠️)
It returns the removed elements*/

//x=arr.splice(2,1) // x=[29], arr=[ 23, 40, 10, 5 ] (this removes the index 2 element from original array(not a copy) where 1 specifies how many elements need to be removed)

console.log(x)