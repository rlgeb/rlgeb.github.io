$(function() {
  if (window.innerWidth<=800) {
    // Remove all non-essential sections
    $('#story').remove();
    $('#photos').remove();

    // Remove nav (instead use section headers)
    $('#banner').remove();

    $('section').each(function () {
      $(this).css('height', 'auto');

      const secionId = $(this).attr('id');
      if (secionId === 'home') {
        const homeHeight =  parseInt(window.innerHeight) - parseInt($(this).css('height').slice(0, $(this).css('height').indexOf('px')));
        $(this).css('padding-top', homeHeight + 'px');
        $(this).append('<p>You\'re viewing the abbreviated mobile friendly site.</p><p>Scroll down for more info!</p>');
      } else {
        $(this).css('padding-top', '10px');
        $(this).prepend('<h2>' + secionId.charAt(0).toUpperCase() + secionId.slice(1) + '</h2>');
      }
     });
  }

});
