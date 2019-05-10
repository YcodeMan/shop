
var bigPicStr = "",
    smallPicStr = "";
$(function () {
    $.get('../json/loopPic.json', function (data) {
        var bigPics = data[0].bigPic;
        var smallPics = data[1].smallPic;
        // 遍历大图
        $.each(bigPics, function (k, v) {
            bigPicStr += `<div class="swiper-slide">
                    <a href="#"><img src="${v.imgSrc}" alt=""></a>
                </div>`;
        });

        // 遍历小图
       
            var twoStr = ``,
            // 通过数组每两个存储一起
                arr = [];
        $.each(smallPics, function (k, v) {
             var    aStr = `<a href="#"><img src="${v.imgSrc}" alt=""></a>`;
                    twoStr += aStr 
            if (k % 2 != 0) {
                arr.push(twoStr);
                twoStr = ``;
            }   
        });
       $.each(arr, function(k,v) {
         smallPicStr += `<div class="swiper-slide">
                        ${v}    
                    </div>`;
       });
        var bigStr = ` <div class="swiper-wrapper">
                    ${bigPicStr}
            </div>
            <div class="swiper-pagination"></div>
            <!-- 如果需要导航按钮 -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
            `;
        $(".swiper-container").append(bigStr);
        $(".swiper-wrapper[class*='twoLoop']").append(smallPicStr);
        var bigSwiper = new Swiper('.swiper-container', {
            speed: 1000,
            autoplay: {
                disableOnInteraction: false,
                delay: 1000,
            },
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
        var samllSwiper = new Swiper('.swiper-container2', {
            speed: 1000,
            autoplay: {
                disableOnInteraction: false,
                delay: 4000,
            },
            loop: true, // 循环模式选项

            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
                clickable: true,

            },

            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

        });
    });

})


