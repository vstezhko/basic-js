const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;


module.exports = function dateSample( sampleActivity ) {
  // throw new CustomError('Not implemented');
  if (isNaN(sampleActivity)) {
    return false
  } else if (typeof sampleActivity != "string" ) {
    return false
  }
  else if (Number(sampleActivity)<=0 || Number(sampleActivity)> 15 ) {
    return false
  }
  else {
    return Math.ceil(Math.log(MODERN_ACTIVITY/Number(sampleActivity))/(Math.log(2)/HALF_LIFE_PERIOD));
  }


};






