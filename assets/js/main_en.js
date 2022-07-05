var today = new Date();
var curHr = today.getHours();

function toggleWelcomeEN() {
    setTimeout(function() {
        if (curHr < 12) {
            $(".landing__content--maintitle").text("Good Morning");
        } else if (curHr < 18) {
            $(".landing__content--maintitle").text("Good Afternoon");
        } else {
            $(".landing__content--maintitle").text("Good Night");
        }
    }, 1000);
}

toggleWelcomeEN();

function toggleLangVI() {
    $('.wrapper-menu').click();
    $(".loader-wrapper").animate({
        top: '0'
    }, 1000);

    setTimeout(function() {
        window.history.replaceState('pagevi', 'etylix.', '/vi');
    }, 2700);


    setTimeout(function() {
        window.location.replace("/vi");


    }, 2700);
}