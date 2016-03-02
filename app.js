var app = angular.module('myModule', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'view1.html',
		controller: 'routeCtrl'
	});
	$routeProvider.when('/view2', {
		templateUrl: 'view2.html',
		controller: 'routeCtrl'
	});
	$routeProvider.when('/view3', {
		templateUrl: 'view3.html',
		controller: 'routeCtrl'
	});
	$routeProvider.when('/view4', {
		templateUrl: 'view4.html',
		controller: 'routeCtrl'
	});
	$routeProvider.otherwise({redirectTo: 'error.html' });
});

app.controller('routeCtrl', function() {

});