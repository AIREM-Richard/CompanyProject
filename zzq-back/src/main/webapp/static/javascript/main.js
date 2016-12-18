var main = {
	init:function(params){
		$(".sidebar ul li ul li a").click(function(event) {
			$("#iFrame1").attr('src', $(this).attr('href'));
			return false;
		});
	}
}