// Given a string, compute recursively (no loops) a new string 
//where all the lowercase 'x' chars have been changed to 'y' chars.


/* Examples 
changeXY('codex') → 'codey'
changeXY('xxhixx') → 'yyhiyy'
changeXY('xhixhix') → 'yhiyhiy'
*/

var _ = {};

_.changeXY = function(string) {
// if (string.length === 0) {
//   return newString;
// } else {
//   var count = 0;
//   if(!string[0] === 'x') {
//    string[0] === 'y'
//    newString = string.substr(1) + string[0]
//    console.log(newString) 
//   } else {
//     newString = string.substr(1) + string[0]

//   }
//   _.changeXY(newString);
//   if()
//   //is going to be endless loop, have to make it stop at every 1st time string[0] to be the 1st newString.


//     }





  }

    return newString;
  }
  
_.changeXY('xodex') 


  // var newString = ''
  // var recurse = function (index) {
  //   if (index>= string.length)
  //     return
  //   if(string(index) === 'x') {
  //     newString += 'y'
  //   } else if(string[index] ==='y') {
  //     newstring +='x'
  //   } else {
  //     newString +- string[index];
  //   }
  //   recurse(index + 1)
