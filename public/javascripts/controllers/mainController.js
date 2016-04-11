app.controller('MainController', function($scope, $http, $state){

  $scope.sendEmail = function(){
    var messageObj = {};
    messageObj.senderEmail = $scope.emailAddress;
    messageObj.senderName = $scope.senderName;
    messageObj.emailSubject = $scope.emailSubject;
    messageObj.emailMessage = $scope.emailMessage;

    $http.post('/api/v1/sendEmail', messageObj).then(function(res){
      if (res.data.message == "success") {
        $scope.emailAddress = null;
        $scope.senderName = null;
        $scope.emailSubject = null;
        $scope.emailMessage = null;
        $state.go('initial');
      } else {
        alert('Message failed to be sent');
      }
      console.log(res.data);
    });

  }

});
