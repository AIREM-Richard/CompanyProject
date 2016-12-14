<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" trimDirectiveWhitespaces="true"%>
<%@ include file="../common/taglibs.jsp" %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>登录</title>
<link rel="shortcut icon" href="${ctx}/favicon.ico" type="image/x-icon">
<link rel="stylesheet" href="${ctx}/static/css/login.css">
</head>
<body>
	<div id="login_warp">
		<div class="hd_login">
		    <div class="hder_login">
			    <a class="login_logo">
			    	<img src="${ctx }/static/img/login/logo.png">
			    </a>
		    </div>
	    </div>
		<div class="bg_login">
			<div class="co_login">
				<div class="form_login">
					<div class="box_login">
						<div class="box_hd"><h1>账号登录</h1></div>
						<div class="box_form">
							<form action="" id="login_form" method="post">
								<div class="item">
									<label for="" class="lo_name"></label>
									<input type="text" class="name">
								</div>
								<div class="item">
									<label for="" class="lo_pwd"></label>
									<input type="text" class="name">
								</div>
								<div class="item_cl">
									<span><input type="checkbox" class="fjcheckbox"><label for="">自动登录</label></span>
								</div>
								<div class="item">
									<a href="views/manage.html" class="sub_login">登录</a>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="ft_login">
			<div class="subft_login">
				<div class="subft_hd">
					<a href="http://www.wealink.com/gongsi/jianjie/1800366/">南京飞吉介绍</a>|
					<a href="">联系我们</a>
				</div>
				<div class="subft_co"></div>
				<div class="subft_ft">Copyright©2015飞吉版权所有</div>
			</div>
		</div>
	</div>
</body>
</html>