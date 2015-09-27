app.controller("AddTransactionCtrl", [
	"$scope",
	"$stateParams",
	"$http",
	"Session",
	"Friends",
	"$state",
	function($scope, $stateParams, $http, Session, Friends, $state) {

		Friends.get().then(function(data){
			$scope.friends = data;
		});

		$http.get("http://localhost:3000/api/items").success(function(data){
			$scope.items = data;
		});

		function parseTimeDate(transaction) {
			debugger;
		}

		$scope.addTransaction = function(transaction) {
			transaction.dueDate = parseTimeDate(transaction, "due");
			transaction.reminderDate = parseTimeDate(transaction, "remind");
			$http.post("http://localhost:3000/api/loans", transaction).success(function(data){
				$state.go("app.transactions");
			});
		};

	}
]);