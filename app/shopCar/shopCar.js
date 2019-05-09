$(function () {
    $.get('./shopCar.json', function (res) {
        if (res) {
            var num = 1;
            var str = `<table class="table table-striped table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th><input type="checkbox" name="shopping" id="all">全选</th>
                                    <th>商品名称</th>
                                    <th>单价</th>
                                    <th>数量</th>
                                    <th>小计</th>
                                    <th>操作</th>
                                </tr>
                            </thead>
                            <tbody>
                        `;
            $.each(res, function (k, v) {
                str += ` <tr>
                            <td><input type="checkbox" name="shopping" id="all"></td>
                            <td>${v["name"]}</td>
                            <td>${v["price"]}</td>
                            <td>
                                <div class="input-group">
                                    <span class="input-group-addon" shop_id ='${v["id"]}'>-</span>
                                    <input type="text" class="form-control" value="${v["num"]}">
                                    <span class="input-group-addon" shop_id ='${v["id"]}'>+</span>
                                </div>
                            </td>
                            <td>(${v["price"]}*${v["num"]})</td>
                            <td><a shop_id ='${v["id"]}' href="javascript:void(0);" id="del">删除</a></td>
                        </tr>
                    `
            });
            str += `</tbody></table>`;
            $("#cart-shop").html(str);
        }
    }, 'json');      
});

$('tbody').on('click', '.input-group > span', function () {
    var id = $(this).attr("art_id");
    if ($(this).text() == '+') {
       addAjax(id, "add"); 
    } else {
        var val = $(".form-control").val();
        if (val > 1) {
            addAjax(id, "cut");
        }
    }
});

$('tbody').on('change', '.form-control', function () {
    var id = $(this).attr("art_id");
    var val = $(this).val();
    if (val < 1) {
        val = 1;
    } 
    addAjax(id, "change", val);
})

$('tbody').on('click', '#del', function () {
    var id = $(this).attr("art_id");
    addAjax(id, "del");
})

function addAjax(id, active, num){
    $.ajax({
        type : 'get',
        url : './shopCar.php',
        data : {'id':id, 'active':active, 'num':num},
        dataType : 'json',
        success : function(res) {
            if (res.code == 200) {
                location.reload();
            } else {
                alert(res.message);
            }
        }
    })
}