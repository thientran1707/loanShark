app.controller("FriendsCtrl", [
	"$scope",
	"Friends", 
	"Utility",
	function($scope, Friends, Utility) {

		$scope.friends = Friends.get();
		$scope.Utility = Utility;

	}
]);