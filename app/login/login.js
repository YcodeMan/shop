let shuzi=0;
// function unametest(ele){
//     let value=$(ele).val();
//     if(value==""){
//         $(ele).next().addClass("danger iconzhuyidapx");
//         $(ele).next().next().removeClass('green').addClass("red").html("不能为空");
//      } else {
//             let reg=/^[A-Za-z0-9]{4,12}$/;
//             if(reg.test(value)){
//                  $.getJSON(
//                     "./../json/user.json",                 
//                      function(res){
//                          let flag=true;
//                         res.forEach(x => {
//                             if(flag){
//                                 if(x.username == value){
//                                 $(ele).next().removeClass('danger').addClass("chenggong iconicon_right");
//                                 $(ele).next().next().removeClass('red').addClass("green").html("检测成功"); 
//                                 flag=false;
//                                 } else {
//                                     $(ele).next().removeClass('chenggong').addClass("danger iconzhuyidapxdanger iconzhuyidapx");
//                                     $(ele).next().next().removeClass('green').addClass("red").html("无此用户名"); 
//                                 }
//                             }                           
//                         });
//                     }) 
//                 }   else {
//                     $(ele).next().removeClass('chenggong').addClass("danger iconzhuyidapx");
//                     $(ele).next().next().removeClass('green').addClass("red").html("格式错误"); 
//                 }
//             }
//             return shuzi=1;
// }
function test(ele){
    let value=$(ele).val();
    if(value==""){
        $(ele).next().addClass("danger iconzhuyidapx");
        $(ele).next().next().removeClass('green').addClass("red").html("不能为空");
     } ;
    return shuzi=1;
};
function login(ele){
    let username=$("input[name='username']").val();
    let password=$("input[name='password']").val();
    $.getJSON("./../json/user.json",
        function(data){
             let i=0;
             let flag=true;
            data.forEach(function(){
                let str=data[i].username;
                let pw=data[i].password;
               if(flag){
                   if(username==str && password==pw){
                    //location.href(`./../index.html=?username=${username}`);
                    console.log(1)
                    flag=false;
                    }
               } 
            });
            if(flag){
                $(ele).prev().removeClass('yincang').addClass('noyincang')
            }
        }
    )
}
function dpi(){
    if(shuzi==1){
        $('#myButton').prev().css("dispaly","none")
    }
}
dpi();