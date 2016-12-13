<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" trimDirectiveWhitespaces="true"%>
<%@ include file="common/taglibs.jsp" %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>会计后台管理系统</title>
<link rel="shortcut icon" href="${ctx}/favicon.ico" type="image/x-icon">
<link rel="stylesheet" href="${ctx}/static/css/main.css">
</head>
<body class="layout-boxed">
	<div class="wrap">
		<header class="main-header">
			<a href="${ctx}/"></a>
			<nav></nav>
		</header>
		<aside class="main-sidebar">
			<ul class="sidebar-menu">
				<li class="header"></li>
				<li class="treeview">
					<a href="javascript:void(0);">布局操作</a>
					<ul class="treeview-menu">
						<li>铺满</li>
						<li>居中</li>
					</ul>
				</li>
				<li class="treeview"><a href="${ctx}/customerInfo/list">业主管理</a></li>
			</ul>
		</aside>
		<div class="content-wrap">
			<iframe src="${ctx}/welcome" id="qwer" width="100%" height="100%"></iframe>
		</div>
	</div>
	<script src="${ctx}/static/js/main.js"></script>
	<script type="text/javascript">
		$(function(){
			main.init({});
		});
	</script>
</body>
</html>