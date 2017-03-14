(function(){
  angular
    .module('english')
    .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
      $stateProvider.state('forth', {
        url: '/4',
        templateUrl: 'states/forth-question/forth-question.html',
        controller: 'StateController',
        controllerAs: 'vm'
      })
    }
})();
