
// Given a string, compute recursively (no loops) a new string 
//where all the lowercase 'x' chars have been changed to 'y' chars.


/* Examples 
changeXY('codex') → 'codey'
changeXY('xxhixx') → 'yyhiyy'
changeXY('xhixhix') → 'yhiyhiy'
*/
// codex-> c+changeXY(odex)
//            +-> o+changeXY(dex)
//                    +-> d+ changeXY(ex)
//                               +-> e+changeXY(x)
//                                         changeX(x)+changeXY('')
//                                     return y <-+      +-> return ''

// var _ = {};
// _.changeXY = function(string) {
//   if(string.length ===0){
//     return '';
//   }
//   var firstLetter = string[0];
//   var restofString=string.substr(1);
//   if(firstLetter ==='x') {
//     firstLetter ='y'
    

//   }
//   return firstLetter + _.changeXY(restofString)
// };
_.changeXY = function(string) {
  while(string.indexOf('x')> -1){
    string = string.replace('x','y');
  }
  return string;
}
_.changeXY = function(string) {
if(string.indexOf('x') === -1 ) {
  return string
} else {
  var replacedString = string.replace('x','y')
  return _.changeXY(replacedString);
}

};

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
//   // if()
//   //is going to be endless loop, have to make it stop at every 1st time string[0] to be the 1st newString.


//     }





//   }

//     return newString;
//   }
  
// _.changeXY('xodex') 


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