$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - $('#nav-color').height()
    }, 500);
    return false;
});