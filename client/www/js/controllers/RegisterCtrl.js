app.controller("RegisterCtrl", [
	"$http",
	"Session",
	"$scope",
	function($http, Session, $scope) {

		$scope.registerUser = function(user) {
      $http.post("http://localhost:3000/users/signup", user)
        .success(function(data){
          Session.login(user);
          console.log("i am in");
        });
		};


	}
]);
