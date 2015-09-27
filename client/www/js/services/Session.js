app.factory("Session", [
	"$http",
	function($http){

		var session = {};

		return {

			isLoggedIn: function() {
				return sessionStorage.session;
			},

			login: function(object) {
				sessionStorage.session = JSON.stringify(object);
			},

			logOut: function() {
				delete sessionStorage.session;
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