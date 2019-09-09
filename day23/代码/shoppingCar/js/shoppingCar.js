$(function (){
    // 获取购物车的本地数据
    var codeArr = JSON.parse(localStorage.getItem('goods')).code;

    // 加载数据
    $.ajax({
        url: 'data/goods.json',
        type: 'get',
        dataType: 'json',
        cache: false,
        success: function (json){
            var results = '';
            $.each(codeArr,function (index,code){
                $.each(json,function (i,obj){
                    if (code === obj.code) {
                        results += '<li code="'+obj.code+'"><img src="'+obj.imgurl+'" alt=""><h3>'+obj.title+'</h3><p>'+obj.price+'</p><span>删除</span></li>';
                    }
                });
            });
            $('.list').html(results);
        }
    })

    // 删除购物车商品
    $('.list').on('click','li span',function (){
        // 获取商品的编号
        var code = $(this).parent().attr('code');
        // {"code":["abc2","abc4","abc7","abc1"]}
        $.each(codeArr,function (index,item){
            if (code === item) {
                codeArr.splice(index,1);// 删除对应下标的元素
            }
        });
        
        // 更新本地数据
        var jsonStr = JSON.stringify({"code":codeArr});
        localStorage.setItem('goods',jsonStr);

        // 删除页面对应的节点
        $(this).parent().remove();
        alert('商品成功移出购物车！');
    })


});

