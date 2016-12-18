<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" trimDirectiveWhitespaces="true"%>
<%@ include file="../common/taglibs.jsp" %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1, maximum-scale=1">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="renderer" content="webkit">
<title>用户信息管理页面</title>
<link rel="shortcut icon" href="${ctx}/favicon.ico" type="image/x-icon">
<link rel="stylesheet" href="${ctx}/static/css/base.css">
</head>
<body>
	<button class="button add">新增</button>
	<table class="table">
		<thead>
			<tr>
				<th>姓名</th>
				<th>性别</th>
				<th>手机号</th>
				<th>详细地址</th>
				<th>操作</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach items="${pageInfo.list }" var="customerInfo">
				<tr>
					<td>${customerInfo.name }</td>
					<td>
						<c:choose>
							<c:when test="${customerInfo.sex eq true }">男</c:when>
							<c:otherwise>女</c:otherwise>
						</c:choose>
					</td>
					<td>${customerInfo.mobile }</td>
					<td>${customerInfo.detailAddress }</td>
					<td>删除，修改</td>
				</tr>	
			</c:forEach>
		</tbody>
	</table>
	<form class="form">
		<label for="">姓名：<input type="text" name="name"></label>
		<label for="">性别：<input type="radio" name="sex"></label>
		<label for="">手机号：<input type="text" name="mobile"></label>
		<label for="">详细地址：<input type="text" name="detailAddress"></label>
		<a class="button submit">提交</a>
	</form>
	<script src="${ctx }/static/js/customer.js"></script>
	<script type="text/javascript">
		$(function(){
			//使用EL表达式传入参数
			customer.list.init({});
		});
	</script>
</body>
</html>