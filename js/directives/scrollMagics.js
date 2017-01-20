(function(){
	'use strict';
	angular.module('app.directive')
	.directive('scrollMagic', function(){
		return{
			restrict: 'AE',
			scope: {
				props : '&smProp'
			},
			link: function(scope, elem, attrs){
				var controller = new ScrollMagic.Controller();
				var scene = new ScrollMagic.Scene({
					triggerElement: attrs.smTrigger, 
					triggerHook: attrs.smDir,
					duration: attrs.smDur
				})
				.setTween(attrs.smTarget, scope.props())
				.addTo(controller);
			}
		}
	})
}());