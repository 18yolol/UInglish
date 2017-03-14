(function(){
  angular
    .module('english')
    .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
      $stateProvider.state('seventh', {
        url: '/7',
        templateUrl: 'states/seventh-question/seventh-question.html',
        controller: 'StateController',
        controllerAs: 'vm'
      })
    }
})();
