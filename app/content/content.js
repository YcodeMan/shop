
var str = ""
$(function () {
    $.get('./app/json/newShop.json', function (data) {
        var shopMsg = data[0].content;
        $.each(shopMsg, function (k, v) {
           str += `
                    <li>
                    <a href="#id=${v.id}">
                        <div class="NewProBlock">
                            <div class="txtC">
                                <h3>${v.title}<br>${v.type}</h3>
                                <p class="vice">${v.introduce}<br>${v.state}</p>
                                <i class="member_status">
                                    <!--用来存储商品信息--></i>
                                <p title="P92479904" eightd="P92479904" class="p_rice status status_1 multiprice">
                                    RMB <span class="money">999</span>
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
            contentStr += `<li><a href="#id=${v.id}">${v.text}</a></li>`;
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
            <a href="#id=${v.id}" class="${str}" style="margin:0 5px 10px 5px">
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
                <a href="#id=${v.id}" class="${str}" style="margin:0 5px 10px 5px">
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
})