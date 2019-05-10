function test(ele){
    let value=$(ele).val();
    if(value==""){
        $(ele).next().removeClass('chenggong iconicon_right').addClass("danger iconzhuyidapx");
        $(ele).next().next().removeClass('green').addClass("red").html("不能为空");
     } ;
}
function login(ele){
    let username=$("input[name='username']").val();
    let password=$("input[name='password']").val();
    $.get("./login.php",
        {uname:username,
        pwd:password},
        function(data){
             var num=parseInt(data);
             if(num==-1){
                $(ele).prev().removeClass('yincang').addClass('noyincang')
             }else if(num==1){
                 window.location.href=`./../../index.html?username=${username}`
             } else{
                 alert('网络错误')
             }
        });
}
$('input').focus(function(){
    $("button").prev().removeClass('noyincang').addClass('yincang')
})

