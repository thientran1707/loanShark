app.controller("NewTransactionCtrl", [
	"$scope",
	"$stateParams",
	"$http",
	"Session",
	function($scope, $stateParams, $http, Session) {

		$scope.timePicker = {
			callback: function(val) {
				console.log(val);
				$scope.user.time = val;
			}
		};

	}
]);