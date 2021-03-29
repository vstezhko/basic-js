const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
//   constructor(type=true) {
//     this.type = type;
//     this.letters = ["A", "B", 'C', 'D', 'E', 'F',	'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
//   }
//
//
//
//   encrypt(message, key) {
//     // throw new CustomError('Not implemented');
//     // remove line with error and write your code here
//     let message_arr = message.split("");
//     let key_arr = key.split("");
//     let message_arr_code = message_arr.map(function(elem){this.letters.indexOf(elem)});
//     let key_arr_code = key_arr.map(function(elem){this.letters.indexOf(elem)});
//
//   }
//   decrypt(message, key) {
//     // throw new CustomError('Not implemented');
//     // remove line with error and write your code here
//   }
}
//
module.exports = VigenereCipheringMachine;
//
// const letters = ["A", "B", 'C', 'D', 'E', 'F',	'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
//
// function encrypt(message, key) {
//   console.log(key.length)
//   // throw new CustomError('Not implemented');
//   // remove line with error and write your code here
//   let message_arr = message.split("");
//   let key_arr = (key.repeat(Math.floor((message_arr.length)/key.length))).split("");
//   let message_arr_code = message_arr.map(function(elem){
//     return letters.indexOf(elem.toUpperCase());
//   });
//   let key_arr_code =key_arr.map(function(elem){
//     return letters.indexOf(elem.toUpperCase());
//   });
//     for (let i = 0; i<=(message_arr_code.length-key_arr_code.length); i++) {
//      key_arr_code.push(letters.indexOf((String(key_arr[i]).toUpperCase())));
//     }
//
//     let encrypt_code = [];
//     for (let i=0; i<message_arr_code.length; i++){
//       if((message_arr_code[i]+key_arr_code[i]) >= 26){    ///больше или равно 26??
//         encrypt_code.push(letters[(message_arr_code[i]+key_arr_code[i]-26)])
//       } else{
//         encrypt_code.push(letters[(message_arr_code[i]+key_arr_code[i])])
//       }
//     }
//     console.log(encrypt_code);
//
// return {message_arr_code, key_arr_code}
// }
//
//
// console.log(encrypt('attack at dawn!', 'alphonse'));