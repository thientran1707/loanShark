app.controller("ProfileCtrl", [
	"$scope",
	"Friends",
	"$stateParams",
	"$ionicPopup",
	'$http',
	function($scope, Friends, $stateParams, $ionicPopup, $http) {

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

		$scope.updateUserTest = function() {
			console.log('testing');
			$http.get('http://localhost:3000/users/getInfo').success(function(data) {
				console.log('the data is ', data);
			});
		};

		$scope.updateUserTest();

	}
]);
