var winH = $(window).height();

$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > winH - 1) {
      $(".navbar").addClass("solid");
      $(".nav").addClass("solid");
    } else {
      $(".navbar").removeClass("solid");
      $(".nav").addClass("solid");
    }
  });
});
