(function(){
  'use strict';

  angular
    .module('english')
    .controller('StateController', StateController);

    StateController.$inject = ['$state', '$timeout'];

    function StateController($state, $timeout) {
      var vm = this;

      vm.goForth = goForth;
      vm.goFifth = goFifth;
      vm.goSixth = goSixth;
      vm.goSeventh = goSeventh;
      vm.goEighth = goEighth;

      vm.wait = wait;

      function goForth() {
        $state.go('forth');
      };

      function goFifth() {
        $state.go('fifth');
      };

      function goSixth() {
        $state.go('sixth');
      };

      function goSeventh() {
        $state.go('seventh');
      };

      function goEighth() {
        $state.go('eighth');
      };

      function wait() {
        $state.go('wait');
      };
    };

})();
