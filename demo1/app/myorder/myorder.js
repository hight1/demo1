'use strict';

angular.module('myorder', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/myorder/:phone', {
    templateUrl: 'myorder/myorder.html',
    controller: 'myorder'
  });
}])

.controller('myorder', function($http,$scope,$routeParams) {
	$http.get('data/dish_listbyphone.php?phone='+$routeParams.phone).success(function(data){
		     $scope.dishList=data;
			 console.log($routeParams.phone);
		   })
  $scope.count=1;

});