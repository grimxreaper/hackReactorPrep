// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function getElementsByClassName (className) {
  //get all the child elements
  const elements = [];
  const element = arguments[1] || document.body; //if element isn't set

  if (element.classList && element.classList.contains(className)) {
    elements.push(element);
  }
  for (let i = 0; i < element.childNodes.length; i++) {
    elements.push(...getElementsByClassName(className, element.childNodes[i])); //spreading stuff that comes back...
  }
  return elements; //body, head
};

// window.addEventListener('DOMContentLoaded', function() {
//   setTimeout(() => { window.nodes = getElementsByClassName('suite'); }, 2000);
// });

//document.body:
//is the element that contains the content for the document.

//Node.childNodes
// The childNodes property is a property of Node in Javascript and is
// used to return a Nodelist of child nodes. Nodelist items are objects,
// not strings and they can be accessed using index numbers.
// The first childNode starts at index 0.

//element.classList
// The Element.classList is a read-only property that returns a live
// DOMTokenList collection of the class attributes of the element.
// This can then be used to manipulate the class list.

// var getElementsByClassName = function(className) {

//   let results = [];
//   let element = arguments[1] || document.body;
//   //base case

//   var containsClass = (element.classList && element.classList.contains(className));

//   if (containsClass) {
//     results.push(element);
//   }

//   for (let i = 0; i < element.childNodes.length; i++) {
//     results = results.concat(getElementsByClassName(className, element.childNodes[i]));
//   }
//   return results;
// };
