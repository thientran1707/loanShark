app.factory("Message", [
	"$http",
	"$q",
	function($http, $q) {

		return {
	    sendMessage: function(number, item) {
	    	var deferred = $q.defer();
	    	var message = "Please return my stuff :(";
	      if (item !== "all") {
	      	message = "Please return " + item + " ASAP :{";
	      }
	      $http.post("http://localhost:3000/users/sendMessage", {number: number, content: message})
	        .success(function(data){
	          deferred.resolve();
	        });
	      return deferred.promise;
	    }		
		}

	}
]);