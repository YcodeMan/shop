function unametest(ele){
    let value=$(ele).val();
    if(value==""){
        $(ele).next().addClass("danger iconzhuyidapx");
        $(ele).next().next().removeClass('green').addClass("red").html("不能为空");
     } else {
            let reg=/^[A-Za-z0-9]{4,12}$/;
            if(reg.test(value)){
                 $.getJSON(
                    "./../json/user.json",                 
                     function(res){
                         let flag=true;
                        res.forEach(x => {
                            if(flag){
                                if(x.username == value){
                                $(ele).next().removeClass('danger').addClass("chenggong iconicon_right");
                                $(ele).next().next().removeClass('red').addClass("green").html("检测成功"); 
                                flag=false;
                                } else {
                                    $(ele).next().removeClass('chenggong').addClass("danger iconzhuyidapxdanger iconzhuyidapx");
                                    $(ele).next().next().removeClass('green').addClass("red").html("无此用户名"); 
                                }
                            }                           
                        });
                    }) 
                }   else {
                    $(ele).next().removeClass('chenggong').addClass("danger iconzhuyidapx");
                    $(ele).next().next().removeClass('green').addClass("red").html("格式错误"); 
                }
            }
}
function test(ele){
    let value=$(ele).val();
    if(value==""){
        $(ele).next().addClass("danger iconzhuyidapx");
        $(ele).next().next().removeClass('green').addClass("red").html("不能为空");
     } else {
    }
}