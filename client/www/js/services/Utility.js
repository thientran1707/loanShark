app.factory("Utility", function(){

	return {

		parseDate: function(date) {
			date = new Date(date);
			return date.toLocaleDateString();
		}

	};

});