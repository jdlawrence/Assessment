// Given a string, compute recursively (no loops) a new string 
//where all the lowercase 'x' chars have been changed to 'y' chars.


/* Examples 
changeXY('codex') → 'codey'
changeXY('xxhixx') → 'yyhiyy'
changeXY('xhixhix') → 'yhiyhiy'
*/

/*

This one was my original plan, but after trying at console, either my newString is '', never pass it or its undefined,
so I found out actully I don't need a newString, because thw computer is remember each time when it recurse even the function,
have the callstack if use fountion later.
var _ = {};
_.changeXY = function(string) {
  var newString 
if (string.length === 0) {
  return '';
} else {
  if(!string[0] === 'x') {
   string[0] === 'y'
   newString = string[0]+ string.substr(1) 
   console.log(newString) 
  } else {
    newString = string[0] + string.substr(1)

  }
  _.changeXY(string.substr(1));
  //is going to be endless loop, have to make it stop at every 1st time string[0] to be the 1st newString.


    }
 return newString;
  }
_.changeXY('codex')
*/


// codex-> c+changeXY(odex)
//           next -> o+changeXY(dex)
//                    next-> d+ changeXY(ex)
//                               next-> e+changeXY(x)
//                                         changeX(x)+changeXY('')
//                                     return y <-+      +-> return ''


 // funtion(codex){
 //  return c+function(odex){
 //    return o+function(dex){
 //      return d+function(ex){
 //        return e+function(x){
 //          if(x ==='x'){return y+functon(empty){if empty=='' return ''}};
 //        };
 //      }
 //    };
 //  };
 // }


var _ = {};
_.changeXY = function(string) {
  console.log('_.changeXY(',string,')');
//1st need to checking string.length either equal 0 or not.
// if not, resuing recursion 
if(string.length === 0) {
  return ""
} else {
  //recursion is calling from the very last case,
  // so have to think about the very last time how to stop from the base case.
  var firstLetter = string[0]
  var restOfString = string.substr(1)
  if(firstLetter === 'x') {
    firstLetter = 'y'
  // console.log(string)
  // console.log(string.substr(1))
  }
  console.log('add firstLetter ', firstLetter, ' with _.changeXY(', restOfString,')');
  var resultOfTheRestString = _.changeXY(restOfString)
  console.log('change restof string result is ',resultOfTheRestString,'end')
  
  return firstLetter + resultOfTheRestString;
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
//    newString = string[0]+ string.substr(1) 
//    console.log(newString) 
//   } else {
//     newString = string[0] + string.substr(1)

//   }
//   // _.changeXY(string.substr(1));
//   //is going to be endless loop, have to make it stop at every 1st time string[0] to be the 1st newString.


//     }





//   }

//     return newString;
//   }
