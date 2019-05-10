$(function () {
    var list = getCar();
    if (list.length > 0) {
        var str = ``;
        var total = 0;
        $("#cart-no").hide();
        $("#cart-list").show();
        $.each(list, function (k, v) {
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
});

$('tbody').on('click', '.input-group > span', function () {
    var id = $(this).attr("shop_id");
    if ($(this).text() == '+') {
        updateCar(id, "add");
        location.reload();
    } else {
        var cutNum = parseInt($(this).next().val());
        if (cutNum > 1) {
            updateCar(id, "cut");
            location.reload();
        }
    }
});

$('tbody').on('change', '.form-control', function () {
    var id = $(this).attr("shop_id");
    var val = $(this).val();
    if (val < 1) {
        val = 1;
    } 
    updateCar(id, val);
    location.reload();
})

$('tbody').on('click', '.btn-warning', function () {
    var id = $(this).attr("shop_id");
    $('#myModal').modal('show');
    $('#yes').click(function () {
        $('#myModal').modal('hide');
        removeCar(id);
        location.reload();
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

function addCar(data) {
    var list = getCar();
    if (hasCar(data.id)) {
        for (var i = 0; i < list.length; i++) {
            if (list[i].id == data.id) {
                list[i].num = Number(list[i].num) + Number(data.num);
            }
        } 
    } else {
        list.push(data);
    }
    localStorage.setItem('list', JSON.stringify(list));
}

function updateCar(id,make) {
    var list = getCar();
    for (var i = 0; i < list.length; i++) {
        if (list[i].id == id) {
            if (make == 'add') {
                ++ list[i].num;
            } else if (make == 'cut') {
                -- list[i].num;
            } else {
                ist[i].num = make;
            }
        }
    }
    localStorage.setItem('list', JSON.stringify(list));
}

function getCar() {
    return JSON.parse(localStorage.getItem('list')) || [];
}

function hasCar(id) {
    var list = getCar();
    for (var i = 0; i < list.length; i++) {
        if (list[i].id == id) {
            return true;
        }
    }
    return false;
}

function removeCar(id) {
    var list = getCar();
    for (var i = 0; i < list.length; i++) {
        if (list[i].id == id) {
            list.splice(i, 1);
            localStorage.setItem('list', JSON.stringify(list));
            return;
        }
    } 
}
