$(document).ready(function(){

    $('#slides').superslides({
        animation:'fade',
        play: 5000,
        pagination:false
    });

    var typed = new Typed(".typed", {
        strings: ["Software Engineer", "Full Stack Developer", "Math Instructional Coach"],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });
   
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });

    $('.chart').easyPieChart({
        easing: 'easeInOut',
        barColor: '#fff',
        trackColor: false,
        scaleColor: false,
        lineWidth: 4,
        size: 152,
        onStep: function(from, to, percent)
    });
});




