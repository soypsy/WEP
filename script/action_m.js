$('.hambuger').click(function(){
    $('.modal').stop().fadeToggle()
    $('nav').toggleClass("on")
    $(this).toggleClass("on")

});


$('.gnb li').click(function(){
    $('.lnb').stop().slideUp()
    $(this).children('.lnb').stop().slideToggle()
});

/*this 이것 (클릭한 li)  Toggle(반대것을 다시 스위치) show()  hidw()  */
//fadeIn() fadeOut()  fadeToggle()
//slideDown() slideDown()  slideToggle()
//addClass()   removeClass()   toggleClass()