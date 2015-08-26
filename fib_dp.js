(function(){
  'use strict';

  angular
    .module('FibDp', [])
    .factory('FibDpFactory', FibDpFactory);


  function FibDpFactory() {
    return fib_dp;
  }

  function fib_dp(num) {
    var index = null;
    var newVal = null;
    var resultObj = {
      result: null,
      resultSet: null
    };

    if(typeof num !== 'number') {
      throw "Must provide a number."
    }

    if(num < 0) {
      throw "Number must be greater than or equal to 0"
    }

    //base cases: when num is 0 or 1
    if(num === 0) {
      resultObj.result = 0;
      resultObj.resultSet = [0];
    }
    else if(num === 1) {
      resultObj.result = 1;
      resultObj.resultSet = [0, 1];
    }
    //otherwise build bottom up to resultObj starting from 2
    else {
      resultObj.result = 1;
      resultObj.resultSet = [0, 1];

      for(index = 2; index <= num; index++) {
        newVal = resultObj.resultSet[index-1] + resultObj.resultSet[index-2];
        resultObj.result += newVal;
        resultObj.resultSet.push(newVal);

        //TODO: check if number is too big to accurately represent using Number.MAX_VALUE or Number.MAX_SAFE_INTEGER?
      }
    }

    return resultObj;
  }

})();
