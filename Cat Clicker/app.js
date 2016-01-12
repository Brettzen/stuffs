var app = angular.module('app', []);
app.controller('CatController', function($scope) {
	$scope.cats = [
		{
			"name": "Milhouse",
			"src": "cat1.jpg",
		},
		{
			"name": "Freddie",
			"src": "cat2.jpg",
		}
	];
});

elem = document.getElementById('cat');
catCounter = 0;


