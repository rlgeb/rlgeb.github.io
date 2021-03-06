$(function() {
	function generateResumeHeader(title, loc, start, end) {
		var header = '<div class="row resume-header">';
		header += '<span>' + title + ', <i>' + loc + '</i></span>';
		header += '<span class="resume-date">' + start + ' - ' + end + '</span>';
		header += '</div>';
		return header;
	}
	function generateCourseBullets(courses) {
		var bullets = '<ul>';
		for (var i=0; i<courses.length; i++) {
			var c = courses[i];
			bullets += '<li>' + c.name;
		        if (c.department || c.course_number) {
				bullets += ' (' + c.department + ' ' + c.course_number + ')';
			}
			bullets += '</li>';
		}
		bullets += '</ul>';
		return bullets;
	}
	var educationJsonElement = $('#education .json-formatted');
	var experienceJsonElement = $('#work .json-formatted');
	educationJsonElement.load('data/v1/education.json', function() {
		var educationJson = JSON.parse(educationJsonElement.text());
		var educationHtml = '';
		for (var i=0; i<educationJson.length; i++) {
			var edu = educationJson[i];
			educationHtml += generateResumeHeader(edu.name, edu.location, edu.start_date, edu.end_date);
			if (edu.notes) {
				educationHtml += '<span>' + edu.notes + '</span>';
			}
			educationHtml += generateCourseBullets(edu.courses);
		}
		$('#education .html-formatted').html(educationHtml);
	});
	experienceJsonElement.load('data/v1/experience.json', function() {
		var experienceJson = JSON.parse(experienceJsonElement.text());
		var experienceHtml = '';
		for (var i=0; i<experienceJson.length; i++) {
			var exp = experienceJson[i];
			experienceHtml += generateResumeHeader(exp.company_name, exp.location, exp.start_date, exp.end_date);
			experienceHtml += '<ul>';
			experienceHtml += '<li>' + exp.role + '</li>';
			if (exp.team) {
				experienceHtml += '<li>' + exp.team + '</li>';
			}
			experienceHtml += '</ul>';
		}
		$('#work .html-formatted').html(experienceHtml);
	});

	$('#banner > a').click(function() {
		var sectionId = $(this).attr('data-link');
		$('section').addClass('hide');
		$('#' + sectionId).removeClass('hide');
	});        
	$('.format-toggle').click(function() {
		var formatClass = $(this).attr('data-link');
		$('.format-option').addClass('hide')
		$('.' + formatClass).removeClass('hide');
	});
});

