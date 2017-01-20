(function(){
	
	'use strict';

	angular.module('app.common')
	.controller('navCtrl', ['$scope', '$rootScope',
		function($scope, $rootScope){

			$scope.toggleMenu = function(){
				$rootScope.columnOpen = !$scope.columnOpen;
				$rootScope.searchOpen = false;
			}

			$scope.toggleSearch = function(){
				$rootScope.searchOpen = !$scope.searchOpen;
			}

		}
	]);

}());