$(document).ready(function() {
    $('body').backstretch("img/background.jpg");

    // Preloader effects
    var $preloader = $('#page-preloader'),
    $spinner = $preloader.find('.spinner-loader');
    $( window ).on('load', function() {
      $spinner.fadeOut();
      $preloader.delay(500).fadeOut('slow');
      window.scrollTo( 0, 0 );
    });
    // Preloader effects end
});

$(document).on("click", ".change-footer",function() {
  $('#footer-content').html('Ngàn yêu thương từ 18yolol <i class="fa fa-heart" aria-hidden="true"></i>')
});
