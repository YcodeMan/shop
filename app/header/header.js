
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
$(function () {
    var str = `
    <li class="">
            <a href="" class="li-word">电视机/音响<span class="iconfont iconxiangyou"></span></a>
            <div class="navli">
                <div class="navli-list">
                    
                </div>
                <div class="phoneImg">
                    <img src="../img/phoneImg.jpg" alt="">
                </div>
            </div>
        </li>
    `;
    $.get('../json/navShopMsg.json', function(data) {
        var ancestry = ``;
       $.each(data, function(k, v) {
            var parentStr = "",
                child = v.child;
            $.each(child, function(childK, childV) {
                var str = `<dt><a href="javascript:;">${childV.title}</a></dt>`;
                var child_child_arr = childV.child;
                
                $.each(child_child_arr, function (child_child_k, child_child_v) {
                    str += `<dd><a class="sword" href="">${child_child_v.title}</a></dd>`
                });
                parentStr +=  $("<div></div>").append($(`<dl class='dl-list'>${str}</dist>`)).html();
            });
            ancestry += $("<div></div>").append($(`<li class="">
                    <a href="" class="li-word">${v.title}<span class="iconfont iconxiangyou"></span></a>
                    <div class="navli">
                        <div class="navli-list">
                            ${parentStr}
                        </div>
                        <div class="phoneImg">
                            <img src="../img/phoneImg.jpg" alt="">
                        </div>
                    </div>
                </li>`)).html();
       });
        $(".navul-list").append(ancestry);
    //商品分类导航栏
    $(".li-word").hover(function(){
        $(this).next().addClass("active1");
    $(this).parent().siblings().children(".navli").removeClass("active1");
    });
    $(".fl").hover(function(){
        $(this).next().addClass("active1");
    })
    $(".fenlei").hover(function(){
        $(this).children(".nav-list").css({"display":"block"})
    },function(){
        $(this).children(".nav-list").css({"display":"none"})
    });
    });
    
});

$(function() {
// 获取用户名
var str = localStorage.getItem('username');
if (str) {
    
    $(".loginBox .hideUser").css({display: "none"}).next().css({display:"block"});
    $(".user").html(localStorage.getItem('username'));
} else {
    $(".loginBox .hideUser").css({display: "block"});
}
});

$(function() {
    $(".exit").click(function() {
        localStorage.setItem('username', '');
        location.href = location.origin + location.pathname;
    });
})