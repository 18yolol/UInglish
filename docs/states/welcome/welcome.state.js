(function(){
  'use strict';

  angular
    .module('english')
    .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {

      $stateProvider.state('welcome', {
        url: '/welcome',
        templateUrl : 'states/welcome/welcome.html'
      });
    };
})();
