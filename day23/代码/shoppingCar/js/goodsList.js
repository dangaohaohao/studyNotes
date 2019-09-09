$(function (){

    // 加载数据
    $.ajax({
        url: 'data/goods.json',
        type: 'get',
        dataType: 'json',
        cache: false,
        success: function (json){
            var results = '';
            $.each(json,function (index,value){
                results += '<div class="goods" code="'+value.code+'"><img src="'+value.imgurl+'" alt=""><h3>'+value.price+'</h3><p>'
                +value.title+'</p><div>加入购物车</div></div>';
            });
            $('.content').html(results);
        }
    });

    // 点击加入购物车
    $('.content').on('click','.goods div',function (){
        var code = $(this).parent().attr('code');//获取商品编号
        // localStorage: goods -> {"code":['abc1','abc2','abc3']}
        if (localStorage.getItem('goods')) {
            // 获取本地存储数据，加入购物车的商品编码的数组
            var codeArr = JSON.parse(localStorage.getItem('goods')).code;
        } else {
            var codeArr = [];
        }
        codeArr.push(code);// 把选择的商品添加到本地存储

        // 获取json字符串
        var jsonStr = JSON.stringify({"code":codeArr});
        // 存入本地存储
        localStorage.setItem('goods',jsonStr);
        alert('加入购物车成功！');
    })





});


