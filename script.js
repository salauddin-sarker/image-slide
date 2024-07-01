$(document).ready(function(){
  $(".btn1").click(function (){
    $(".images").css("marginLeft", "0");
  });
  $(".btn2").click(function (){
    $(".images").css("marginLeft", "-20%");
  });
  $(".btn3").click(function (){
    $(".images").css("marginLeft", "-40%");
  });
  $(".btn4").click(function (){
    $(".images").css("marginLeft", "-60%");
  });
  $(".btn5").click(function (){
    $(".images").css("marginLeft", "-80%");
  });
  $("a").click(function(){
    $(this).addClass("active").siblings()
    .removeClass("active");
  })
});
