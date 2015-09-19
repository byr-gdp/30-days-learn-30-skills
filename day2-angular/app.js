var myApp = angular.module('myApp', []);

myApp.controller('personCtrl', ['$scope', function($scope) {
	$scope.persons = [
		{'name': 'gdp', 'age' : '21'}, 
		{'name': 'lyy', 'age': '20'}, 
		{'name': 'ht', 'age': '22'}, 
		{'name': 'lc', 'age': '19'}
	]
}]);