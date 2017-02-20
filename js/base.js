$(function() {
	$('#education > pre').load('data/v1/education.json');
	$('#work > pre').load('data/v1/experience.json');

	$('#banner > a').click(function() {
		var sectionId = $(this).attr('data-link');
		$('section').addClass('hide');
		$('#' + sectionId).removeClass('hide');
	});        
});