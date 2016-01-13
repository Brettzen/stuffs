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

	$scope.currentCat = {};

	$scope.catSelect = function(name, src) {
		$scope.currentCat.name = name;
		$scope.currentCat.src = src;

		console.log(name + " " + src);
		return $scope.currentCat;
	}

});

elem = document.getElementById('cat');
catCounter = 0;


