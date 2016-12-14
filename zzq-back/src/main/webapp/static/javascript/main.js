var main = {
	init:function(params){
		$(".sidebar-menu li.treeview a").click(function(event) {
			$("#iFrame1").attr('src', $(this).attr('href'));
			return false;
		});
	}
}