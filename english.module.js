(function() {
    'use strict';

    angular
      .module('english', [
        'ui.router'
      ])
      .run(run);

    run.$inject = ['$rootScope', '$location'];

    function run($state, $location) {
      $location.path('/welcome');

    };
})();
