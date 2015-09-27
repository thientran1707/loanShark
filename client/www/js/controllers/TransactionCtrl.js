/*
 * show transaction info
 */

app.controller('TransactionCtrl', [
	"$scope",
	"$stateParams",
	function($scope, $stateParams) {

		console.log($stateParams);

		$scope.item = JSON.parse($stateParams.transactionId);
	}
]);