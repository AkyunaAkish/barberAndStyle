app.controller('MainController', function($scope, $http){

  $scope.sendEmail = function(){
    var messageObj = {};
    messageObj.senderEmail = $scope.emailAddress;
    messageObj.senderName = $scope.senderName;
    messageObj.emailSubject = $scope.emailSubject;
    messageObj.emailMessage = $scope.emailMessage;

    $http.post('/api/v1/sendEmail', messageObj).then(function(res){
      console.log(res.data);
    });

  }

});
