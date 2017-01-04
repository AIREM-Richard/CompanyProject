var customer = {
		//封装客户相关的ajax的url
		url : {
			save : function(){
				return base.getRootPath()+'/customerInfo/save';
			},
			deleteUrl : function(){
				return base.getRootPath() + "/customerInfo/delete";
			}
		},
		//切换显示对象
		toggle2Object:function(tableBox,formBox){
			$(tableBox).stop(true,true).toggle("slow"),$(formBox).stop(true,true).toggle("slow");
		},
		//保存业主信息
		saveCustomer: function(){
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
					if(data.flag){
						customer.toggle2Object(".table-box",".form-box");
					}else{
						console.log(data.msg);
					}
				},
				error:function(){
				}
			});
		},
		//删除业主信息
		deleteCustomer : function(customerId,obj){
			$.ajax({
				type:"post",
				url: customer.url.deleteUrl(),
				dataType:"json",
				data:{'customerId':customerId},
				beforeSend : function(XMLHttpRequest) {},  
				success:function(data){
					if(data.flag){
						$(obj).parents("tr").remove();
					}else{
						console.log(data.msg);
					}
				}
			});
		},
		//客户列表页逻辑
		list:{
			init : function(params){
				$(".submit").click(function(event) {
					customer.saveCustomer();
				});
				$(".add,.back").click(function(){
					customer.toggle2Object(".table-box",".form-box");
				});
			}
		}
}
$(function(){
	//使用EL表达式传入参数
	customer.list.init({});
});