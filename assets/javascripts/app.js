$(function() {
  // Setup header link click animations
  $('header a').click(function(event){
    $target = $(event.target);
    if ($target.attr('href').indexOf('#') > -1) {
      $scrollTarget = $($target.attr('href').replace('/', ''));
      if ($scrollTarget.length > 0) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: $scrollTarget.offset().top
        }, 300);
      }
    }
  });
});
