'use strict';

angular.module('atti', ['ng','ngRoute']).config(['$routeProvider',function($routeProvider) {
  $routeProvider.when('/atti/:status', {
    templateUrl: 'atti/atti.html',
    controller: 'atti'
  })
}]).controller('atti', function($scope,$http,$location,$routeParams) {
  if ($routeParams.status=="error")
  { 
	  $scope.msg="danger";
  }else{
     $scope.msg="success";
  
  }
});