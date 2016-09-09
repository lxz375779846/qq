
$(document).ready(function() {
	$.fn.fullpage({
		slidesColor: ['#2A3E63', '#14466C', '#33799A', '#178BC1', '#ef820'],
	});
});
$(function(){
  $(".btn").click(function(){
	$(this).hide();
	$(".flsh").hide();
	$(this).siblings(".huojian").animate({top:'-1000px'},1000,function(){
      $(this).parents(".lond").hide();
	  $(".content").show();
    })
  })
$(".plan").animate({width:'0%'},0,function(){
  $(".plan_text").text("0%");
})
$(".plan").animate({width:'33%'},100,function(){
  $(".plan_text").text("33%");
});
$(".plan").animate({width:'66%'},100,function(){
  $(".plan_text").text("66%");
});
$(".plan").animate({width:'100%'},100,function(){
  $(".plan_text").text("100%");
});
$(".plan").animate({width:'100%'},100,function(){
  $(".plan_text").text("100%");
  $(".plan_wrap").hide();
  $(".btn").css("display","inline");
});
})
