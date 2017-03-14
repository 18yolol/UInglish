(function(){
  'use strict';

  angular
    .module('english')
    .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
      $stateProvider.state('about', {
        parent: 'app',
        url: '/about',
        template: 'About State'
      });
    };
})();
