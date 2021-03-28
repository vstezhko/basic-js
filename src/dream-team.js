const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let thirst = [];
  let e = "";
  if (Array.isArray(members)){
    for (let num of members){
      if (typeof num === 'string'){
        e =  num.split(' ').join('').slice(0,1);
        e = e.toUpperCase();
        thirst.push(e)
      }
    }
    return thirst.sort().join("")
  } else {return false}
};

// function createDreamTeam( members ) {
//   // throw new CustomError('Not implemented');
//   // remove line with error and write your code here
//   let thirst = [];
//   let e = "";
//   if (Array.isArray(members)){
//   for (let num of members){
//     if (typeof num === 'string'){
//       e =  num.split(' ').join('').slice(0,1);
//       e = e.toUpperCase();
//       thirst.push(e)
//     }
// }
// return console.log(thirst.sort().join(""))
// } else {return console.log(false)}
// };
//
// createDreamTeam({'foo': 'bar'}  );