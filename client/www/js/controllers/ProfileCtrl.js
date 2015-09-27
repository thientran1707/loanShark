app.controller("ProfileCtrl", [
	"$scope",
	"Friends",
	"$stateParams",
	"$ionicPopup",
	'$http',
	'Session',
	function($scope, Friends, $stateParams, $ionicPopup, $http, Session) {

		$scope.userInfo = {
			userName: 'khoa',
			password: 'phan',
			telephone: '14088240895',
			id: Session.getSession()._id,
		};

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
			console.log("session data is ", Session.getSession());
			$http.post('http://localhost:3000/users/updateInfo', $scope.userInfo).then(function(data) {
				console.log('data is data', data);
			});
		};

		$scope.updateUserTest();

	}
]);
