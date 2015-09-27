app.controller("FriendsCtrl", [
	"$scope",
	"Friends", 
	"Utility",
	function($scope, Friends, Utility) {

		Friends.get().then(function(data){
			console.log(data);
			$scope.friends = data;
		});
		$scope.Utility = Utility;

	}
]);