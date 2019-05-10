$(function () {
    $.get('./shopCar.json', function (res) {
        if (res) {
            var str = ``;
            var total = 0;
            $("#cart-no").hide();
            $("#cart-list").show();
            $.each(res, function (k, v) {
                str += ` <tr>
                            <td><input type="checkbox" name="shopping" checked /></td>
                            <td>${v["img"]}</td>
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
                            <td><button shop_id ='${v["id"]}' class="btn btn-warning" id="del">删除</button></td>
                        </tr>
                    `
                total += v["price"] * v["num"];
            });
            $("tbody").html(str);
            $("#cartTotalPrice").text(total);
        } else {
            $("#cart-no").show();
            $("#cart-list").hide();
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

$("input[type='checkbox']").on('click', function () {
    var flag = 0;
    var price = 0;
    if ($(this) == $("#all")) {
        if ($(this).checked) {
            $(this).prop("checked", true);
        } else {
            $(this).prop("checked", false);
        }
    } else {
        this.checked = !this.checked;
    }
    $("input[type='checkbox']").each(function () {
        if (this.id != "all" && $(this).checked) {
            price += $(this).parent().parent().children("td:eq(5)");
            flag ++;
        }
    });
    if (flag == $("input[type='checkbox']").length - 1) {
        $("#all").pro("checked", true);
    }
    $("#cartTotalPrice").text(price);
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