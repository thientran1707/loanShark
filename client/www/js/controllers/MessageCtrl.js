app.controller("MessageCtrl", [
  "$http",
  "$scope",
  function($http, $scope) {

    $scope.message = {number: '', content: ''};

    $scope.sendMessage = function() {
      console.log('making a post request', $scope.message);
      $http.post("http://localhost:3000/users/sendMessage", $scope.message)
        .success(function(data){
          console.log('text successfully sent', data);
        });
    };


  }
]);
