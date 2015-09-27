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
			},

			getCurrentId: function() {
				return "560783443deb8b9527925c7c";
			}

		}


	}
]);