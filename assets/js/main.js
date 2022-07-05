const menu = document.querySelector(".menu");
const menulang = document.querySelector(".menu__lang");
const menuItems = document.querySelectorAll(".menuItem");
const menuItemsLang = document.querySelectorAll(".menuItemLang");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");
const wld = document.querySelector(".loader-wrapper");

function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        wrapperMenu.classList.remove('open');

        setTimeout(function() {
            menulang.classList.remove("showMenu");
        }, 120);

    } else {
        menu.classList.add("showMenu");

        setTimeout(function() {
            menulang.classList.add("showMenu");
        }, 120);

    }
}

var wrapperMenu = document.querySelector('.wrapper-menu');
wrapperMenu.addEventListener('click', function() {
    wrapperMenu.classList.toggle('open');
    toggleMenu();
})

menuItems.forEach(
    function(menuItem) {
        menuItem.addEventListener("click", toggleMenu);
    }
)

$.fn.slideFadeToggle = function(speed, easing, callback) {
    return this.animate({
        opacity: 'toggle',
        bottom: '0'
    }, 750, easing, callback);
};
$(".down").delay(3500).slideFadeToggle();
$('.down')
    .delay(1100)
    .queue(function(next) {
        $(this).css('bottom', '11px');
        next();
    });
$(window).on("scroll", function() {
    var scrollPos = $(window).scrollTop();
    if (scrollPos <= 110) {
        $(".down").css("bottom", "11px");
        $(".hamburger, .menu, .menu__lang").css("margin-right", "-27%");
    } else {
        $(".down").css("bottom", "-10%");
        $(".hamburger, .menu, .menu__lang").css("margin-right", "");
    }
});

$(window).on('load', function() {
    $("body").removeClass("preload");
});

$('#landing').waypoint(function() {
    $('.menuItem').removeClass("active");
    $('#ld').addClass("active");
}, {
    offset: '-25%'
})
$('#aboutme').waypoint(function() {
    $('.menuItem').removeClass("active");
    $('#am').addClass("active");
}, {
    offset: '25%'
})
$('#project').waypoint(function() {
    $('.menuItem').removeClass("active");
    $('#pj').addClass("active");
}, {
    offset: '25%'
})
$('#contact').waypoint(function() {
    $('.menuItem').removeClass("active");
    $('#ct').addClass("active");
}, {
    offset: '75%'
})

$(window).on("load", function() {
    $(window).scroll(function() {
        var windowBottom = $(this).scrollTop() + 150 + $(this).innerHeight();
        $(".fade").each(function() {
            /* Check the location of each desired element */
            var objectBottom = $(this).offset().top + $(this).outerHeight();

            /* If the element is completely within bounds of the window, fade it in */
            if (objectBottom < windowBottom) { //object comes into view (scrolling down)
                if ($(this).css("opacity") == 0) {
                    $(this).fadeTo(700, 1);
                }
            } else { //object goes out of view (scrolling up)

            }
        });
    }).scroll(); //invoke scroll-handler on page-load
});