app.factory("Transactions", [
	"$http",
	"Config",
	"$q",
	"Session",
	function($http, Config, $q, Session) {

		function getMock() {
			return [
				{ name: "Jake Sam", 
					id: 1, 
					items: [
						{id: 1, name: "Money for Game", category: "Money", dueDate: Date(), borrowDate: Date()},
						{id: 2, name: "Laundry", category: "Clothes", dueDate: Date(), borrowDate: Date()}
					]
				},
				{ name: "Ashley Gomez", 
					id: 1, 
					items: [
						{id: 1, name: "Computer", category: "Electronics", dueDate: Date(), borrowDate: Date()},
						{id: 2, name: "Hat", category: "Clothes", dueDate: Date(), borrowDate: Date()}
					]
				},				
			];
		}

		return {

			get: function(type) {
				var returnObject = new Object();
				var deferred = $q.defer();
				if (Config.mock) {
					// get mock data
					return deferred.resolve(getMock());
				} else {
					// do api call
					var id = Session.getCurrentId();
					if (type == "borrowers") {
						$http.get("http://localhost:3000/api/users/getBorrowers/" + id)
							.success(function(data){
								deferred.resolve(data);
							});
					} else {
						// TODO: do not use right now
						$http.get("http://localhost:3000/api/users/getLenders/" + id)
							.success(function(data){
								deferred.resolve(data);
							});
					}
					return deferred.promise;
				}
			}

		};
	}
]);