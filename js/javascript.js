function fixHomepageBanner() {
    if ($(window).width() > 1200) {
        let windowWidth = $("body").width();
        let fromLeft = document.getElementById("owl-homepageBanner-pixelcheck").getBoundingClientRect().left;
        $("#owl-homepageBanner").css("width", windowWidth - fromLeft + "px");
    }
}

$(document).ready(function () {
    
    // Enable (init) Fancybox
    $(".fancybox").fancybox({
        'hideOnContentClick': true
    });

    // Fixing homepage banner before being initiated
    fixHomepageBanner();

    // Homepage banner
    $('#owl-homepageBanner').owlCarousel({
        center: true,
        items:1,
        loop:true,
        margin:1,
        nav:true,
        dots:true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        navText: ["<img src='img/banner-prev.png'>", "<img src='img/banner-next.png'>"]
    });

});
$(window).resize(function () { 
    fixHomepageBanner();
});
