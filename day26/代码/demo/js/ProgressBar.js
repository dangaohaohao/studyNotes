/**
 * Created by Administrator on 2016/10/22.
 */
function ProgressBar(option) {
    this._init(option);
}

ProgressBar.prototype ={
    constructor: ProgressBar,
    _init: function (option) {
         option = option || {};
         this.x = option.x || 0;
         this.y = option.y || 0;
         this.width = option.width || 0;
         this.height = option.height || 0;

         this.fill = option.fill || 'gray';
         this.stroke = option.stroke || 'black';
         this.strokeWidth = option.strokeWidth || 5;

         this.value = option.value || 0;
         this.cornerRadius = option.cornerRadius || 0;
    },


    render: function (layer) {
        // 1. 创建组
        this.group = new Konva.Group({
            x: 0,
            y: 0
        });
        layer.add(this.group);

        // 2. 常见里面的矩形
        var innerRect = new Konva.Rect({
            x: this.x,
            y: this.y,
            width: this.width * this.value,
            height: this.height,
            fill: this.fill,
            id: 'innerRect'
        });
        this.group.add(innerRect);

        // 3. 创建外面的矩形
        var outerRect = new Konva.Rect({
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height,
            stroke: this.stroke,
            strokeWidth: this.strokeWidth,
            cornerRadius: this.cornerRadius
        });
        this.group.add(outerRect);
    },

    // 过渡动画
    update: function () {
        // 1. 拿到里面的矩形 -->findOne 从组中去寻找对象
        var innerRect =  this.group.findOne('#innerRect');
        innerRect.to({
            width: this.width,
            duration: .5, // s
            easing: Konva.Easings.EaseInOut
        });

    }
};