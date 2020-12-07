// Binary search is a technique for very rapidly searching a sorted collection by cutting the search space in half at every pass.

// Given a sorted array, such as this:
// [1, 3, 16, 22, 31, 33, 34]

// You can search for the value 31, as follows:

// 1) Pick the midpoint: 22.
// 2) The value is higher than 22, so now consider only the right half of the previous array:
// [...31, 33, 34]
// 3) Pick the midpoint: 33
// 4) The value is lower than 33, so now consider only the left half of the previous array:
// [...31...]
// 5) Pick the midpoint: 31
// 6) You've hit the value.
// 7) Return the index of the value.

// Notes:
// * If you don't find the value, you can return null.
// * If at any point you calculate the index of the midpoint and get a fractional number, just round it down ("floor" it).

function binarySearch(arrayOfNums, num) {
    //i: array o: index of the value
    //look inside of the array
    //find the midpoint by taking the length of the array - 1 and dividing that in half
    let midpointIndex = (arrayOfNums.length - 1) / 2
    let midpoint1 = arrayOfNums[midpointIndex]
    let finalIndex;
    // console.log(midpoint1) 
    //check to see if the value at the midpoint is greater than num
    if (midpoint1 >= num) {
        arrayOfNums.slice(0, midpointIndex + 1)
    } else {
        arrayOfNums.slice(midpointIndex + 1)
    }
    //if it is, then slice the array and discard the second half
    //if it isn't, then slice the array and discard the first half
    //then do the same thing again
    for (let i = 0; i < arrayOfNums.length; i++){
        if (arrayOfNums[i] === num) {
           finalIndex = i
        }
    }
  return finalIndex
    //until you compare each number to the num and once there's a match
    //return the index of the number 

}

console.log(binarySearch([1, 3, 16, 22, 31, 33, 34], 31))
