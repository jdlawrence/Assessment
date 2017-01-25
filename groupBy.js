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
  var result = {};

  collection.forEach(function(element, indexOrKey, collection) {
    if (iteratorOrstring === 'string') {

    } else {
      // 1.3
      // {}
      // {1: [1.3]}

      // element  = 1.3 result = {}
      // element  = 1.3 result = {} firstValue = []
      var firstValue =[];
      key = iteratorOrstring(element);
      // key = 1 result ={}
      firstValue.push(element)
      result[key] = firstValue
      /// this returns undefined: firstValue.push(element), undefined.slice()
      //console.log(result = { 1: [1.3]})
      console.log(result);
    }


  });
  // your code here!
};
_.groupBy([1.3, 2.1, 2.4, 3.5, 4,7], function(num){ return Math.floor(num); });
