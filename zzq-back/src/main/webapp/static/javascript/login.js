var login = {
		init:function(params){
			$("#submit").click(function(){
				$(this).parents("form").submit();
			});
			$('.item>input').each(function(index, el) {
				$(this).bind({
					'focus':function(event) {$(this).parent().addClass('item_focus');},
					'blur':function(event){$(this).parent().removeClass('item_focus');}
				});
			});
		}
}
$(function(){
	login.init({});
});