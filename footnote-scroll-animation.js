$("sup, sub").click(function() {
    $('html, body').animate({
        scrollTop: $("footnote").offset().top + -100
    }, 1500);

    $('html, body').animate({
        scrollTop: $("footnote").offset().top + -101
    }, 1);
});