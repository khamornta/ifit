(function(){
	
	'use strict';

	angular.module('app.common')
	.controller('searchCtrl', ['$scope', 'dummyDataService', '$rootScope',
		function($scope, dummyDataService, $rootScope){

			$scope.results = dummyDataService.searchResults();

			$scope.hideSearch = function(){
				$rootScope.searchOpen = false;
			}

		}
	]);

}());