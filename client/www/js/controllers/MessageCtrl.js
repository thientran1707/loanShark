app.controller("MessageCtrl", [
  "$http",
  "$scope",
  "$stateParams",
  function($http, $scope, $stateParams) {

    $scope.message = {number: '', content: ''};
    debugger;

    $scope.sendMessage = function() {
      console.log('making a post request', $scope.message);
      $http.post("http://localhost:3000/users/sendMessage", $scope.message)
        .success(function(data){
          console.log('text successfully sent', data);
        });
    };


  }
]);
