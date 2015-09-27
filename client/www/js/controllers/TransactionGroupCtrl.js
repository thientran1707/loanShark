/*
 * show transaction group
 */

app.controller('TransactionGroupCtrl', [
	"$scope",
	"$stateParams",
	function($scope, $stateParams) {

		console.log($stateParams.transactionItem);

		var object = JSON.parse($stateParams.transactionItem);
		$scope.name = object.name;
		$scope.items = new Object();
		_.each(object.items, function(item, index) {
			$scope.items[index] = item;
		});

		// slightly different show item info
		$scope.showItemInfo = function(item) {
			return item.name + "," + item.category;
		};
	}
]);