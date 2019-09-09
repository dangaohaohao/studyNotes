/**
 * Created by Administrator on 2016/10/22.
 */
function TextCircle(option) {
    this._init(option);
}

TextCircle.prototype ={
    constructor: TextCircle,
    _init: function (option) {
        option = option || {};
        this.x = option.x || 0;
        this.y = option.y || 0;
        this.innerRadius = option.innerRadius || 0;
        this.outerRadius = option.outerRadius || 0;

         // 填充的颜色
        this.innerFill = option.innerFill || 'black';
        this.outerFill = option.outerFill || 'gray';

        // 中心的文字
        this.text = option.text || '文字';
        this.textColor = option.textColor || 'white';

        // 圆环的透明度
        this.opacity = option.opacity || 1;
    },

    render: function (layerOrGroup) {
          // 1. 创建组
          this.group = new Konva.Group({
               x: this.x,
               y: this.y
          });
          layerOrGroup.add(this.group);

         // 2. 绘制内圆
         var inner_circle = new Konva.Circle({
             radius: this.innerRadius,
             fill: this.innerFill
         });
         this.group.add(inner_circle);

        // 3. 绘制圆环
         var outer_ring = new Konva.Ring({
             innerRadius: this.innerRadius,
             outerRadius: this.outerRadius,
             fill: this.outerFill,
             opacity: this.opacity
         });
         this.group.add(outer_ring);

        // 4. 绘制中心的文字
        var center_text = new Konva.Text({
             x: - this.innerRadius,
             y:  - 9,
             text: this.text,
             fill: this.textColor,
             fontSize: 18,
             width: this.innerRadius * 2,
             align: 'center'
        });
        this.group.add(center_text);
    }

};