///// BIG FLIPPER///////
// Flip every chunk of n characters in a string, where n is any positive integer greater than 1.
// Note that this is intentionally very similar to the previous problem.
// Please focus on getting a working solution with the tools you know well.
// Practice the interactive/collaborative interview style that's described in the documentation.
function flipEveryNChars(input, num) {
let chunks = [];
    for (let i = 0; i < input.length; i += num){
       chunks.push(input.substring(i, i + num))
    }
let reverseStr = [];
    for (let j = 0; j < chunks.length; j++) {
      reverseStr.push(chunks[j].toString().split("").reverse().join(""))
    }
    
reverseStr = reverseStr.toString().replace(/,/g, '')
return reverseStr
}
// Example:
var input = 'a short example';
var output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma

// Breaking this example down piece by piece:
// 'a sho' -> 'ohs a'
// 'rt ex' -> 'xe tr'
// 'ample' -> 'elpma'
