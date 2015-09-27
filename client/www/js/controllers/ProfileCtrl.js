app.controller("ProfileCtrl", [
	"$scope",
	"Friends",
	"$stateParams",
	"$ionicPopup",
	function($scope, Friends, $stateParams, $ionicPopup) {

		$scope.updateUser = function(user) {
			Friends.update(user).then(function(data){
				 // An alert dialog
			   $ionicPopup.alert({
			     title: 'User updated successfully!'
			   });
			   alertPopup.then(function(res) {
			     $("body").removeClass("popup-open");
			     $(".backdrop").css("visibility", "hidden");
			     $(".popup-container").remove();
			   });			
			});
		};	

	}
]);