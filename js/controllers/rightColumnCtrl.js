(function(){
	
	'use strict';

	angular.module('app.common')
	.controller('rightColumnCtrl', ['$scope', 'dummyDataService', 
		function($scope, dummyDataService){

			$scope.items = dummyDataService.openMenu();
			$scope.currentIndex = null;

			$scope.toggleAccordian = function($index){
				if($scope.currentIndex == $index){
					$scope.currentIndex = null;
				}else{
					$scope.currentIndex = $index;
				}
			}

		}
	]);

}());