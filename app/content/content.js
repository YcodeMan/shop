
var str = ""
$(function () {
    $.get('./app/json/newShop.json', function (data) {
        var shopMsg = data[0].content;
        $.each(shopMsg, function (k, v) {
           str += `
                    <li>
                    <a href="./app/shopMsg/shopMsg.html?id=${v.id}">
                        <div class="NewProBlock">
                            <div class="txtC">
                                <h3>${v.title}<br>${v.type}</h3>
                                <p class="vice">${v.introduce}<br>${v.state}</p>
                                <i class="member_status">
                                    <!--用来存储商品信息--></i>
                                <p title="P92479904" eightd="P92479904" class="p_rice status status_1 multiprice">
                                    RMB <span class="money">${v.price}</span>
                                </p>
                            </div>
                            <img src="${v.imgSrc}" alt="${v.title} -${v.type}" title="${v.title} -${v.type}"
                                class="NewProPic lazy">
                        </div>
                    </a>
                    </li>
                    `;
           
        });
       $("#newShop").append(str);
    });
});

$(function() {
    $.get("./app/json/movieActive.json", function(data) {
        var data = data[0],
            content = data.content,
            mbLeft = data.mbLeft,
            mbright = data.mbright,
            contentStr = ``,
            mbLeftStr = ``,
            mbrightStr = ``;
        $.each(content, function(k,v) {
            contentStr += `<li><a href="./app/shopMsg/shopMsg.html?id=${v.id}">${v.text}</a></li>`;
        });
        $.each(mbLeft, function(k,v) {
            var str = '';
            switch (k) {
                case 0:
                    str = 'biggest block-tiem';
                    break;
                case 1:
                    str = 'big block-tiem';
                    break;
                case 2: 
                case 3:
                    str = 'small block-tiem bgwhite';
                    break;
                default :
                    str = 'small block-tiem bgwhite';      
            }
            mbLeftStr += `
            <a href="./app/shopMsg/shopMsg.html?id=${v.id}" class="${str}" style="margin:0 5px 10px 5px">
                <div class="txt">
                    <p class="xinghao">${v.type}</p>
                    <h3 class="miaoshu">${v.title}<br>${v.introduce}</h3>
                    <p class="p_rice">${v.priceUnit}<span class="money">${v.price}</span></p>
                </div>
                <img src="${v.imgSrc}" alt="" class="touming">
            </a>
                `
        });

        $.each(mbright, function(k, v) {
            var str = ``;
            switch (v.id) {
                case 5:
                    str = 'big1 block-tiem bgwhite';
                    break;
                case 6:
                    str = 'big1 block-tiem';
                    break;
                case 7: 
                    str = 'big block-tiem bgwhite';
                    break;
                case 8:
                case 9:
                case 10:
                case 12:
                    str = 'small block-tiem bgwhite';
                    break;
                case 11:
                    str = 'big block-tiem bgwhitee floatR';
                    break;
                default :
                    str = 'small block-tiem bgwhite';      
            }
            mbrightStr += `
                <a href="./app/shopMsg/shopMsg.html?id=${v.id}" class="${str}" style="margin:0 5px 10px 5px">
                    <img src="${v.imgSrc}" alt="" class="touming">
                    <div class="txt">
                        <p class="xinghao">${v.type}</p>
                        <h3>${v.title}<br>${v.introduce}</h3>
                        <p class="p_rice">${v.priceUnit}<span class="money">${v.price}</span></p>
                    </div>
                </a>
                `;
        })
       $(".blockTitle[class*='btitle']").append(contentStr);
       $(".mbLeft[class*='left']").append(mbLeftStr);
       $(".mbLeft[class*='right']").append(mbrightStr);
    })
});
$(function() {
    //高度滚动出现

$(window).scroll( 
    function() {
        let height=$(document).scrollTop()
        if(0 <=height && height < 1499){
            $(".rightFixNav").removeClass('noyincang').addClass('yincang');
        }else if(height>1500){
            $(".rightFixNav").removeClass('yincang').addClass('noyincang');
            if(1600 <= height && height <= 2800){
             $($(".rightFixNav ul li")[0]).addClass('bgblack').siblings().removeClass('bgblack')
            } else if(2801 <= height && height <= 4400){
                $($(".rightFixNav ul li")[1]).addClass('bgblack').siblings().removeClass('bgblack')
            } else if(4401 <= height && height <= 6000){
                $($(".rightFixNav ul li")[2]).addClass('bgblack').siblings().removeClass('bgblack')
            } else if(6001 <= height && height <= 6900){
                $($(".rightFixNav ul li")[3]).addClass('bgblack').siblings().removeClass('bgblack')
            } else if(6901 <= height){
                $($(".rightFixNav ul li")[4]).addClass('bgblack').siblings().removeClass('bgblack')
            } 
        } 
    }
 );
 function changeblock(ele){
     let liAll=$(".rightFixNav ul li");
     if(liAll[0]==ele){
        $('html,body').animate({scrollTop:1800}, 400)
     } else if(liAll[1]==ele){
        $('html,body').animate({scrollTop:3100}, 400)
     } else if(liAll[2]==ele){
        $('html,body').animate({scrollTop:4650}, 400)
     } else if(liAll[3]==ele){
        $('html,body').animate({scrollTop:6200}, 400)
     } else if(liAll[4]==ele){
        $('html,body').animate({scrollTop:7100}, 400)
     } else if(liAll[5]==ele){
        $('html,body').animate({scrollTop:0}, 400)
     }
 }
});