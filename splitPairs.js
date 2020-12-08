////SPLIT PAIRS////
// Complete the function splitPairs such that it splits the input string into pairs of characters. If the input string has a length that is odd, then it should replace the missing second character of the final pair with an underscore _.
//  Note, an empty string should make your function produce an empty array.

function splitPairs(input) {

    //for even lengths:
    //split into pairs of characters
    if (input.length % 2 === 0) {
        input = input.split('')
    }

    let newStrEven = [];
    if (input.length % 2 === 0) {
        for (let i = 0; i < input.length; i++) {
            newStrEven.push(input[i] + input[i + 1]) //ok
            input = input.slice(1) //[a, y]
        }
        return newStrEven
    }
// newStrEven = newStrEven.toString()
let newStrOdd = [];
    if (input.length % 2 !== 0) {
       for (let j = 0; j < input.length; j++) {
            if (input.length >= 2) {
                if (input[j] === input[input.length - 1] && input[j] !== input[0]) {
                    newStrOdd.push(input[j] + "_")
                } else {
                    newStrOdd.push(input[j] + input[j + 1])
                    input = input.slice(1)
                    // console.log(input)
                }
            }
        }
        return newStrOdd
    }
}
// console.log(splitPairs('okay'))
// console.log(splitPairs('xoxoxo'))
// console.log(splitPairs('hello'))
// console.log(splitPairs('endurance'))
// console.log(splitPairs('enderance'))
