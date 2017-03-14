(function(){
  angular
    .module('english')
    .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
      $stateProvider.state('first', {
        url: '/1',
        templateUrl: 'states/first-question/first-question.html'
      })
    }
})();
