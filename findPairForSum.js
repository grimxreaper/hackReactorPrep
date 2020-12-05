///FIND PAIR///
// Given a list of non-negative integers and a target sum, find a pair of numbers that sums to the target sum.
function findPairForSum(array, n) {
let pairs = [];
    for (let i = 0; i < array.length; i++) {
        for (let k = i + 1; k < array.length; k++){
            if (array[i] + array[k] === n) {
                pairs.push(array[i], array[k])
            }
        }
    }
return pairs
}
//Example:
var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair)

function assertArraysEqual(actual, expected, testName) {
    var sameValues = true;
    var sameLength = actual.length === expected.length;

    for (let i = 0; i < expected.length; i++){
        if (expected[i] !== actual[i]){
            sameValues = false;
            break;
        }
    }
    if (sameLength && sameValues) {
        console.log('passed');
    } else {
        console.log(`FAILED [${testName}] Expected ${expected}, but got ${actual}`)
    }

}

var actualFound = findPairForSum([3, 34, 4, 12, 5, 2], 9)
var expectedFound = [4, 5];
assertArraysEqual(actualFound, expectedFound, "should return an array of the two integers that sum to target")
