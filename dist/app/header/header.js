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
