// Coded By Sreeju
$(document).ready(function () {
    if ($('#wrapper').hasClass('skewed')) skew = 1000;

    $("#wrapper").mousemove((event) => {
        delta = (event.clientX - window.innerWidth / 2) * 0.5;
        value = event.clientX + delta;
        $(".handle").css("left", value + 'px');
        $(".top").css("width", value + skew + 'px');
    });

});