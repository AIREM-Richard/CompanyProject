var main = {
	init:function(params){
		$(".sidebar ul li ul li a").click(function(event) {
			$(this).addClass("current").after("<span class='right_arr'></span>").parent().siblings("li").find('a').removeClass('current').next(".right_arr").remove();
			$("#iFrame1").attr('src', $(this).attr('href'));
			return false;
		});
	}
}
$(function(){
	main.init({});
});