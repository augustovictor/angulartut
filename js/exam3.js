var app3 = angular.module('app3', []);

app3.controller('gListController', function($scope) {
	$scope.groceries = [
		{ item: 'Tomatoes', purchased: false },
		{ item: 'Potatoes', purchased: false },
		{ item: 'Bread', purchased: false },
		{ item: 'Humus', purchased: false }
	]

	$scope.getList = function() {
		return $scope.showList ? "ulGroceryList.html" : "groceryList.html";
	}
});