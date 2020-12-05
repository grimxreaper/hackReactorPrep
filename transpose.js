//You will be given an array that contains two strings.
//Your job is to create a function that will take those two strings and transpose them,
//so that the strings go from top to bottom instead of left to right.

//i: array of strings o: 2 characters on each line 
function transposeTwoStrings(array) {
let result = ''
    for (let i = 0; i < array.length; i++) {
       for (let j = 0; j < array[i].length; j++){
            result += array[i][j] + " " + array[1][j] + "\n";
//            //console.log(array[i][j], array[1][j])
       }
       break;
    }
    return result
}

console.log(transposeTwoStrings(['Hello','World']))
// should return:
// H W  
// e o  
// l r  
// l l  
// o d
