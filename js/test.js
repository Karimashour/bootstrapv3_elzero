$(document).ready(function(){
    //nice scroll 

    $(".carousel").carousel({
        interval:5000
    });
    //show color option div when click on the gear
    $(".gear-check").click(function(){
        $(".color-option").fadeToggle()
    });
    //change theme color on click
    var colorli=$(".color-option ul li");
    colorli
    .eq(0).css("backgroundColor","#E41b17").end()
    .eq(1).css("backgroundColor","#0c3dbb").end()
    .eq(2).css("backgroundColor","#3fd60e").end()
    .eq(3).css("backgroundColor","#f1db0f");
    colorli.click(function(){
        $("link[href*='_theme']").attr('href',$(this).attr("data-value"));
    });
});
//loading screen
window.onload=function()
{
    $("body").css("overflow","auto");
    $(".overlay .sk-cube-grid").fadeOut(2000,function(){
        $(this).parent().fadeOut(2000,function(){
            $(this).remove();
        });
    });
    var scrollbut=$("#scroll-top");
    $(Window).scroll(function(){
        ($(this).scrollTop()>=700)?scrollbut.fadeIn(1000):scrollbut.fadeOut(1000);
    });
    scrollbut.click(function(){
        $("html,body").animate({
            scrollTop:0,
        },600)
    });
};














