$("ul#main-menu>li").mouseover(function() {
    $(".sub-menu").stop().slideDown();
});

$("ul#main-menu>li").mouseout(function() {
    $(".sub-menu").stop().slideUp();
});

// $(function() {
//     var $slider = $('.slider'),
//         $firstSlide = $slider.find('.s').first() // 첫번째 슬라이드
//         .stop(true).animate({
//             'opacity': 1
//         }, 200); // 첫번째 슬라이드만 보이게 하기

//     function PrevSlide() { // 이전버튼 함수
//         var $lastSlide = $slider.find('.s').last() //마지막 슬라이드
//             .prependTo($slider); //마지막 슬라이드를 맨 앞으로 보내기
//         $secondSlide = $slider.find('.s').eq(1)
//             //두 번째 슬라이드 구하기
//             .stop(true).animate({
//                 'opacity': 0
//             }, 400); //밀려난 두 번째 슬라이드는 fadeOut 시키고
//         $firstSlide = $slider.find('.s').first() //맨 처음 슬라이드 다시 구하기
//             .stop(true).animate({
//                 'opacity': 1
//             }, 400);
//         //새로 들어온 첫 번째 슬라이드는 fadeIn 시키기
//     }

//     function NextSlide() { // 다음 버튼 함수
//         $firstSlide = $slider.find('.s').first() // 첫 번째 슬라이드
//             .appendTo($slider); // 맨 마지막으로 보내기
//         var $lastSlide = $slider.find('.s').last() // 맨 마지막으로 보낸 슬라이드
//             .stop(true).animate({
//                 'opacity': 0
//             }, 400); // fadeOut시키기
//         $firstSlide = $slider.find('.s').first()
//             // 맨 처음 슬라이드
//             .stop(true).animate({
//                 'opacity': 1
//             }, 400);
//         // fadeIn 시키기
//     }


//     setInterval(NextSlide, 2000); //자동 슬라이드 설정

// });

setInterval(fnSlide, 1000);

function fnSlide() {
    
    $(".slider>img:first")
        .fadeOut(2000, function() {
            $(this).insertAfter(".slider>img:last");
        });

    $(".slider>img:nth-child(2)").fadeIn(2000);

}