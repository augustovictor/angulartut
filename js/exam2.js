var app2 = angular.module('app2', []);

app2.controller('controller2', function($scope) {
	$scope.randomNum1 = Math.floor((Math.random() * 10) + 1);
	$scope.randomNum2 = Math.floor((Math.random() * 10) + 1);
});

app2.controller('badFController', function($scope) {
	var badFeelings = ['Disregarded', 'Unimportant', 'Rejected', 'Powerless'];
	$scope.bad = badFeelings[Math.floor(Math.random() * 4)];
});

app2.controller('goodFController', function($scope) {
	var goodFeelings = ['Pleasure', 'Awesome', 'Lovable', 'Inner Pace'];
	$scope.good = goodFeelings[Math.floor(Math.random() * 4)];
});