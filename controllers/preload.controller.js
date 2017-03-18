(function(){
  'use strict';

  angular
    .module('english')
    .controller('PreloadController', PreloadController);

    PreloadController.$inject = ['$scope', '$preloader'];

    function PreloadController($scope, $preloader) {
      $scope.imageLocations = [
                    "img/alan_walker.jpg",
                    "img/background.jpg",
                    "img/batman.jpg",
                    "img/beer.jpg",
                    "img/chicken.jpg",
                    "img/coke.jpg",
                    "img/deadpool.jpg",
                    "img/doctor.jpg",
                    "img/eminem.jpg",
                    "img/flight_attendant.jpg",
                    "img/gimbab.jpg",
                    "img/juice.jpg",
                    "img/lawyer.jpg",
                    "img/pho.jpg",
                    "img/pizza.jpg",
                    "img/singapore.jpg",
                    "img/spiderman.png",
                    "img/superman.jpg",
                    "img/taylor_swift.jpg",
                    "img/the_chainsmokers.jpg",
                    "img/tour_guide.jpg",
                    "img/uk.jpg",
                    "img/upin_ipin_mobile.jpg",
                    "img/upin_ipin.jpg",
                    "img/us.jpeg",
                    "img/wine.jpg",
                    "img/australia.jpg",
      ];
      // Preload the images; then, update display when returned.
     $preloader.preloadImages( $scope.imageLocations )
    }

})();
