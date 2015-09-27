/*
 * convert transaction logic to item logic
 */
app.controller('TransactionsCtrl', [
	"$scope",
	"$stateParams",
	"Transactions",
	function($scope, $stateParams, Transactions) {

		function getItem(Transactions, state) {
			var i = 0;

			$scope.items = new Object();
			_.each(Transactions.get(), function(transaction, index) {
				_.each(transaction.items, function(item, index) {
					item.id = i;
					item.hostname = transaction.name;
					$scope.items[i] = item;
					i = i + 1;
				});
			});
		}

		getItem(Transactions, $stateParams);

		$scope.showItem = function(item) {
			return item.hostname + ":" + item.name + "," + item.category + "," + item.dateDue;
		}

		$scope.switchView = function() {

		};
	}
]);

