app.factory("Friends", [
	"$http",
	"Config",
	function($http, Config) {

		function getMock() {
			return [
				{name: "Sam Test", id: 1, date: Date(), items: 2},
				{name: "Jack Man", id: 2, date: Date(), items: 4}
			];
		}

		return {

			get: function() {
				if (Config.mock) {
					return getMock();
				} else {

				}
			}

		};

	}
]);