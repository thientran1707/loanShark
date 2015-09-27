app.controller("AddTransactionCtrl", [
	"$scope",
	"$stateParams",
	"$http",
	"Session",
	function($scope, $stateParams, $http, Session) {

		$http.get("http://localhost:3000/api/items").success(function(data){
			$scope.items = data;
		});

		$scope.timePicker = {
			callback: function(val) {
				console.log(val);
				$scope.user.time = val;
			}
		};

	}
]);