$(function() {

	function getRandomUserIndex(usersCount) {
		return Math.floor(Math.random() * (usersCount));
	}

	function getUserHtml(name, email, catchPhrase) {
		return '<div id="userCard" class="col-md-4">' +
					'<div class="row">' +
						'<div class="col-md-3">' +
							'<img src="https://rlgeb.github.io/img/about/umich.jpg" height="200" width="200">' +
						'</div>' +
					'<div id="userText" class="col-md-3">' +
						'<div id="catchPhrase">' +
							catchPhrase +
						'</div>' +
						name + '<br>' +
						email +
					'</div>' +
				'</div>';

	}


	$.get("https://jsonplaceholder.typicode.com/users", function (data) {
		for (i=0; i<3; i++) {
			var user = data[getRandomUserIndex(data.length)];
			var userHTML = getUserHtml(user.name, user.email, user.company.catchPhrase);
			$('#userCards').append(userHTML);
		}
	});



});