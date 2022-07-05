// A $( document ).ready() block.
$(document).ready(function() {

    $(".loader-wrapper").animate({
        '-webkit-border-radius': '0 37px'
    }, 300);
    $(".loader-wrapper").delay(1007).animate({
        top: '-110%'
    }, 1500);

});