'use strict';

angular.module('main', ['ngRoute','ng'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/main', {
    templateUrl: 'main/main.html',
    controller: 'main'
  })
}]).controller('main', function($scope,$http) {
          $scope.isLoading=true;
		  $scope.hasMore=true;
		  
		  $http.get('data/dish_listbypage.php?start=0').success(function(data){
		    
		     $scope.dishList=data;
			 $scope.isLoading=false;
		   })
		  



		  $scope.isLoading=true;
		  $scope.click=function(){
		    $http.get('data/dish_listbypage.php?start='+$scope.dishList.length).success(function(data){
		      if(data.length<5)
			  {$scope.hasMore=false;}
			  
		     $scope.dishList=$scope.dishList.concat(data);
			 $scope.isLoading=false;
		   })}

		   
		   $scope.$watch('kw',function(){
		     console.log('model数据：'+$scope.kw);
			 if(!$scope.kw){
			
		   return;
			 }
			 $scope.isLoading=true;
			 $http.get('data/dish_listbykw.php?kw='+$scope.kw).success(function(data){
		      $scope.dishList=data;
			  console.log(data);
			 $scope.isLoading=false;
		   })
		     $scope.hasMore=false;
		   })
});