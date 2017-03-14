(function(){
  angular
    .module('english')
    .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
      $stateProvider.state('second', {
        url: '/2',
        templateUrl: 'states/second-question/second-question.html'
      })
    }
})();
