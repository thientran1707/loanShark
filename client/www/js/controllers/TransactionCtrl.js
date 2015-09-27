/*
 * show transaction info
 */

app.controller('TransactionCtrl', [
	"$location",
	"$scope",
	"$stateParams",
	"Utility",
	"Transaction",
	function($location, $scope, $stateParams, Utility) {

		console.log($stateParams);

		$scope.item = JSON.parse($stateParams.transactionItem);
		$scope.Utility = Utility;

		$scope.sendText = function() {
			$location.path("/app/message");
		};
	}
]);