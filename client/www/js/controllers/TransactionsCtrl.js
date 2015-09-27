/*
 * convert transaction logic to item logic
 */
app.controller('TransactionsCtrl', [
	"$scope",
	"$stateParams",
	"Transactions",
	"$state",
	function($scope, $stateParams, Transactions, $state) {

		$scope.isShowItemTimeView = true;
		$scope.itemsTimeView = new Object();
		$scope.itemsGroupView = new Object();
		$scope.type = $stateParams.type;

		// get both TimeView data and GroupView data at once
		function getItem(Transactions, state) {
			var i = 0;
			_.each(Transactions.get($scope.type), function(transaction, index) {
				$scope.itemsGroupView[i] = transaction;
				_.each(transaction.items, function(item, index) {
					item.id = i;
					item.hostname = transaction.name;
					$scope.itemsTimeView[i] = item;
					i = i + 1;
				});
			});
		}

		function getAPIItems() {
			Transactions.get($scope.type).then(function(data){
				console.log(data);
				_.each(Transactions.get(), function(transaction, index) {
				$scope.itemsGroupView[index] = transaction;
					_.each(transaction.items, function(item, index) {
						item.id = index;
						item.hostname = transaction.name;
						$scope.itemsTimeView[index] = item;
						console.log($scope.itemsTimeView);
						i = i + 1;
					});		
				});		
			});
		}

		// getItem(Transactions, $stateParams);
		getAPIItems();

		$scope.doShowItemTimeView = function() {
			return $scope.isShowItemTimeView == true;
		};

		$scope.doShowItemGroupView = function() {
			return $scope.isShowItemTimeView == false;
		};

		$scope.showItemTimeView = function(item) {
			return item.hostname + ": " + item.name + "," + item.category;
		};

		$scope.showItemGroupView = function(item) {
			return item.name + ": " + item.items.length;
		};

		$scope.switchView = function() {
			if ($scope.isShowItemTimeView == true) {
				$scope.isShowItemTimeView = false;
			} else {
				$scope.isShowItemTimeView = true;
			}
		};

		$scope.switchTest = function() {
			$state.go("app.add_transaction", {type: $scope.type});
		};

	}

]);

