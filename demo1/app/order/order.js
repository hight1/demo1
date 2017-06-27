'use strict';

angular.module('order', ['ng','ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/order/:number', {
    templateUrl: 'order/order.html',
    controller: 'order'
  })
}]).controller('order', function($scope,$http,$location,$routeParams) {
	
 $scope.submit=function(obj){
    var kv=jQuery.param(obj);
    $http.post('data/order_add.php',kv).success(function(data){
		    
				$location.path('/atti/'+data.status);
		   })
		  
 }
}).run(function($http){
$http.defaults.headers.post={'Content-type':'application/x-www-form-urlencoded'}

});