// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

// var stringifyJSON = function(obj) {
//   // create a variable for storage
//   // iterate through the object
//   // populate the string variable with each item found in the object but
//   // convert them to strings first
//   //base case
//   if (obj[keys] === undefined) { return returnedString; }
//   let returnedString = '';
//   for (let keys in obj) {
//     returnedString += keys;
//     returnedString += obj[keys];
//   }
//   return returnedString;

//   //return stringifyJSON(obj.slice)
// };

var stringifyJSON = function(obj) {
  var results = [];
  if (typeof obj === 'number' || typeof obj === 'boolean') { return obj.toString(); }
  if (obj === null) { return 'null'; }
  if (typeof obj === 'string') { return '"' + obj + '"'; }
  if (Array.isArray(obj)) { return '[' + obj.map(function(elem) { return stringifyJSON(elem); }).join() + ']'; }
  for (var key in obj) {
    if ( typeof obj[key] !== 'function' && typeof obj[key] !== 'undefined' ) {
      results.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    }
  }
  return '{' + results.join() + '}';
};


/*
JSON.stringify
The JSON.stringify() method converts a JavaScript object or value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified properties if a replacer array is specified.
*/
