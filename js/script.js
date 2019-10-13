$(document).ready(function() {
    // -----------------------------------------------------------------------
    $.each($('.navbar').find('.nav-link'), function() {
        $(this).toggleClass('active', window.location.pathname.indexOf($(this).find('a').attr('href')) > -1);
    }); 
    // -----------------------------------------------------------------------
});
