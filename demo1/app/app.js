


angular.module('kaifanla', [
  'ngRoute',
  'ngAnimate',
  'ng','main','detail','order','atti'
  
]).config(function($routeProvider){    //配置路由字典，指定路由地址<=>模板页面对应关系
    $routeProvider.otherwise({ //若URL未提供路由地址/提供了不存在的路由地址
      redirectTo: '/main'
    });
  });