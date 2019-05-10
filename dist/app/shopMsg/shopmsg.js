

function fn(data){
        
    let arr=data.g;
    let str=``;
    for(var i=0;i<4;i++){
        str+=`<li onclick=select(this)>${arr[i].q}</li>`;
    }
    $(".searchList").css({"display":"block"}).html(str);

}
function select(ele){
    let liWord=$(ele).html();
    console.log(liWord)
    $("#myinput").val(liWord);
    
    $(ele).parent().css({"display":"none"});
}
document.onclick=function(){
    $(".searchList").css({"display":"none"});
}

/* -----------------------商品名称、颜色、描述、价格JSON获取-------------------------------------*/ 

    //获取url中的参数
function getUrlParam() {
        var r = window.location.search.substr(1); //匹配目标参数
        var idArr = r.split("=");
        //console.log(idArr[1]);
        var id = idArr[1];
        if (id){
            return id;
        } 
        return 1; //返回参数值
}       
    var id = getUrlParam();
    var urlId = Number(id);
$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: "../json/shopMsg.json",
        dataType: "json",
        success:function(data){ //成功后执行的函数
            var index;
            $.each(data,function(k,v){   //each遍历json对象 
                dataId = v.id;
               
                if (dataId == urlId) {

                    $.each(v,function(key,val){
                       
                        var showTitle = "";
                        var showMiaoshu = "";
                        var good_price = "";
                        var good_num = "";

                        if(key == "number"){
                            good_num += val;
                            $('#number').html(good_num);
                        }

                        if(key == "title"){
                            showTitle+="<div>"+val+"</div>";
                            $('#title').html(showTitle);
                        }

                        if(key == "introduce"){
                            showMiaoshu+="<div>"+val+"</div>";
                            $('#miaoshu').html(showMiaoshu);
                        }
    
                        if(key == "price"){
                            good_price+=val;
                            $('#price').html(good_price);
                        }

                        if(key == "color"){
                            $.each(val,function(y,j){
                                var good_color ="";
                                    good_color+="<li>"+"<a href='javascript:;'>"+j+"</a>"+"</li>";
                                    $('#color').append(good_color);
                            });
                        }

                        if(key == "specification"){
                            $.each(val,function(y,j){
                                var good_color ="";
                                    good_color+="<li>"+"<a href='javascript:;'>"+j+"</a>"+"</li>";
                                    $('#guige').append(good_color).addClass("guigeStyle");
                            });
                        }
                    
                        if(key == "smallPic"){
                            $.each(val,function(y,j){
                                var good_small ="";
                                good_small+=`<li><img src="${j}"/></li>`;
                                    $('#smallImg').append(good_small);
                            });
                        }
    
                        if(key == "bigPic"){
                            $.each(val,function(y,j){
                                var good_big ="";
                                good_big+=`<li><img src="${j}" id="${y}"/></li>`;
                                    $('#Img_big').append(good_big);
                            });
                        }

                        $(document).ready(function(){
                            var oneWidth = $("#Img_big > li").eq(0).width();
                            $("#smallImg > li").on("click",function(){
                                $(this).addClass("lanse").siblings().removeClass("lanse");
                                index = $(this).index();
                                $("#Img_big").animate({
                                    "left":-oneWidth*index,
                                },150);
                            })
                        })
                    });
                }
   
            });

            $(document).ready(function(){
                var oneWidth = $("#Img_big > li").eq(0).width();
                
                $("#toLeft").on("click",function(){
                   index = index === undefined ? $("#smallImg > li").length - 1 : --index;
                   if(index < 0){
                    index =  $("#smallImg > li").length - 1;
                }
                    $("#Img_big").animate({
                        "left":-oneWidth*index},150);

                    $("#smallImg > li").eq(index).addClass("lanse").siblings().removeClass("lanse");
                    
                })

                $("#toRight").on("click",function(){
                    var oneWidth = $("#Img_big > li").eq(0).width();
                    index = index === undefined ? 1 : ++index;  
                    $("#Img_big").animate({
                        "left":-oneWidth*index},150);
                    $("#smallImg > li").eq(index).addClass("lanse").siblings().removeClass("lanse");
                     if(index == $("#Img_big > li").length-1){
                        index = -1;
                    }
                })
            })
// --------------------点击规格和颜色
            $("#guige > li").click(function(){
                $(this).addClass("clicked").siblings().removeClass("clicked");
            });
            $("#color > li").click(function(){
                $(this).addClass("clicked").siblings().removeClass("clicked");
            })
        }
    });
    
})
// ------------------------点击加减按钮增减商品数量
$(document).ready(function(){
    var counte = 1;
    $(".num-down").click(function(){
        if(counte > 1){
            counte--;
        }else{
            counte = 1;
        }
        $("#number").html(counte);
    })
    $(".num-up").click(function(){
        counte++;
        $("#number").html(counte);
    });
})
// ----------------------加入购物车按钮
$("#joinCart").click(function () {
    console.log(11)
    var id = 1,
        img = "../img/block5.1.jpg",
        name = "xj";
        price = 4999;
    $.ajax({
        type : 'get',
        url : '../shopCar/shopCar.php',
        data : {'id':id, 'img':img, 'name':name, 'price':price},
        dataType : 'json',
        success : function(res) {
            if (res.code == 200) {
                //location.href = "../shopCar/shopCar.html";
            } else {
                alert(res.message);
            }
        }
    })
}) 
