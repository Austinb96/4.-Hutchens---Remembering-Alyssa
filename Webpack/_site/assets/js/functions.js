$(document).ready(function(){
    $(".hamburger").click(function(){
        $(".hamburger").toggleClass("open");
        $(".main").toggleClass("mainopen");
    });
});
