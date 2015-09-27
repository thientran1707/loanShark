app.factory("Friends", [
	"$http",
	"Config",
	"$q",
	"Session",
	function($http, Config, $q, Session) {

		function getMock() {
			return [
				{name: "Sam Test", id: 1, date: Date(), items: 2},
				{name: "Jack Man", id: 2, date: Date(), items: 4}
			];
		}

		function removeCurrentUser(friends) {
			var id = Session.getCurrentId();
			for( var i = 0; i < friends.length; i++ ) {
				if (friends[i]._id === id) {
					friends.splice(i, 1);
				}
			}
			return friends;
		}

		return {

			get: function() {
				var deferred = $q.defer();
				if (Config.mock) {
					return getMock();
				} else {
					$http.get("http://localhost:3000/api/users")
						.success(function(data){
							data = removeCurrentUser(data);
							deferred.resolve(data);
						});
				}	
				return deferred.promise;
			},

			update: function(user) {
				var deferred = $q.defer();

				return deferred.promise;
			},

		};

	}
]);