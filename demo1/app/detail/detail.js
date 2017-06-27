'use strict';

angular.module('detail', ['ng','ngRoute']).config(['$routeProvider',function($routeProvider) {
  $routeProvider.when('/detail/:num', {
    templateUrl: 'detail/detail.html',
    controller: 'detail'
  })
}]).controller('detail', function($scope,$http,$location,$routeParams) {
  $http.get('data/dish_listbydid.php?did='+$routeParams.num).success(function(data){
		     $scope.dishList=data;
		   })

 $scope.jumpMain=function(){
  $location.path('/main');
 }
 $scope.jumpOrder1=function(did){
  $location.path('/order/'+did);
 }
});