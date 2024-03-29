


// 브라우저 화면 확대 및 축소를 완전히 막는 스크립트
document.addEventListener('keydown', function (event) {
    // Ctrl 키 (Windows) 또는 Command 키 (Mac)와 + 또는 - 키가 동시에 눌려있는 경우
    if ((event.ctrlKey || event.metaKey) && (event.key === '+' || event.key === '-')) {
        event.preventDefault(); // 이벤트의 기본 동작을 막음
    }
});

// 마우스 휠로의 화면 조절을 막는 스크립트
document.addEventListener('wheel', function (event) {
    if (event.ctrlKey || event.metaKey) {
        event.preventDefault(); // 이벤트의 기본 동작을 막음
    }
}, { passive: false });


// $('header').load('include/header_js.html',function(){
//     $('.hambuger').click(function(){
//         $('.hambuger').toggleClass('on')   /* .addClass - 추가할때 /.removeClass - 제거할 떄 /.toggleClass - 두개 합친것*/
//         $('nav').toggleClass('on')   /* .addClass - 추가할때 /.removeClass - 제거할 떄 /.toggleClass - 두개 합친것*/
//     })
// });   /*result 불러올 자리 header.js 불러올 내용 */

$('.hambuger').click(function(){
    $('.hambuger').toggleClass('on')   /* .addClass - 추가할때 /.removeClass - 제거할 떄 /.toggleClass - 두개 합친것*/
    $('nav').toggleClass('on')   /* .addClass - 추가할때 /.removeClass - 제거할 떄 /.toggleClass - 두개 합친것*/
})