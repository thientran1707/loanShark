app.controller("FriendsCtrl", [
	"$scope",
	"Friends", 
	"Utility",
	"Message",
	"$ionicPopup",
	function($scope, Friends, Utility, Message, $ionicPopup) {

		Friends.get().then(function(data){
			console.log(data);
			$scope.friends = data;
		});
		$scope.Utility = Utility;

		$scope.sendMessage = function(friend) {
			Message.sendMessage(friend.phone, "all").then(function(){
				$ionicPopup.alert({
			     title: 'Text sent successfully!',
			     template: 'Message sent!'
			   });			
			});
		};

	}
]);