$(function() {
	var baseRoute = 'https://rlgeb.github.io/data/v1/'


	// Load Education
	$.get({
		url: baseRoute + 'education.json',
	       	done: function(data) {
			console.log('hitting done');
			$('#education').html(data);
	       	},
		fail: function(data) {
		      alert('Failed to load education data');
	      }
	});
	/*
	// Load Work Experience
	$.ajax({
	       method: 'GET',
	       url: baseRoute + 'experience.json',
	       success: function(data) {
		       	var experienceSection = $('#work')
			
		       	return;
	       } 
       });
*/
	$('#banner > a').click(function() {
		var sectionId = $(this).attr('data-link');
		$('section').addClass('hide');
		$('#' + sectionId).removeClass('hide');
	});        
});
