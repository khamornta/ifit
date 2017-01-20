(function(){
	'use strict';

	angular.module('app',[
		'app.common',
		'app.service',
		'app.factory',
		'app.directive',
		'ngSanitize',
		'slickCarousel'
	]);

	angular.module('app.common',[]);
	angular.module('app.service',[]);
	angular.module('app.factory',[]);
	angular.module('app.directive',[]);

}());