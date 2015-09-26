app.factory("Transactions", [
	"$http",
	"Config",
	function($http, Config) {

		function getMock() {
			return [
				{ name: "Jake Sam", 
					id: 1, 
					items: [
						{id: 1, name: "Money for Game", category: "Money", dateDue: Date()},
						{id: 2, name: "Laundry", category: "Clothes", dateDue: Date()}
					]
				},
				{ name: "Ashley Gomez", 
					id: 1, 
					items: [
						{id: 1, name: "Computer", category: "Electronics", dateDue: Date()},
						{id: 2, name: "Hat", category: "Clothes", dateDue: Date()}
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