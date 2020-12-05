/////FLIPPER///////
//Flip every pair of characters in a string.
//flip the letter 
//i: string o: string

function flipPairs(input) {
input = input.split("")
let finalArr = [];
for (let i = 0; i < input.length; i++) {
    if (i % 2 === 0) {
        finalArr.push(input[i + 1]) //h
    } else if (i % 2 !== 0) {
        finalArr.push(input[i - 1])
    }
    //   else if (i === input.length - 1) {
    //     finalArr.push('!')
    // }
    // console.log(finalArr.join('') + '!')

}
finalArr = (finalArr.join('') + '!')
return finalArr
}
Example:
var input = 'check out how interesting this problem is, it\'s insanely interesting!';
var output = flipPairs(input);
console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!
