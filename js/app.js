//start jquery area
$(document).ready(function(){
    $("#banner_carousel").owlCarousel({
        items :1,
        loop : true,
        dots :false,
        //autoplay :true
    });

    $(".product_edit_btn").click(function(){
        console.log($(this));
        $(this).toggleClass("active");
        $(this).partent();
        console.log($(this).partent());
        console.log($(this).partent());
    })
})

//end jquery area
