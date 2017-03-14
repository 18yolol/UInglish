(function(){
  'use strict';

  angular
    .module('english')
    .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider){
      $stateProvider.state('wait', {
        url: '/wait',
        templateUrl: 'states/wait/wait.html',
        controller: 'StateController',
        controllerAs: 'vm',
        onEnter: function($timeout, $state){
          $timeout(function(){
            $(document).ready(function(){
              $('#spinner').fadeOut('slow');
              $('#welcome-header').fadeOut('slow');
            });
            $state.go('result');
          }, 5000);
        }
      });
    };

})();
