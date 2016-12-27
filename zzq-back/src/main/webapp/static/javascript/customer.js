var customer = {
		//封装客户相关的ajax的url
		url : {
			save : function(){
				return base.getRootPath()+'/customerInfo/save';
			}
		},
		//切换显示对象
		toggle2Object:function(tableBox,formBox){
			$(tableBox).stop(true,true).toggle("slow"),$(formBox).stop(true,true).toggle("slow");
		},
		//客户列表页逻辑
		list:{
			init : function(params){
				$(".submit").click(function(event) {
					var param = {'name':$("input[name='name']").val(),"sex":$("input[name='sex']").val(),"mobile":$("input[name='mobile']").val(),"detailAddress":$("input[name='detailAddress']").val(),"remark":$("textarea[name='remark']").val()};
					$.ajax({
						type:"post",
						url: customer.url.save(),
						dataType:"json",
						async:false,
						cache:false,
						contentType: "application/x-www-form-urlencoded; charset=utf-8",
						data:param,
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
				$(".add,.back").click(function(){
					customer.toggle2Object(".table-box",".form-box");
				});
			}
		}
}