// ARRAYS >> arrays are single variables used to store multiple values such as 
// holding a list or collections.

let arr = [1,2,3]
// Task & Methods of an Array

//  ADD  >> push  ||(add an item to the end of the array & return 
// the new length of the array)

// ADD >> unshift ||(insert an item to the start of the array & return
// the new length of the array)

// Examples
console.log("Add a number: 4 using push and unshift")
arr.push(4)
arr.unshift(4)
console.log(arr)

// REMOVE >> pop  || (remove the last item in the array and return it. If the array is empty
// it returns undefined and doesn't modify the array)
console.log("Remove the last item using pop")
arr.pop()
console.log(arr)

// REMOVE >> shift || (remove the 1st item in the array and return it. If the array is empty
//  it returns undefined and doesnt modify the array)
console.log("Remove the 1st item using shift")
arr.shift()
console.log(arr)

// REMOVE >> splice || (Removes elements from an array and, if necessary, inserts new 
// elements in their place, returning the deleted elements.)
// array.splice(startFrom,deleteCount)
console.log("Remove an item  and insert an item using splice")
arr.splice(0,2)
console.log(arr)

// ITERATE >> forEach,map,filter
let arrayElement = [12,3,12,4,2]
console.log("The Iterating Zone... \n")

// ITERATE >> forEach |(Performs the specified action for each element in an array.)
console.log("THE ~forEach Iteration")

arrayElement.forEach((arr1,index)=>{
    console.log(`Item: ${arr1*2}, with index: ${index} ;\n`)
})


// ITERATE >> map |(Calls a defined callback function on each element of an array, 
// and returns an array that contains the results.)

console.log("THE ~MAP Iteration")
arrayElement.map((arr1,index)=>{
    console.log(`Item: ${arr1*arr1}, with index: ${index} ;\n`)  
})

// ITERATE >>filter | (Returns the elements of an array that meet the condition 
// specified in a callback function.)

console.log("THE ~FILTER Iteration")
arrayElement.filter((arr1,index)=>{
    console.log(`Item :${arr1%2 ===0}, with index: ${index}; \n`)
})

// Search >> find, include, indexOf
console.log("Search Methods...")
// Search >> include | (Determines whether an array includes a certain element, 
// returning true or false as appropriate.)
console.log("Include")
console.log(arrayElement.includes(3))

// Search >> find
console.log("Find...")
// console.log(arrayElement.find(3,1))

// 💪 Exercise:
// Write a function that takes an array and returns a new array with only even numbers.

// Bonus: Sort an array of numbers in descending order.
let evenNumbers = (even) =>{
   return even.filter((num => num % 2 ===0))
}
let even = [2,4,5,6,3,6,8, 4]
console.log(evenNumbers(even))