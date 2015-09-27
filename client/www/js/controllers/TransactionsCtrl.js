/*
 * convert transaction logic to item logic
 */
app.controller('TransactionsCtrl', [
	"$scope",
	"$stateParams",
	"Transactions",
	function($scope, $stateParams, Transactions) {

		$scope.isShowItemTimeView = true;


		// get both TimeView data and GroupView data at once
		function getItem(Transactions, state) {
			var i = 0;

			$scope.itemsTimeView = new Object();
			$scope.itemsGroupView = new Object();
			_.each(Transactions.get(), function(transaction, index) {
				$scope.itemsGroupView[i] = transaction;
				_.each(transaction.items, function(item, index) {
					item.id = i;
					item.hostname = transaction.name;
					$scope.itemsTimeView[i] = item;
					i = i + 1;
				});
			});
		}

		getItem(Transactions, $stateParams);

		$scope.doShowItemTimeView = function() {
			return $scope.isShowItemTimeView == true;
		}

		$scope.doShowItemGroupView = function() {
			return $scope.isShowItemTimeView == false;
		}

		$scope.showItemTimeView = function(item) {
			return item.hostname + ": " + item.name + "," + item.category;
		}

		$scope.showItemGroupView = function(item) {
			return item.name + ": " + item.items.length;
		}

		$scope.switchView = function() {
			if ($scope.isShowItemTimeView == true) {
				$scope.isShowItemTimeView = false;
			} else {
				$scope.isShowItemTimeView = true;
			}
		}

		$scope.addTransaction = function() {
			// placeholder for add button
		}
	}
]);

