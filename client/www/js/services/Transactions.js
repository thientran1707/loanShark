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
				var deferred = $q.defer();
				if (Config.mock) {
					// get mock data
					return deferred.resolve(getMock());
				} else {
					// do api call
					var id = Session.getCurrentId();
<<<<<<< HEAD
					if (type == "borrowers") {
						$http.get("http://localhost:3000/api/users/getBorrowers/" + id)
							.success(function(data){
								deferred.resolve(data);
							});
					} else {
						$http.get("http://localhost:3000/api/users/getLenders/" + id)
							.success(function(data){
								deferred.resolve(data);
							});
					}
					return deferred.promise;
=======
					$http.get("http://localhost:3000/api/users/getBorrowers/" + id)
						.success(function(data){
							console.log(data);
							deferred.resolve(data);
						});
>>>>>>> 6525fd0316b5b18e405fb609d4ad771063918182
				}
			}

		};
	}
]);