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
    $.getJSON("./../json/user.json",
        function(data){
             let i=0;
             let flag=true;
            data.forEach(function(){
                let str=data[i].username;
                let pw=data[i].password;
               if(flag){
                   if(username == str && password == pw){
                    localStorage.setItem("username", username);
                   location.href = `../index/index.html?username=${username}`;

                    flag = false;
                    }
               } i++;
            });
            if(flag){
                $(ele).prev().removeClass('yincang').addClass('noyincang')
            }
        });
}
$('input').focus(function(){
    $("button").prev().removeClass('noyincang').addClass('yincang')
})

