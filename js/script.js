/* Global $, alert, console */

$(function() {

    "use strict";

    // Adjust Header Height.

    var myHeader = $(".header"),
        mySlider = $(".slider");

    myHeader.height($(window).height());

    $(window).resize(function() {

        myHeader.height($(window).height());

        // Adjust Bx-slider Items Center 

        mySlider.each(function() {

            $(this).css("paddingTop", ($(window).height() - $(".slider div").height()) / 2);
        })
    });

    // Links Add Active Class.

    $(".links li a").on("click", function() {

        $(this).parent().addClass("active").siblings().removeClass("active");

    });

    // Adjust Bx-slider Items Center 

    mySlider.each(function() {

        $(this).css("paddingTop", ($(window).height() - $(".slider div").height()) / 2);
    });

    mySlider.bxSlider({

        pager: false
    });

    $(".links li a").on("click", function() {

        $("html, body").animate({

            scrollTop: $("#" + $(this).data("value")).offset().top

        }, 1000)
    });

    // Our Auto Slider Code.

    (function autoSlider() {

        $(".team-slider .active").each(function() {

            if (!$(this).is(":last-child")) {

                $(this).delay(3000).fadeOut(1000, function() {

                    $(this).removeClass("active").next().addClass("active").fadeIn();

                    autoSlider();
                });

            } else {

                $(this).delay(3000).fadeOut(1000, function() {

                    $(this).removeClass("active");

                    $(".team-slider div").eq(0).addClass("active").fadeIn();

                    autoSlider();
                });
            };

        });

    }());

    // Trigger Mixitup

    $(".containMix").mixItUp()

    $(".shuffle li").on("click", function() {

        $(this).addClass("selected").siblings().removeClass("selected");

    })

    // Trigger Nice scroll

    $("body").niceScroll({
        cursorcolor: "#1abc9c",
        cursorwidth: "10px"
    });

});