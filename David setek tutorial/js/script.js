(function($){
    $(function(){

    /* scroll to sections */
    $(".jq--scroll-our-pizza").click(function(){
      $("html, body").animate({ scrollTop: $(".jq--our-pizza").offset().top },1000);
    });

    $(".jq--scroll-about-pizza").click(function () {
      $("html,body").animate(
        { scrollTop: $(".jq--about-pizza").offset().top },1000);
    });

    $(".jq--scroll-references").click(function () {
      $("html,body").animate(
        { scrollTop: $(".jq--references").offset().top },
        1000
      );
    });

    $(".jq--scroll-photogallery").click(function () {
      $("html,body").animate(
        { scrollTop: $(".jq--photogallery").offset().top },
        1000
      );
    });

    $(".jq--scroll-contact-form").click(function () {
      $("html,body").animate(
        { scrollTop: $(".jq--contact-form").offset().top },
        1000
      );
    });
        /* scroll to sections buttons */
        $(".jq--scroll-button-first").click(function () {
            $("html,body").animate(
              { scrollTop: $(".jq--photogallery").offset().top },
              1000
            );
          });

          $(".jq--scroll-button-second").click(function () {
            $("html,body").animate(
              { scrollTop: $(".jq--contact-form").offset().top },
              1000
            );
          });

          /** Mobile navigation */
          $(".jq--nav-icon").click(function(){
              $(".nav-background").slideToggle();
              $(".mobile-nav-back").fadeToggle();
              $("nav ul").fadeToggle();
  });
})(jQuery)});
