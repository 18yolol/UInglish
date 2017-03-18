(function(){
  angular
    .module('english')
    .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
      $stateProvider.state('fifth', {
        url: '/5',
        templateUrl: 'states/fifth-question/fifth-question.html',
        controller: 'StateController',
        controllerAs: 'vm'
      })
    }
})();
