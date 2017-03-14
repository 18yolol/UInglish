(function(){
  angular
    .module('english')
    .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
      $stateProvider.state('eighth', {
        url: '/8',
        templateUrl: 'states/eighth-question/eighth-question.html',
        controller: 'StateController',
        controllerAs: 'vm'
      })
    }
})();
