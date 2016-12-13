var main = {
	init:function(params){
		$(".sidebar-menu li.treeview a").click(function(event) {
			$("#qwer").attr('src', $(this).attr('href'));
			return false;
		});
	}
}