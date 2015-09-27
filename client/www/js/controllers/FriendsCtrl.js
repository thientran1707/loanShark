app.controller("FriendsCtrl", [
	"$scope",
	"Friends", 
	"Utility",
	"Message",
	function($scope, Friends, Utility, Message) {

		Friends.get().then(function(data){
			console.log(data);
			$scope.friends = data;
		});
		$scope.Utility = Utility;

		$scope.sendMessage = function(friend) {
			Message.sendMessage(friend.phone, "all");
		};

	}
]);