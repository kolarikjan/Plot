function fixHomepageBanner() 
{
    if ($(window).width() > 1200) 
    {
        let windowWidth = $("body").width();
        let fromLeft = document.getElementById("owl-homepageBanner-pixelcheck").getBoundingClientRect().left;
        if ($('#owl-homepageBanner').length > 0) 
        {
            $("#owl-homepageBanner").css("width", windowWidth - fromLeft + "px");
        }
        else if ($('#subheader--image').length > 0)
        {
            $("#subheader--image").css("width", windowWidth - fromLeft + "px");
        }
    }
}
function fixLeftBanner()
{
    if ($(window).width() > 1650) 
    {
        let leftHeight = "88px " + $(".homepage-banner .owl-item img").height() + "px";
        $(".homepage-banner").css("background-size", leftHeight);
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
    
    // Fixing homepage left floating banner after we know banner height
    fixLeftBanner();

    // kalkulator app
    $(".kalkulace-input-clickable").click(function (e) {
        $(".kalkulace-box").removeClass("active");
        if ($(this).closest(".kalkulace-box").hasClass("active")) 
        {
            $(this).closest(".kalkulace-box").removeClass("active");
            $(this).children("input[type='radio']").removeAttr("checked");
        }
        else
        {
            $(this).closest(".kalkulace-box").addClass("active");
            $(this).children("input[type='radio']").attr("checked", "");
        }
    });

    // kalkulator - add gate
    $(".kalkulace-content-add").click(function (e) { 
        e.preventDefault();
        let row = $(".kalkulace-content-add-content").html();
        $(this).closest(".kalkulace-content").children(".kalkulace-rows").append(row);
    });

});
$(window).resize(function () { 
    fixHomepageBanner();
    setTimeout(function(){ 
        fixLeftBanner();
    }, 250);
});
