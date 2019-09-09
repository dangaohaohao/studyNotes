export function removeGoods(){
    // 获取购物车的本地数据
    var codeArr = JSON.parse(localStorage.getItem('goods')).code;
    
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
}