///CHECK WINNER///
// Write a function called 'checkWinner'. This function will take an array with a length of 7.
// Each element of the array will be either; 'red', 'black', or 0. We can assume that no violation of either of these is possible (i.e. input will always be of length 7, and elements will only be 'red', 'black', or 0).
// Your function should accept this array as its only parameter.
// If there are 4 'red' elements consecutively in a row, 'checkWinner' should return the string: 'Red Wins!'. Similarly, if there are 4 'black' elements consecutively in a row, 'checkWinner' should return the string: 'Black Wins!'.
// If neither of these is the case, 'checkWinner' should return 'Draw!'.
// Here are some examples of your code running, assuming you have successfully created the described function. Please be sure to name the function "checkWinner".


function checkWinner(array) {
    let countForBlack = 0;
    let countForRed = 0;

    for (let i = 0; i < array.length; i++){
        if (array[i] === 'red' && countForBlack < 4) {
            countForRed += 1
            // console.log(countForRed)
            if (array[i - 1] === 'black') {
                countForBlack -= 1
            } else {
                continue;
            }
            
            
        } else if (array[i] === 'black' && countForRed < 4) {
            countForBlack += 1
            if (array[i - 1] === 'red') {
            countForRed -= 1
            }
        }
    }

    if (countForBlack >= 4) {
        return 'Black Wins!'
    } else if (countForRed >= 4) {
        return 'Red Wins!'
    } else {
        return 'Draw!'
    }
 }

let blackWinner = checkWinner(['black', 'red', 'black', 'black', 'black', 'black', 'red']);
console.log(blackWinner); //-> 'Black Wins!'

let redWinner = checkWinner([0,0,0, 'red', 'red', 'red', 'red']);
console.log(redWinner); //-> 'Red Wins!'

let draw = checkWinner(['red', 'red', 'red', 'black', 'red', 'black', 0]);
console.log(draw); // -> 'Draw!'

console.log(checkWinner(['red', 'red', 'red', 'black', 'red', 'black', 'black']))
