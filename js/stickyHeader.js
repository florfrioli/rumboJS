$(document).ready(function () {

  var fixedHeader = $('#fixedHeader');

  $(window).on('scroll', function () {

    var eventosOffsetTop = $('#eventos').offset().top;

    if ($(window).scrollTop() >= eventosOffsetTop) {

      fixedHeader.css('margin-top', 0);

    }else if ($(window).scrollTop() <= eventosOffsetTop/2) {

      fixedHeader.css('margin-top', '-68px');

    }

  })


});
