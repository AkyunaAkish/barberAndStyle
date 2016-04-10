app.controller('MainController', function($scope, $http){

  $http.get('/api/v1/test').then(function(res){
    $scope.message = res.data;
  });

});
