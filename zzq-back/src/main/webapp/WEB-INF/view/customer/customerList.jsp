<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" trimDirectiveWhitespaces="true"%>
<%@ include file="../common/taglibs.jsp" %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>用户信息管理页面</title>
<link rel="stylesheet" href="${ctx}/static/css/base.css">
</head>
<body>
	<table>
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
</body>
</html>