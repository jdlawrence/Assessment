// groupBy:
// Splits a collection into sets, grouped by the result of running each value through 
// iteratee. If iteratee is a string instead of a function, groups by the property 
// named by iteratee on each of the values.

// Examples:

// _.groupBy([1.3, 2.1, 2.4, 3.5, 4,7], function(num){ return Math.floor(num); });
// // returns {1: [1.3], 2: [2.1, 2.4]}

// _.groupBy(['one', 'two', 'three'], 'length');
// // returns {3: ["one", "two"], 5: ["three"]}

var _ = {};

_.groupBy = function(collection, iteratorOrstring) {
  var result ={};
  if(collection.length === 0) {
    return result;
  } else {
    key = iteratorOrstring(collection[0])
    result[key] = [collection[0]]
    console.log(result)
    restOfCollection = collection.slice(1)
    _.groupBy(restOfCollection, iteratorOrstring) 
    


  }
  



return result;
};

 _.groupBy([1.3, 2.1, 2.4, 3.5, 4,7], function(num){ return Math.floor(num); });
