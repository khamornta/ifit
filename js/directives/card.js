(function(){
	'use strict';
	angular.module('app.directive')
	.directive('card', function(){

		return{
			restrict: 'E',
			scope: 'card = scopeData',
			transclude: true,
			templateUrl: '/portfolio/ifit/views/templates/card.tpl.html',
			link: function(scope, elem){
				var controller = new ScrollMagic.Controller();
				var scene = new ScrollMagic.Scene({
					triggerElement: elem, 
					triggerHook: 'onEnter',
					duration: '40%'
				})
				.setTween(elem, {opacity:1,rotationX:0})
				.addTo(controller);

				elem.hover(function(){
					$('.cards').addClass('active');
					elem.find('.group').addClass('select');
				}, function(){
					$('.cards').removeClass('active');
					elem.find('.group').removeClass('select');
				})
			}
		}

	});
}());