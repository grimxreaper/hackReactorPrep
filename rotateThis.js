///ROTATE THIS///
//Is one string a rotated version of another?
function rotateThis(str1, str2) {
   let newStr = str1 + str1
    // console.log(newStr)
//    let newStr2 = newStr.slice(7, 18)
   let index = newStr.indexOf(str2)
   if (index !== -1) {
       return true
   } else {
       return false
   }

    // console.log(newStr)
}

console.log(rotateThis('hello world', 'orldhello w'))
// For example:
// String 1: 'hello world'
// String 2: 'orldhello w'

// If you double the string, you'll be able to find another string inside the doubled string using familiar String methods.

// Doubled string: 'hello worldhello world'
// Search w/in it: '       orldhello w    '

function assertEqual(actual, expected, testName){
    if (actual === expected) {
        console.log('passed')
    } else {
        console.log(`FAILED [${testName}] Expected '${expected}' but got '${actual}'`)
    }
    }

    var actualRotate = rotateThis('hello world', 'orldhello w');
    var expectedRotate = true;
    assertEqual(actualRotate, expectedRotate, "should return true when string 2 is rotated version of string 1");

    var actualNot = rotateThis('hello world', 'lford hello');
    var expectedNot = false;
    assertEqual(actualNot, expectedNot, "should return false when string 2 is not a rotated version of string 1")
