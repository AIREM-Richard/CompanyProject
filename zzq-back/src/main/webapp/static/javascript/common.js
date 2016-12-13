var base = {
		//获得当前项目的根路径  
		getRootPath : function(){
		    //获取当前网址，如： http://localhost:8080/ems/Pages/Basic/Person.jsp
		    var curWwwPath = window.document.location.href;
		    //获取主机地址之后的目录，如： /ems/Pages/Basic/Person.jsp
		    var pathName = window.document.location.pathname;
		    var pos = curWwwPath.indexOf(pathName);
		    //获取主机地址，如： http://localhost:8080
		    //var localhostPath = curWwwPath.substring(0, pos);
		    var a = curWwwPath.split("/",3)
		    var localhostPath = a[0] + "//" + a[2];
		    //获取带"/"的项目名，如：/ems
		    var projectName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1);
		    if(projectName == "/zzq-back") { //暂时解决没有项目名问题
		    	return (localhostPath + projectName);
		    } else {
		    	return localhostPath;
		    }
		}
}