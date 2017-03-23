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
          var resultNumber = 1 + Math.floor(Math.random() * 2);
          $timeout(function(){
            $(document).ready(function(){
              $('#spinner').fadeOut('slow');
              $('#welcome-header').fadeOut('slow');
            });
            $state.go('result'+resultNumber.toString());
          }, 5000);
        }
      });
    };

})();
