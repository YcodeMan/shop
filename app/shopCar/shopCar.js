$(function () {
    $.get('./shopCar.json', function (res) {
        if (res) {
            var str = ``;
            var total = 0;
            $("#cart-no").hide();
            $("#cart-list").show();
            $.each(res, function (k, v) {
                var totalOne = parseInt(v.price * v.num);
                str += ` <tr>
                            <td><input type="checkbox" name="shopping" checked /></td>
                            <td><img alt='img' src='${v["img"]}'/></td>
                            <td>${v["name"]}</td>
                            <td>${v["price"]}</td>
                            <td>
                                <div class="input-group">
                                    <span class="input-group-addon" shop_id ='${v["id"]}'>-</span>
                                    <input type="text" class="form-control" value="${v["num"]}">
                                    <span class="input-group-addon" shop_id ='${v["id"]}'>+</span>
                                </div>
                            </td>
                            <td>${totalOne}</td>
                            <td><button shop_id ='${v["id"]}' class="btn btn-warning">删除</button></td>
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
    var id = $(this).attr("shop_id");
    if ($(this).text() == '+') {
        var addNum = parseInt($(this).prev().val());
        $(this).prev().val(addNum+1);
        var td = $(this).parents('td');
        td.next().text((addNum + 1) * td.prev().text());
        addAjax(id, "add"); 
    } else {
        var cutNum = parseInt($(this).next().val());
        if (cutNum > 1) {
            $(this).next().val(cutNum-1);
            var td = $(this).parents('td');
            td.next().text((cutNum - 1) * td.prev().text());
            addAjax(id, "cut");
        }
    }
    getTotal();
});

$('tbody').on('change', '.form-control', function () {
    var id = $(this).attr("shop_id");
    var val = $(this).val();
    if (val < 1) {
        val = 1;
    } 
    addAjax(id, "change", val);
    getTotal();
})

$('tbody').on('click', '.btn-warning', function () {
    var id = $(this).attr("shop_id");
    $('#myModal').modal('show');
    $('#yes').click(function () {
        addAjax(id, "del");
        $('#myModal').modal('hide');
        setTimeout(function(){location.reload();},500);
    })
})

$("table").on('click', "input[type='checkbox']", function () {
    var flag = 0;
    if (this.id == "all") {
        if (this.checked) {
            $("input[type='checkbox']").prop("checked", true);
        } else {
            $("input[type='checkbox']").prop("checked", false);
        }
    }
    $("input[type='checkbox']").each(function () {
        if (this.id != "all" && this.checked) {
            flag ++;
        }
    });
    if (flag == $("input[type='checkbox']").length - 1) {
        $("#all").prop("checked", true);
    } else {
        $("#all").prop("checked", false);
    }
    getTotal();
})

function getTotal () {
    var allTotal = 0;
    $("input[type='checkbox']").each(function () {
        if (this.checked && this.id != "all") {
            var t = $(this).parents('tr').children("td:eq(5)").text();
            allTotal += parseInt(t);
        }
    })
    $("#cartTotalPrice").text(allTotal);
}

function addAjax(id, active, num){
    $.ajax({
        type : 'get',
        url : './shopCar.php',
        data : {'id':id, 'active':active, 'num':num},
        dataType : 'json',
        success : function(res) {
            if (res.code == -1) {
                alert(res.message);
            }
        }
    })
}