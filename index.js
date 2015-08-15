(function(window){
  'use strict';

  function fib_dp(num) {
    var index = null;
    var newVal = null;
    var result = {
      sum: null,
      set: null
    };

    if(typeof num !== 'number') {
      throw "Must provide a number."
    }

    if(num < 0) {
      throw "Number must be greater than or equal to 0"
    }

    //base cases: when num is 0 or 1
    if(num === 0) {
      result.sum = 0;
      result.set = [0];
    }
    else if(num === 1) {
      result.sum = 1;
      result.set = [0, 1];
    }
    //otherwise build bottom up to result starting from 2
    else {
      result.sum = 1;
      result.set = [0, 1];

      for(index = 2; index <= num; index++) {
        newVal = result.set[index-1] + result.set[index-2];
        result.sum += newVal;
        result.set.push(newVal);

        //TODO: check if number is too big to accurately represent?
      }
    }

    return result;
  }

  window.sampleNs = window.sampleNs || {};
  window.sampleNs.fib_dp = fib_dp;

})(window);
