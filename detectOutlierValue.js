///OUTLIERS///
// Given a string of even and odd numbers, find which is the sole even number or the sole odd number.
// The return value should be 1-indexed, not 0-indexed.

function detectOutlierValue(str){
str = str.split(' ')
let numbers = [];

    for (let i = 0; i < str.length; i++) {
        numbers.push(parseInt(str[i]))
    }
    // console.log(numbers)

    let evenNums = []
    let oddNums = []
    let result = 0
    for (let j = 0; j < numbers.length; j++) {
        if (numbers[j] % 2 === 0) {
            evenNums.push(j + 1)
        } else {
            oddNums.push(j + 1)
        }
    }

        // if (evenNums.length > oddNums.length) {
        //     result = parseInt(oddNums)
        // } else if (evenNums.length < oddNums.length) {
        //     result = parseInt(evenNums)
        // }

        if (evenNums.length === 1) {
            return evenNums
        } else {
            return oddNums
        }
        console.log(result)
        // return result
    }

// Examples :
detectOutlierValue("2 4 7 8 10"); // => 3 - Third number is odd, while the rest of the numbers are even
detectOutlierValue("1 10 1 1");  //=> 2 - Second number is even, while the rest of the numbers are odd
