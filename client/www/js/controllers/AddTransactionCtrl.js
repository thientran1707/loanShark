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

		function parseTimeDate(transaction, type) {
			var date = transaction[type + "Date"];
			var time = transaction[type + "Time"];
			date.setHours(time.getHours());
			date.setMinutes(time.getMinutes());
			date.setMilliseconds(time.getMilliseconds());
			return date;
		}

		$scope.addTransaction = function(transaction) {
			transaction.owner = Session.getCurrentId();
			transaction.dueDate = parseTimeDate(transaction, "due");
			transaction.reminderDate = parseTimeDate(transaction, "remind");
			$http.post("http://localhost:3000/api/loans", transaction).success(function(data){
				$state.go("app.transactions");
			});
		};

	}
]);