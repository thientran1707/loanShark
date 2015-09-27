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
				console.log(object);
				sessionStorage.session = JSON.stringify(object);
			},

			logOut: function() {
				online = false;
			},

			getSession: function() {
				if (sessionStorage.session) {
					return JSON.parse(sessionStorage.session);
				}
				return {};
			},

			getCurrentId: function() {
				return this.getSession()._id;
			}

		}


	}
]);