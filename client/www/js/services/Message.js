app.factory("Message", [
	"$http",
	function($http) {

		return {
	    sendMessage: function(friend) {
	      console.log('making a post request', friend);
	      $http.post("http://localhost:3000/users/sendMessage", $scope.message)
	        .success(function(data){
	          console.log('text successfully sent', data);
	        });
	    };			
		}

	}
]);