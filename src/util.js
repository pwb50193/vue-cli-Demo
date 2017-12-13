export default{
    checkVal: function (type,value) {
    	var success=false;
    	var reason="";
    	var reg = "";
    	if(type == "text"){
    		success=true;//如需验证可按照需求进行设置
    	}else if(type == "email"){
    		reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
            var reg1 = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    		if (reg.test(value)||reg1.test(value)) {
    			success=true;
            } else {
                reason="请输入正确邮箱格式！";
            }
    	}else if(type == "password"){
    		success = true;//如需验证可按照需求进行设置
    	}else if(type == "tel"){
    		reg = /^(1[3-9]{1}\d{9})$/
        	if (reg.test(value)) {
          		success=    true;
        	} else {
          		reason="请输入正确电话号码！";
        	}
    	}else if(type == "date"){
    		reg =  /^((((1[6-9]|[2-9]\d)\d{2})-(0?[13578]|1[02])-(0?[1-9]|[12]\d|3[01]))|(((1[6-9]|[2-9]\d)\d{2})-(0?[13456789]|1[012])-(0?[1-9]|[12]\d|30))|(((1[6-9]|[2-9]\d)\d{2})-0?2-(0?[1-9]|1\d|2[0-8]))|(((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))-0?2-29-))$/;
    		if(reg.test(value)){
    			success = true;
    		}else{
    			reason="请输入正确日期格式！";
    		}
    	}else if(type == "number"){
    		success=true;
    	}
    	return {
    		success:success,
    		reason:reason
    	}
    },
    getThisMonthDay: function(year, month) {
        var d = new Date();
        // var y = d.getFullYear();
        // var m = d.getMonth();
        // var d = d.getDate();
        // what day is first day
        d.setFullYear(year, month-1, 1);
        //这个年月的第一天是星期几
        var w1 = d.getDay();
        //有w1+1个空白
        var days = new Date(year,month,0).getDate();
        var ds = w1;
        var arr=[];
        //加入空白
        for(let i = 0 ; i < ds ; i++){
            arr.push("");
        }
        //加入日期
        for(let i = 1 ; i <= days ; i++){
            arr.push(d.getFullYear()+"/"+(d.getMonth())+"/"+i);
        }
        return arr;
    }
}