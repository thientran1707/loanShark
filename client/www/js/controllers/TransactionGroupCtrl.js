/*
 * show transaction group
 */

app.controller('TransactionGroupCtrl', [
	"$scope",
	"$stateParams",
	"$q",
	"Session",
	"$http",
	"Message",
	"$ionicPopup",
	function($scope, $stateParams, $q, Session, $http, Message, $ionicPopup) {

		console.log($stateParams.transactionItem);

		var id = Session.getCurrentId();
		var borrower = JSON.parse($stateParams.transactionItem);

		var deferred = $q.defer();
		$http.get("http://localhost:3000/api/users/borrow/" + id + "/" + borrower._id)
			.success(function(data){
			deferred.resolve(data);
		});

		$scope.name = borrower.userName;
		$scope.items = new Object();
		deferred.promise.then(function(items) {
			console.log(items);

			_.each(items, function(item, index) {
				$scope.items[index] = item;
			});
		});

		// slightly different show item info
		$scope.showItemInfo = function(item) {
			return item.name;
		};

		$scope.sendMessage = function(item) {
			Message.sendMessage(borrower.phone, item.name).then(function(){
				$ionicPopup.alert({
			     title: 'Text sent successfully!',
			     template: 'Message sent!'
			   });				
			});
		};
	}
]);