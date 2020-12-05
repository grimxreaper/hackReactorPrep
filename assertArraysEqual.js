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
