app.factory("Transactions", [
	"$http",
	"Config",
	function($http, Config) {

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

			get: function() {
				if (Config.mock) {
					// get mock data
					return getMock();
				} else {
					// do api call
				}
			}

		};

	}
]);