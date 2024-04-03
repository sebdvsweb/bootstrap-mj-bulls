// Eteindre le son de la vidéo à la fermeture du Modal
$(document).ready(function () {
  $(".modal").each(function () {
    var src = $(this).find("iframe").attr("src");

    $(this).on("click", function () {
      $(this).find("iframe").attr("src", "");
      $(this).find("iframe").attr("src", src);
    });
  });
});

// Ajouter un offset de 120px au scroll
jQuery(function ($) {
  $('a[href*="#"]:not([href="#"])').click(function () {
    var target = $(this.hash);
    $("html,body")
      .stop()
      .animate(
        {
          scrollTop: target.offset().top - 120,
        },
        "linear"
      );
  });
  if (location.hash) {
    var id = $(location.hash);
  }
  $(window).on("load", function () {
    if (location.hash) {
      $("html,body").animate({ scrollTop: id.offset().top - 120 }, "linear");
    }
  });
});
