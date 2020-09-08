let timeId = null;

timeId = setInterval(fnSlide, 3000);

$(".prev_btn, .next_btn").mouseover(function () {
    console.log("중지!");
    clearInterval(timeId);
})

$(".prev_btn, .next_btn").mouseout(function () {
    console.log("시작!");
    timeId = setInterval(fnSlide, 3000);
})


function fnSlide() {
    let first = ".slide_item:first";
    let last = ".slide_item:last";
    $(first).clone().insertAfter(last);
    $(".slide_box").animate({
            "margin-left": "-295px"
        },
        1000,
        function () {
            // 슬라이드 셔틀 프레임 원위치
            $(this).css({
                "margin-left": "0"
            });
            $(first).remove();
            // 첫 번째 항목 뒤로 이동
            // $(".slide_box>.slide_item:first")
            //     .insertAfter(".slide_box>.slide_item:last");
        }
    );
};


$(".prev_btn").click(function () {
    fnSlide();
});

$(".next_btn").click(function () {
    let first = ".slide_item:first";
    let last = ".slide_item:last";
    $(last).clone().insertBefore(first);
    $(".slide_box").animate({
            "margin-left": "295px"
        },
        1000,
        function () {
            // 슬라이드 셔틀 프레임 원위치
            $(this).css({
                "margin-left": "-295px"
            });
            $(first).remove();
            // 첫 번째 항목 뒤로 이동
            // $(".slide_box>.slide_item:first")
            //     .insertAfter(".slide_box>.slide_item:last");
        }
    );
})


$(".main_menu>li").on("focusin mouseover", function (e) {
    $(this).children("a").css({
        "background": "#19a956",
        "color": "white"
    });
    $(this).children("ul").stop().slideDown(500);
});

$(".main_menu>li").on("focusout mouseout", function (e) {
    $(this).children("a").css({
        "background": "white",
        "color": "#666"
    });
    $(this).children("ul").stop().slideUp(500);
});

$(".notice").on("click", function () {
    $(this).html(" <i class='far fa-check-circle'></i>공지사항")
    $(".material").html("&middot;보도자료")
    $(this).addClass("select");
    $(this).removeClass("none_select");
    $(".material").removeClass("select");
    $(".material").addClass("none_select");
});

$(".material").on("click", function () {
    $(this).html(" <i class='far fa-check-circle'></i>보도자료");
    $(".notice").html("&middot;공지사항");
    $(this).addClass("select");
    $(this).removeClass("none_select");
    $(".notice").removeClass("select");
    $(".notice").addClass("none_select");
});

function openmodal() {
    document.querySelector("#modal").classList.remove("hidden");
}

function closemodal() {
    document.querySelector("#modal").classList.add("hidden");

}

const modal_content = document.querySelectorAll(".section_content");

for (let i = 0; i < modal_content.length; i++) {
    modal_content[i].addEventListener("click", openmodal);
}

document.querySelector(".modal-overlay").addEventListener("click", closemodal);