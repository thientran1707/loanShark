app.factory("Utility", function(){

	return {

		parseDate: function(date) {
			date = new Date(date);
			console.log(date);
			return date.toLocaleDateString();
		}

	};

});