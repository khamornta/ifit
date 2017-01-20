(function(){

	'use strict';
	
	angular.module('app.service')
	.service('dummyDataService', function(){
		return{

			cardData: function(){ 
				return [
					{			
						img: 'images/thumb-jillian.jpg',
						title: 'Get Fit with Jillian Michaels',
						subTitle: 'weight loss'
					},
					{			
						img: 'images/thumb-gc.jpg',
						title: 'Grand Canyon',
						subTitle: 'incline trainer'
					},
					{
						img: 'images/thumb-runner.jpg',
						title: 'Power Walk',
						subTitle: 'walking'
					},
					{
						img: 'images/thumb-blue.jpg',
						title: 'Elliptical Weight Loss',
						subTitle: 'weight loss'
					},
					{
						img: 'images/thumb-bike.jpg',
						title: 'Off Season Weight Loss',
						subTitle: 'cycling'
					},
					{
						img: 'images/thumb-central-park.jpg',
						title: 'Central Park',
						subTitle: 'fitness'
					},
					{
						img: 'images/thumb-5k.jpg',
						title: '5K Beginner Training',
						subTitle: 'running'
					},
					{
						img: 'images/thumb-coast.jpg',
						title: 'Going Coastal',
						subTitle: 'running'
					},
					{
						img: 'images/thumb-jillian.jpg',
						title: 'Elliptical Weight Loss',
						subTitle: 'weight loss'
					},
					{
						img: 'images/thumb-mountain.jpg',
						title: 'Incline Train',
						subTitle: 'incline trainer'
					},
					{
						img: 'images/thumb-paris.jpg',
						title: 'Paris',
						subTitle: 'running'
					},
					{
						img: 'images/thumb-jillian.jpg',
						title: 'Lose Weight with Jillian Michaels',
						subTitle: 'weight loss'
					}
				];
			},

			testimonialsData: function(){
				return [
					{
						quote: 'To date I have lost 14 Kilos (30 pounds) and my fitnes level is at least the same as when I was actively engaged in sport (if not better), thanks to iFit and the range and variation of fitness programs available.',
						author: '—Graham Lambourne'
					},
					{
						quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati reprehenderit eveniet tenetur eum veniam, iure voluptatem, tempore optio soluta, mollitia, modi suscipit expedita sint fugit similique explicabo. Ea, velit rem.',
						author: '—John Smith'
					},
					{
						quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus assumenda quod quam, possimus corrupti debitis voluptas quos nam maiores reprehenderit. Odit pariatur porro, beatae perspiciatis! Velit mollitia nihil nobis eaque dignissimos ullam officia et eveniet.',
						author: '-Jane Smith'
					}
				]
			},

			openMenu: function(){
				return [
					{
						category: 'TRAINING',
						list: [
							'Weight Loss',
							'Running',
							'Cycling',
							'Fitness',
							'Walking',
							'Personal Training',
							'Daily Workout'
						]
					},
					{
						category: 'SHOP',
						list: [
							'Gear',
							'Equipment',
							'Clothing',
							'Vitamins'
						]
					},
					{
						category: 'TIPS-VIDEOS',
						list: [
							'Our Blog',
							'Recent Articles',
							'Youtube Channel',
							'Archive'
						]
					},
					{
						category: 'MY CART',
						list: [
							'In Cart(2)',
							'Check Out',
							'Wish List(0)'
						]
					}
				]
			},

			searchResults: function(){
				return [
					{
						category: 'fitness',
						products: [
							{
								img: 'images/ts-001.jpg',
								title: 'Global Boot Camp with Jillian Michaels',
								subtitle: '8 Week Program',
								price: 19.99,
							},
							{
								img: 'images/ts-002.jpg',
								title: 'Incline Train',
								price: 14.99,
							},
							{
								img: 'images/ts-003.jpg',
								title: 'Going Coastal',
								price: 0,
							},
							{
								img: 'images/ts-004.jpg',
								title: 'Grand Canyon Trails',
								subtitle: '8 Workouts',
								price: 4.99,
							}
						]
					},
					{
						category: 'running',
						products: [
							{
								img: 'images/ts-005.jpg',
								title: 'Boston Marathon',
								subtitle: '5 Workouts',
								price: 0,
							},
							{
								img: 'images/ts-006.jpg',
								title: 'Half Marathon Training',
								subtitle: '10 Week Program',
								price: 0,
							},
							{
								img: 'images/ts-007.jpg',
								title: 'Marathon Training',
								subtitle: '14 Week Program',
								price: 0,
							},
							{
								img: 'images/ts-008.jpg',
								title: 'Runner’s World Half & Festival',
								subtitle: '3 Workouts',
								price: 0,
							},
							{
								img: 'images/ts-009.jpg',
								title: 'Central Park',
								subtitle: '5 Workouts',
								price: 0,
							},
							{
								img: 'images/ts-010.jpg',
								title: 'Run With The Torch',
								subtitle: '10 Workouts',
								price: 1.99,
							},
							{
								img: 'images/ts-011.jpg',
								title: 'Bridge Tour',
								subtitle: '7 Workouts',
								price: 0,
							}
						]
					},
					{
						category: 'cycling',
						products: [
							{
								img: 'images/ts-012.jpg',
								title: 'Boston Marathon',
								subtitle: '5 Workouts',
								price: 0,
							}
						]
					}
				];
			}

		}
	});

}());