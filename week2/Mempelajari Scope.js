// // global scope
// var example = "Global";

// function testExample() {
//   // local scope
//   var example = "Local";
//   return example;
// }

// console.log(example); // Global
// console.log(testExample()); // Local

// var example = "Example"
// var functionA = function() {
//   console.log(example + " in A");
//   var functionB = function() {
//     console.log(example + " in B"); // it's possible
//   };
//   functionB();
// };
// functionA();

var functionA = function() {
    console.log(this); // global Window object
  }
  
  var sampleObject = {};
  sampleObject.functionB = function() {
    console.log(this); // Object of sampleObject
  }
  
  functionA();
  sampleObject.functionB();