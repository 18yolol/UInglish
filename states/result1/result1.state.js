(function(){
  'use strict';

  angular
    .module('english')
    .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
      $stateProvider.state('result1', {
        url: '/result1',
        templateUrl : 'states/result1/result1.html',
      });
    };
})();
