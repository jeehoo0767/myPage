const name = document.querySelector("#name");
const btn = document.querySelector("#btn");
const form = document.querySelector("form");

btn.addEventListener("click", function () {
    form.submit();
})
// btn.addEventListener("click", function () {
//     const search = name.value;
//     window.open(`https:www.op.gg/summoner/userName=${name}`);
//     console.log(typeof search);
// })

// $(".header_logo img").mouseover(function () {
//     $(this).css({
//         "width": "300px",
//         "height": "300px",
//         "transition": "all 1s ease-in-out"
//     });
// });
// $(".header_logo img").mouseout(function () {
//     $(this).css({
//         "width": "200px",
//         "height": "200px",
//         "transition": "all 1s ease-in-out"
//     });
// });



//slide 함수
const SHOWING_CLASS = "showing";
const firstSlide = document.querySelector(".slider__item:first-child");
const lastSlide = document.querySelector(".slider__item:last-child");

function slide() {

    const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
    //            alert("currentSlide : " + currentSlide);

    if (currentSlide) { // 만약 현재 슬라이드라면
        currentSlide.classList.remove(SHOWING_CLASS); // 현재 슬라이드에서 SHOWING_CLASS를 제거한다
        const nextSlide = currentSlide.nextElementSibling; // 다음 슬라이드를 정의한다.

        if (nextSlide) { //만약 다음 슬라이드가 있다면
            nextSlide.classList.add(SHOWING_CLASS); //다음 슬라이드에 SHOWING_CLASS를 붙인다.
        } else { // 다음 슬라이드가 없다면 => 5번째 슬라이드라면(마지막 슬라이드라면)
            firstSlide.classList.add(SHOWING_CLASS); // 첫번째 슬라이드에 SHOWING_CLASS를 붙인다.
        }

    } else {
        firstSlide.classList.add(SHOWING_CLASS);
    }
}
slide();
setInterval(slide, 2000);
//slide함수

//검색기능구현
// const champion_Data = document.querySelectorAll(".champion_Box");
// const champion_Input = document.querySelector("#champion_Input");
// champion_Input.addEventListener('keyup', function () {
//     $.each(champion_Data, function (i, v) {
//         if (v.dataset.championName.indexOf(champion_Input.value) >= 0 || v.dataset.championNameChosung.indexOf(champion_Input.value) >= 0) {
//             v.classList.remove("hide");
//             v.classList.add("show");
//         }
//         else {
//             v.classList.remove("show");
//             v.classList.add("hide");
//         }
//     })
// })


const champion_Data = document.querySelectorAll(".champion_Box");
const champion_Input = document.querySelector("#champion_Input");
$("#champion_Input").keyup(function (event) {
    $.each(champion_Data, function(i, v){
        if(v.dataset.championName.indexOf(champion_Input.value)>=0 || v.dataset.championNameChosung.indexOf(champion_Input.value)>=0){
            v.classList.remove("hide");
            v.classList.add("show");
        }
        else{
            v.classList.remove("show");
            v.classList.add("hide");
        }
    })
})


// const champion_Data = document.querySelectorAll(".champion_Box");
// const champion_Input = document.querySelector("#champion_Input");
// $("#champion_Input").keyup(function () {
//     for (let i = 0; i < champion_Data.length; i++) {
        // let name_Cnt = 0;
        // for (let j = 0; j < champion_Data[i].dataset.championName.length; j++) {
        //     console.log(champion_Input.value)
        //     if (champion_Data[i].dataset.championName.charAt(j) == champion_Input.value) {
        //         name_Cnt++;
        //         continue;
        //     }
        // }
        // let chosung_Cnt = 0;
        // for (let k = 0; k < champion_Data[i].dataset.championNameChosung.length; k++) {
        //     console.log(champion_Input.value)
        //     if (champion_Data[i].dataset.championNameChosung.charAt(k) == champion_Input.value) {
        //         chosung_Cnt++;
        //         continue;
        //     }
        // }
        // if (chosung_Cnt > 0 || name_Cnt > 0) {
        //     champion_Data[i].style.display = "block";
        // }
        // // if (name_Cnt > 0) {
        // //     champion_Data[i].style.display = "block";
        // // }
        // else {
        //     champion_Data[i].style.display = "none";
        // }
        // if (champion_Data[i].dataset.championName === champion_Input.value || champion_Data[i].dataset.championNameChosung === champion_Input.value) {
        //     // console.log( $("#champion_Input").val());
        //     champion_Data[i].style.display = "block";
        // }

        // if (champion_Input.value == "") {
        //     for (let j = 0; j < champion_Data.length; j++) {
        //         champion_Data[j].style.display = "block";
        //     }
        // }
//         if(champion_Data[i].dataset.championName.indexOf(champion_Input.value)>= 0 || champion_Data[i].dataset.championNameChosung.indexOf(champion_Input.value)>= 0){
//             champion_Data[i].classList.remove("hide");
//             champion_Data[i].classList.add("show");
//         }
//         else{
//             champion_Data[i].classList.remove("show");
//             champion_Data[i].classList.add("hide");
//         }
//     }
// })

// $(function () {
//     $(".champion-list-filter__type").on('click', '.champion-list-filter__type__item', function () {
//         var $filterList = $(this).closest('.champion-list-filter__type').find('.champion-list-filter__type__item'),
//             filterType = $(this).data("filter-type"),
//             $itemList = $(".champion-index__champion-item"),
//             itemClass = "champion-index__champion-item";

//         // 탭 이동 시 초기화
//         $(".champion-list-filter__keyword input").val("");
//         $itemList.each(function (index, item) {
//             $(item).removeClass('hide').addClass('show').css('display', '');
//         });

//         $filterList.removeClass('champion-list-filter__type__item--active');
//         $(this).addClass('champion-list-filter__type__item--active');

//         $itemList.each(function (index, item) {
//             if (filterType === "ALL") {
//                 $(item).css('display', '');
//                 return;
//             }

//             if ($(item).hasClass(itemClass + '--' + filterType)) {
//                 $(item).css('display', '');
//             } else {
//                 $(item).css('display', 'none');
//             }
//         });
//     });

//     $('.champion-list-filter__keyword input').on('keyup keydown change', function () {
//         var chosungSplit = function (keyword) {
//             var doubleChosungArray = {
//                 'ㄳ': 'ㄱㅅ',
//                 'ㄵ': 'ㄴㅈ',
//                 'ㄶ': 'ㄴㅎ',
//                 'ㄺ': 'ㄹㄱ',
//                 'ㄻ': 'ㄹㅁ',
//                 'ㄼ': 'ㄹㅂ',
//                 'ㄽ': 'ㄹㅅ',
//                 'ㄾ': 'ㄹㅌ',
//                 'ㄿ': 'ㄹㅍ',
//                 'ㅀ': 'ㄹㅎ',
//                 'ㅄ': 'ㅂㅅ'  
//             };
//             for (var doubleChosung in doubleChosungArray) {
//                 if (doubleChosungArray.hasOwnProperty(doubleChosung)) {
//                     var spritedChosung = doubleChosungArray[doubleChosung];
//                     keyword = keyword.replaceAll(doubleChosung, spritedChosung);
//                 }
//             }
//             return keyword;
//         },//동시입력 초기화
//             keyword = $(this).val().toLowerCase().replace(/[~!#$^&*=+|:;?"<,.>'\s]/g, ''),
//             $championList = $('.champion-index__champion-item');

//         keyword = chosungSplit(keyword);
    // var keyword = document.querySelector("#champion_Input").value;
    //     $championList.each(function (i, o) {
    //         var championName = $(o).data('champion-name'),
    //             championNameChosung = $(o).data('champion-name-chosung'); //각 챔피언 데이터 변수

    //         if (championName.indexOf(keyword) >= 0 || (championNameChosung && championNameChosung.indexOf(keyword) >= 0)) {
    //             $(o).removeClass('hide');
    //             $(o).addClass('show');
    //         } else {
    //             $(o).removeClass('show');
    //             $(o).addClass('hide');
    //         } //검색 결과에 따라 챔피언 목록을 보여주는 부분
    //     });
    // });

// $("#champion_Input").keyup(function () {
//     for (let i = 0; i < champion_Data.length; i++) {
//         let chosung_Cnt = 0;
//         for (let j = 0; j < champion_Data[i].dataset.championNameChosung.length; j++) {
//             console.log(champion_Input.value)
//             if (champion_Data[i].dataset.championNameChosung.charAt(j) == champion_Input.value) {
//                 chosung_Cnt++;
//                 continue;
//             }
//         }
//         if (chosung_Cnt > 0) {
//             champion_Data[i].style.display = "block";
//         }
//         else {
//             champion_Data[i].style.display = "none";
//         }
//         if (champion_Data[i].dataset.championNameChosung === champion_Input.value) {
//             // console.log( $("#champion_Input").val());
//             champion_Data[i].style.display = "block";
//         }

//         if (champion_Input.value == "") {
//             for (let j = 0; j < champion_Data.length; j++) {
//                 champion_Data[j].style.display = "block";
//             }
//         }
//     }
// })

// function reset_box() {
//     if (champion_Input.value == "") {
//         for (let i = 0; i < champion_Data.length; i++) {
//             champion_Data[i].style.display = "block";
//         }
//     }
// }
// setInterval(reset_box, 1000);