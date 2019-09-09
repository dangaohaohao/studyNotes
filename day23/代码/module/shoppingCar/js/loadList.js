export function loadList(){
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
}