(function(){
  'use strict';

  angular
    .module('english')
    .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
      $stateProvider.state('result', {
        url: '/result',
        templateUrl : 'states/result/result.html',
      });
    };
})();
