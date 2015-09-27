app.factory("Message", [
	"$http",
	function($http) {

		return {
	    sendMessage: function(number, item) {
	    	var message = "Please return my stuff :(";
	      if (item !== "all") {
	      	message = "Please return " + item + " ASAP :{";
	      }
	      $http.post("http://localhost:3000/users/sendMessage", {number: number, content: message})
	        .success(function(data){
	          console.log('text successfully sent', data);
	        });
	    }		
		}

	}
]);