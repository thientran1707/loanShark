/*
 * convert transaction logic to item logic
 */
app.controller('TransactionsCtrl', [
	"$scope",
	"Transactions",
	function($scope, Transactions) {

		_.each(Transactions.get(), function(transaction, index) {
			_.each(transaction.items, function(item, index) {

			});
		});

		$scope.transactions = Transactions.get();
		console.log($scope.transactions);

		$scope.listTransactions = function(transaction) {
			if (transaction.items.length == 1) {
				return transaction.name + ": " + showItem(transaction.items[0]);
			} else {
				return transaction.name + ": " + transaction.items.length + ' items';
			}
		};

		function showItem(item) {
			return item.name + "," + item.category + "," + item.dateDue;
		}
	}
]);

