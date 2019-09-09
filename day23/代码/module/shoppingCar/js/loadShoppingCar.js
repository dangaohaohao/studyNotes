export function loadShoppingCar(){
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
}