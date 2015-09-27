app.controller("BorrowerCtrl", [
	"$scope",
	"$stateParams",
	"$http",
	function($scope, $stateParams, $http) {

		$scope.timePicker = {
			callback: function(val) {
				console.log(val);
				$scope.user.time = val;
			}
		};

	}
]);