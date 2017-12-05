export default{
    checkVal: function (type,value) {
    	var success=false;
    	var reason="";
    	var reg = "";
    	if(type == "text"){
    		success=true;//如需验证可按照需求进行设置
    	}else if(type == "email"){
    		reg = /^[A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/;
    		if (reg.test(value)) {
    			success=true;
            } else {
                reason="请输入正确邮箱格式！";
            }
    	}else if(type == "password"){
    		success = true;//如需验证可按照需求进行设置
    	}else if(type == "tel"){
    		reg = /^(1[3-9]{1}\d{9})$/
        	if (reg.test(value)) {
          		success==true;
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
    		reg = /^\d{n}$/;
			if(reg.test(value)){
				success = true;
			}else{
				reason="请输入正确数字格式";
			}
    	}
    	return {
    		success:success,
    		reason:reason
    	}
    }
}