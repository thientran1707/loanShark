app.controller("ItemsCtrl", [
	"$http",
	"$scope",
	"$state",
	function($http, $scope, $state){
  	
		$http.get("http://localhost:3000/api/items").success(function(data){
			$scope.items = data;
		});

		$scope.newItem = function() {
			$state.go("app.new_item");
		};
	}
]);