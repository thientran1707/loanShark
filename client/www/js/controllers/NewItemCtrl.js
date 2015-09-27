app.controller("NewItemCtrl", [
	"$http",
	"$state",
	"$scope",
	function($http, $state, $scope){
  	
  	$scope.item = {};

  	$scope.addItem = function(item) {
			$http.post("http://localhost:3000/api/items", item).success(function(data){
				$state.go("app.items");
			});
  	};

	}
]);