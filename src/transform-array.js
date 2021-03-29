const CustomError = require("../extensions/custom-error");



module.exports =function transform(arr) {

  let result_arr = [];
  if (arr.length === 0) {
    return result_arr;
  }
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        i++;

        break;
      case '--discard-prev':
        if( i === 0){

          break
        }  else {
          result_arr.pop();
          break;
        }

      case '--double-next':
        if(i===(arr.length-1) || !Number.isInteger(arr[i+1])  ){
          break;
        } else{
          result_arr.push(arr[(i+1)]);
          break;
        }

      case '--double-prev':
        if( i === 0){
          break
        }  else {
          if (result_arr.indexOf(arr[i-1]) >= 0){
            result_arr.push(arr[i-1]);
          }
        break;}
      default:
        result_arr.push(arr[i]);
    }
  }
  return result_arr;

};


// let a = [1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5];
// // let b = ['--double-prev', 1, 2, 3];
// // let c = [1, 2, 3, '--double-next'];
// // let d = [1, 2, 3, '--discard-next'];
// //
// //
// console.log(transform(a));
// // console.log(transform(b));
// // console.log(transform(c));
// // console.log(transform(d));
