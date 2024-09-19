$(".answer").hide();
$('.list').click(function(){
    $(this).next().slideToggle()
    $(this).children(".turn_wrap").children().toggleClass('turn')
});