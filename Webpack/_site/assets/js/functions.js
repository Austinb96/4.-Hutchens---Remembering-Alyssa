$(document).ready(function(){
    $(".hamburger").click(function(){
        $(".hamburger").toggleClass("open");
        $(".main").toggleClass("mainopen");
    });
    $(".giving1 img").click(function(){
        $(".selection1").toggleClass('hide');
        $(".selection2, .selection3").addClass('hide');
        if (".selection2").hasClass('hide') || (".selection3").hasClass('hide')  {
        }
        else {
          $(".selectioncontent").toggleClass('hide');
        };
        $("#triangle-up1").toggleClass('hidet');
        $("#triangle-up2, #triangle-up3").addClass('hidet');
    });
    $(".giving2 img").click(function(){
        $(".selection2").toggleClass('hide');
        $(".selection1, .selection3").addClass('hide');
        if (".selection1").hasClass('hide') || (".selection3").hasClass('hide')  {
        }
        else {
          $(".selectioncontent").toggleClass('hide');
        };
        $("#triangle-up2").toggleClass('hidet');
        $("#triangle-up1, #triangle-up3").addClass('hidet');
    });
});
