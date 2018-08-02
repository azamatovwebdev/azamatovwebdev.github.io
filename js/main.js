$(".facebook").hover(function() {
    $(".social .facebook svg path").css("fill", "#f4f4f4");
})
$(".facebook").mouseleave(function() {
    $(".social .facebook svg path").css("fill", "#cdcdcd");
})
$(".instagram").hover(function() {
    $(".social .instagram svg path").css("fill", "#f4f4f4");
})
$(".instagram").mouseleave(function() {
    $(".social .instagram svg path").css("fill", "#cdcdcd");
})
$(".twitter").hover(function() {
    $(".social .twitter svg path").css("fill", "#f4f4f4");
})
$(".twitter").mouseleave(function() {
    $(".social .twitter svg path").css("fill", "#cdcdcd");
})
$(".main-nav .contacts").on("click", function() {
    $(this).css("border-bottom", "8px solid #1A1A1A");
    $(".main-nav .main").css("border-bottom", "8px solid white");  
})
$(".main-nav .main").on("click", function() {
    $(this).css("border-bottom", "8px solid #1A1A1A");
    $(".main-nav .contacts").css("border-bottom", "8px solid white");  
})
$(".menu-btn").on("click", function() {
    $(".menu1").toggleClass("menu-active1");
    
    $(".menu2").toggleClass("menu-active2");
    
    $(".menu3").toggleClass("menu-active3");
})