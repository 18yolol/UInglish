(function(){
  angular
    .module('english')
    .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
      $stateProvider.state('third', {
        url: '/3',
        templateUrl: 'states/third-question/third-question.html',
        controller: 'StateController',
        controllerAs: 'vm'
      })
    }
})();
