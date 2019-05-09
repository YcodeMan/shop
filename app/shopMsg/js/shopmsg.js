//商品分类导航栏
$(".li-word").hover(function(){
    $(this).next().addClass("active1");
   $(this).parent().siblings().children(".navli").removeClass("active1");
})
$(".fl").hover(function(){
    $(this).next().addClass("active1");
})
$(".fenlei").hover(function(){
    $(this).children(".nav-list").css({"display":"block"})
},function(){
    $(this).children(".nav-list").css({"display":"none"})
});
//input搜索
function showRecommend(ele){
    let word=$(ele).val();
    let script = document.createElement('script');
    script.src="https://www.baidu.com/sugrec?pre=1&p=3\
    &ie=utf-8&json=1&prod=pc&from=wise_web&sugsid=1455,21083,28774,\
    28723,28558,28838,28585,26350,20718&wd="+word+"&cb=fn";
    document.body.appendChild(script);
}
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
<<<<<<< HEAD
/* -----------------------商品名称、颜色、描述、价格JSON获取-------------------------------------*/ 

    //获取url中的参数
/*function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg); //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
}*/


 $(document).ready(function(){
    $.ajax({
        type: "GET",
        url: "../json/shopMsg.json",
        dataType: "json",
        success:function(data){ //成功后执行的函数
            $.each(data,function(k,v){   //each遍历json对象
                $.each(v,function(key,val){
                    var showTitle = "";
                    var showMiaoshu = "";
                    var good_price = "";
                    var good_num = "";
/*--------------商品数量动态加载，默认数量1------------------*/ 
                    if(key == "number"){
                        good_num+=val;
                        $('#number').html(good_num);
                    }
/*--------------商品名称加载------------------*/ 
                    if(key == "title"){
                        showTitle+="<div>"+val+"</div>";
                        $('#title').html(showTitle);
                    }
/*--------------商品描述介绍------------------*/ 
                    if(key == "introduce"){
                        showMiaoshu+="<div>"+val+"</div>";
                        $('#miaoshu').html(showMiaoshu);
                    }
/*----------------商品价格加载------------------*/ 
                    if(key == "price"){
                        good_price+=val;
                        $('#price').html(good_price);
                    }
/*--------------商品颜色种类加载------------------*/ 
                    if(key == "color"){
                        $.each(val,function(y,j){
                            var good_color ="";
                                good_color+="<li>"+"<a href='#'>"+j+"</a>"+"</li>";
                                $('#color').append(good_color);
                        });
                    }
/*--------------商品规格型号加载------------------*/ 
                    if(key == "specification"){
                        $.each(val,function(y,j){
                            var good_color ="";
                                good_color+="<li>"+"<a href=''>"+j+"</a>"+"</li>";
                                $('#guige').append(good_color).addClass("guigeStyle");
                        });
                    }
   /*--------------小图片动态加载------------------*/                  
                    if(key == "smallPic"){
                        $.each(val,function(y,j){
                            var good_small ="";
                            good_small+=`<li><img src="${j}"/></li>`;
                                $('#smallImg').append(good_small);
                        });
                    }

 /*--------------大图片动态加载------------------*/   


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
                            var index = $(this).index();
                            $("#Img_big").animate({
                                "left":-oneWidth*index,

                            },150)
                        })
                        
                        $("#toLeft").on("click",function(){
                            $(this).addClass("lanse");
                            $("#smallImg > li").removeClass("lanse");
                            $("#smallImg > li")
                            var index = $(this).index();
                            $("#Img_big").animate({
                                "left":-oneWidth,
                                if(index = $("#smallImg > li").length){
                                    return;
                                }
                            },150)
                            
                        })
                    })

                });
                return false;
            });
        }
    });
   
   
 })

//  $(document).ready(function(){
//     var bigImg=$("#bigImg"),     //获取最外层框架的名称
//         ul= $("bigImg ul"),      
//         showImg = bigImg.find("#smallImg li"),//获取按钮
//         oneWidth = bigImg.find("ul li").eq(0).width();   //获取每个图片的宽度
        
//         showImg.on("click",function(){           //为每个按钮绑定一个点击事件      
//             $(this).addClass("active").siblings().removeClass("active");   //按钮被点击时为这个按钮添加高亮状态，并且将其他按钮高亮状态去掉
//             var index=$(this).index();  //获取哪个按钮被点击，也就是找到被点击按钮的索引值
//             ul.animate({
//                 "left":-oneWidth*index,   //注意此处用到left属性，所以ul的样式里面需要设置position: relative; 让ul左移N个图片大小的宽度，N根据被点击的按钮索引值index确定
//             })
//         })
// })



// $(document).ready(function(){
//     var oneWidth = $("#Img_big > li").eq(0).width();
//     console.log(1);
//     $("#smallImg > li").on("click",function(){
//         console.log(1);
//         $(this).addClass("lanse").siblings().removeClass("lanse");
//         var index = $(this).index();
//         console.log(index);
//         $("#Img_big").animate({
//             "left":-oneWidth*index,
//         })
//     })
// })
=======
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
>>>>>>> 4ca81b52397f2042ab2cbbe5c1c0179e9356c0d3
