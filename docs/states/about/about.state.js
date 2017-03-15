(function(){
  'use strict';

  angular
    .module('english')
    .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
      $stateProvider.state('about', {
        url: '/about',
        templateUrl: 'states/about/about.html'
      });
    };
})();
