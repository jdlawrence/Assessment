// groupBy:
// Splits a collection into sets, grouped by the result of running each value through 
// iteratee. If iteratee is a string instead of a function, groups by the property 
// named by iteratee on each of the values.

// Examples:

// _.groupBy([1.3, 2.1, 2.4], function(num){ return Math.floor(num); });
// // returns {1: [1.3], 2: [2.1, 2.4]}

// _.groupBy(['one', 'two', 'three'], 'length');
// // returns {3: ["one", "two"], 5: ["three"]}

var _ = {};

_.groupBy = function(collection, iteratorOrstring) {
var result ={}
  collection.forEach(function(element) {
    if (iteratorOrstring === 'function') {

    } else {
       if (iteratorOrstring === 'string') {

       } else if (iteratorOrstring === undefined) {
        
       } 

    }
  })
  return result;
};

 //_.groupBy([1.3, 2.1, 2.4, 3.5, 4,7], function(num){ return Math.floor(num); });
