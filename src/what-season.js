const CustomError = require("../extensions/custom-error");

module.exports = function getSeason( date ) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (toString.call(date) != "[object Date]") {
    if (date === undefined)
    return ('Unable to determine the time of year!');
    else {
      throw new Error('Errrrror')
    }
  }
  else if(toString.call(date) === "[object Date]"){
    switch (date.getMonth()) {
      case 0 :
        return ('winter');
        break;
      case 1 :
        return ('winter');
        break;
      case 2 :
        return ('spring');
        break;
      case 3:
        return ('spring');
        break;
      case 4:
        return ('spring');
        break;
      case 5:
        return ('summer');
        break;
      case 6:
        return ('summer');
        break;
      case 7:
        return ('summer');
        break;
      case 8:
        return ('autumn');
        break;
      case 9:
        return ('autumn');
        break;
      case 10:
        return ('autumn');
        break;
      case 11:
        return ('winter');
        break;
    }}




};


// function getSeason( date ) {
//   // throw new CustomError('Not implemented');
//   // remove line with error and write your code here
// if (date === null) {
//   return console.log('Unable to determine the time of year!')
// }
//   else if(toString.call(date) === "[object Date]"){
//     switch (date.getMonth()) {
//       case 0 :
//         return console.log('winter');
//         break;
//       case 1 :
//         return console.log('winter');
//         break;
//       case 2 :
//         return console.log('winter');
//         break;
//       case 3:
//         return console.log('spring');
//         break;
//       case 4:
//         return console.log('spring');
//         break;
//       case 5:
//         return console.log('spring');
//         break;
//       case 6:
//         return console.log('summer');
//         break;
//       case 7:
//         return console.log('summer');
//         break;
//       case 8:
//         return console.log('summer');
//         break;
//       case 9:
//         return console.log('autumn');
//         break;
//       case 10:
//         return console.log('autumn');
//         break;
//       case 11:
//         return console.log('autumn');
//         break;
//     }} else { return console.log(Error('fail'))}
//
// }
//
// getSeason( [2019, '27', 0 + '1']);