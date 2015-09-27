app.factory("Friends", [
	"$http",
	"Config",
	"$q",
	function($http, Config, $q) {

		function getMock() {
			return [
				{name: "Sam Test", id: 1, date: Date(), items: 2},
				{name: "Jack Man", id: 2, date: Date(), items: 4}
			];
		}

		return {

			get: function() {
				var deferred = $q.defer();
				if (Config.mock) {
					return getMock();
				} else {
					$http.get("http://localhost:3000/api/users")
						.success(function(data){
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