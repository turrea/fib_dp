(function() {
  'use strict';

  angular
    .module('fibDpApp', ['FibDp'])
    .controller('fibDpAppController', fibDpAppController)
    .filter('fibDpExplode', fibDpExplode);


  function fibDpAppController(FibDpFactory) {
    var vm = this;

    vm.num = 0;
    vm.resultObj = null;
    vm.error = null;

    vm.getResult = function() {
      try {
        vm.resultObj = FibDpFactory(vm.num);
        vm.error = null;
      }
      catch(e) {
        vm.result = null;
        vm.error = e;
      }
    };
  }

  fibDpAppController.$inject = ['FibDpFactory'];

  function fibDpExplode() {
    return function(arr, delimiter) {
      var result = "";

      angular.forEach(arr, function(val, index) {
        if(index > 0) {
          result += ', '
        }
        result += val;
      });

      return result;
    }
  }

})();
