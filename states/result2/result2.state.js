(function(){
  'use strict';

  angular
    .module('english')
    .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
      $stateProvider.state('result2', {
        url: '/result2',
        templateUrl : 'states/result2/result2.html',
      });
    };
})();
