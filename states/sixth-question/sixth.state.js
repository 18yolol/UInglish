(function(){
  angular
    .module('english')
    .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
      $stateProvider.state('sixth', {
        url: '/6',
        templateUrl: 'states/sixth-question/sixth-question.html',
        controller: 'StateController',
        controllerAs: 'vm'
      })
    }
})();
