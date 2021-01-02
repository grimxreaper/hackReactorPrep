// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {

  let docContent = document.body;
  let results = [];
  let element = arguments[1] || document.body;
  //base case

  var containsClass = function (element, className) {

    if (element.classList && element.classList.contains(className)) {
      return true;
    } else {
      return false;
    }
  };

  if (containsClass(element, className)) {
    results.push(element);
  }

  for (let i = 0; i < element.childNodes.length; i++) {
    results = results.concat(getElementsByClassName(className, element.childNodes[i]));

  }








  // function lookForClasses (element) {
  //   let children = element.children;
  //   for (let i = 0; i < children.length; i++) {
  //     if (children[i].classList.contains(className)) {
  //       results.push(children[i]);
  //     }
  //     if (children[i].haschildNodes) {
  //       lookForClasses(children[i]);
  //     }
  //   }
  // }


  return results;

  // //see if doc contains this class
  // if (classList.contains(className)) { 
  //   //if it contains the class, identify all the elements that have that class
  //   for (let i = 0; i < classList.length; i++) {
  //     //if the current class is the class we are interested in 
  //     if (classList[i] === className) {
  //       //push its elements inside our array
  //       //how can we do this?


  //       results.push(i);
  //     }
  //   }
  // }

  // return getElementsByClassName(className, elementClasses);

};
