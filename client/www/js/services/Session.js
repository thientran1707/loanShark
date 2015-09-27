app.factory("Session", [
	"$http",
	function($http){

		var session = {},
				online = false;

		return {

			isLoggedIn: function() {
				return online;
			},

			login: function(object) {
				online = true;
				session = object;
			},

			logOut: function() {
				online = false;
			}

		}


	}
]);