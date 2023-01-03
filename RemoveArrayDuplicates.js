// REMOVE DUPLICATES IN ARRAY

// 1. Using Set()
array = [1,2,3,4,2,3,5,1]
let uniqueArray = [...new Set(array)]
console.log(uniqueArray)

// 2. Using indexOf() && filter()
var uniqueArray2 = array.filter((element, index) => {
  return array.indexOf(element) === index;
})
console.log(uniqueArray2)

// 3. Using Includes() and forEach()
let uniqueArray3 = []
array.forEach((element) => {
  if (!uniqueArray3.includes(element)) {
    return uniqueArray3.push(element)
  }
})
console.log(uniqueArray3)
