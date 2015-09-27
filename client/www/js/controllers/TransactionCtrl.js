/*
 * show transaction info
 */

app.controller('TransactionCtrl', [
	"$scope",
	"$stateParams",
	"Utility",
	function($scope, $stateParams, Utility) {

		console.log($stateParams);

		$scope.item = JSON.parse($stateParams.transactionItem);
		$scope.Utility = Utility;
	}
]);