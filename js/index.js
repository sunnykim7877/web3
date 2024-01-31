$(document).ready(function() {

    $(".gnb").hover(function(){
    $(this).find(".main .sub_all").stop().slideDown(500);
    },function(){
    $(this).find(".main .sub_all").stop(500).slideUp();
    });
    

// 메인 비주얼___________________________
let $img = $(".changeimg ul li");
let $btn = $(".btn ul li");
let $lbtn = $(".side_btn .lbtn");
let $rbtn = $(".side_btn .rbtn");
let oldidx = 0; 
let idx = 0; 
let img_n = $img.length; 

function changeImg(idx){ 
if(oldidx != idx){ 
$img.eq(oldidx).stop().fadeOut("300");
$img.eq(idx).stop().fadeIn("300");  }
oldidx = idx;  
};
function changeAuto(){
idx++;
if(idx > img_n-1){ 
idx=0;
}
changeImg(idx);

};
timer = setInterval(changeAuto,4000); 
});

// 흘러가는 메뉴_______________________________

let x=0;
let s=-1; //흘러가는 방향을 의미

function motion(){
x = x + s;
if (x < -2000) {x = 0};
if (x > 0) {x = -2000};

$(".menu1").css({left:x});
};

bauto = setInterval(motion,20);

//오버시 멈춤
$(".menu1").hover(function(){
clearInterval(bauto);
},function(){
bauto = setInterval(motion,20);
});

//이전다음버튼
$(".left").click(function(){
s=-1;
});
$(".right").click(function(){
s=1;
});