// Given a string, compute recursively (no loops) a new string 
//where all the lowercase 'x' chars have been changed to 'y' chars.


/* Examples 
changeXY('codex') → 'codey'
changeXY('xxhixx') → 'yyhiyy'
changeXY('xhixhix') → 'yhiyhiy'
*/


// codex-> c+changeXY(odex)
//           next -> o+changeXY(dex)
//                    next-> d+ changeXY(ex)
//                               next-> e+changeXY(x)
//                                         changeX(x)+changeXY('')
//                                     return y <-+      +-> return ''


var _ = {};
_.changeXY = function(string) {
//1st need to checking string.length either equal 0 or not.
// if not, resuing recursion 
if(string.length === 0) {
  return ""
} else {
  //recursion is calling from the very last case,
  // so have to think about the very last time how to stop from the base case.
  var firstLetter = string[0]
  if(firstLetter === 'x') {
    firstLetter = 'y'
  console.log(string)
  console.log(string.substr(1))
    
  }
  return firstLetter +_.changeXY(string.substr(1))
}

};
_.changeXY('codex')
// _.changeXY = function(string) {
//   var newString = ''
// if (string.length === 0) {
//   return newString;
// } else {
//   if(!string[0] === 'x') {
//    string[0] === 'y'
//    newString = string.substr(1) + string[0] 
//    console.log(newString) 
//   } else {
//     newString = string.substr(1) + string[0]

//   }
//   // _.changeXY(newString);
//   //is going to be endless loop, have to make it stop at every 1st time string[0] to be the 1st newString.


//     }





//   }

//     return newString;
//   }
