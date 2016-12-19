var customer = {
		//封装客户相关的ajax的url
		url : {
			save : function(){
				return base.getRootPath()+'/customerInfo/save';
			}
		},
		//客户列表页逻辑
		list:{
			init : function(params){
				$(".submit").click(function(event) {
					$.ajax({
						type:"post",
						url: customer.url.save(),
						dataType:"json",
						async:false,
						cache:false,
						contentType: "application/x-www-form-urlencoded; charset=utf-8",
						data:{'name':encodeURI($("input[name='name']").val()),"sex":$("input[name='sex']").val(),"mobile":encodeURI($("input[name='mobile']").val()),"detailAddress":encodeURI($("input[name='detailAddress']").val())}, //解决ie8传值乱码问题
						beforeSend : function(XMLHttpRequest) {
							 XMLHttpRequest.setRequestHeader("X-Custom-Header1", "Bar");
						},  
						success:function(data){
							console.log(data);
							if(data.flag){
							}else{
							}
						},
						error:function(){
						}
					});
				});
				$(".add").click(function(){
					$(".table-box").toggle("slow");
					$(".form-box").toggle("slow");
				});
			}
		}
		
}