(function(){
	
	'use strict';

	angular.module('app.common')
	.controller('mainCtrl', ['$scope', 'dummyDataService', 
		function($scope, dummyDataService){

			$scope.cards = dummyDataService.cardData();

		}
	]);

}());