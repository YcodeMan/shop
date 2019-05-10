function unametest(ele){
    let value=$(ele).val();
    if(value==""){
        $(ele).next().removeClass('chenggong iconicon_right').addClass("danger iconzhuyidapx");
        $(ele).next().next().removeClass('green').addClass("red").html("不能为空");
     } else {
            let reg=/^[A-Za-z0-9]{4,12}$/;
            if(reg.test(value)){
                 $.get(
                    "./uname.php",
                    {username:value},                 
                     function(res){
                        let num=parseInt(res);
                        if(num == 1){
                            $(ele).next().removeClass('chenggong iconicon_right').addClass("danger iconzhuyidapx");
                            $(ele).next().next().removeClass('green').addClass("red").html("用户名被占用"); 
                        } else if(num == -1){
                            $(ele).next().removeClass('danger iconzhuyidapx').addClass("chenggong iconicon_right");
                            $(ele).next().next().removeClass('red').addClass("green").html("用户名可用"); 
                        }                          
                    })
                }  else {
                    $(ele).next().removeClass('chenggong').addClass("danger iconzhuyidapx");
                    $(ele).next().next().removeClass('green').addClass("red").html("格式错误"); 

                 }
        }
}
function test(ele){
    let value=$(ele).val();
    if(value==""){
        $(ele).next().removeClass('chenggong iconicon_right').addClass("danger iconzhuyidapx");
        $(ele).next().next().removeClass('green').addClass("red").html("不能为空");
     } else {
          if($("input[name='tel']").val() == $(ele).val()){
             var reg=/^\d{6,13}$/;
          } else if($("input[name='mail']").val()==$(ele).val()){
            var reg= /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
          } else if($("input[name='password']").val()==$(ele).val()) {
            var reg=/^\w{6,12}$/;
          }       
            if(reg.test(value)){
                $(ele).next().removeClass("danger iconzhuyidapx").addClass("chenggong iconicon_right");
                $(ele).next().next().removeClass('red').addClass("green").html("检测成功"); 
                return ; 
            } else {
                $(ele).next().removeClass('chenggong iconicon_right').addClass("danger iconzhuyidapx");
                $(ele).next().next().removeClass('green').addClass("red").html("格式错误"); 
            }
    }
}

function pwtest(ele){
    let value=$(ele).val();
    if(value==""){
        $(ele).next().removeClass("chenggong iconicon_right").addClass("danger iconzhuyidapx");
        $(ele).next().next().removeClass('green').addClass("red").html("不能为空");
     } else {
         let password=$('input[name="password"]').val();
         if(password==value){
            $(ele).next().removeClass("danger iconzhuyidapx").addClass("chenggong iconicon_right");
            $(ele).next().next().removeClass('red').addClass("green").html("检测成功"); 
         }else{
            $(ele).next().removeClass("chenggong iconicon_right").addClass("danger iconzhuyidapx");
            $(ele).next().next().removeClass('green').addClass("red").html("密码不一致");
         }
     }
}