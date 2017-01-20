(function(){
	
	'use strict';

	angular.module('app.common')
	.controller('testimonyCtrl', ['$scope', 'dummyDataService', 
		function($scope, dummyDataService){

			$scope.testimonies = dummyDataService.testimonialsData();

			$scope.currentIndex = 0;

			$scope.slickCfg = {
				infinite: true,
				speed: 500,
				fade: true,
				cssEase: 'linear',
				autoplay: true,
				arrows: false,
				method: {},
				event: {				
					afterChange: function (event, slick, currentSlide, nextSlide) {
						$scope.currentIndex = currentSlide;
					}
				}
			};

		}
	]);

}());