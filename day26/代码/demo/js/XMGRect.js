/**
 * Created by Administrator on 2016/10/22.
 */
function XMGRect(option) {
    this._init(option);
}

XMGRect.prototype ={
    constructor: XMGRect,
    _init: function (option) { // 属性
        option = option || {};
        this.x  = option.x === 0 ? 0 : option.x || 100;
        this.y  = option.y === 0 ? 0 : option.y || 100;
        this.width = option.width === 0 ? 0 : option.width || 100;
        this.height = option.height === 0 ? 0 : option.height || 100;
        // 描边
        this.stroke = option.stroke || 'black';
        this.strokeWidth = option.strokeWidth || 5;
        // 填充
        this.fill = option.fill || 'gray';
        // 旋转
        this.angle = option.angle || 0;
        // 缩放
        this.scaleX = option.scaleX || 1;
        this.scaleY = option.scaleY || 1;
        // 位移
        this.translateX = option.translateX || 0;
        this.translateY = option.translateY || 0;
    },
    
    // 绘制
    render: function (ctx) {
        ctx.save();
        ctx.beginPath();
        // 位移
        ctx.translate(this.translateX, this.translateY);
        // 旋转
        ctx.rotate(this.angle * Math.PI / 180);
        // 缩放
        ctx.scale(this.scaleX, this.scaleY);
        
        ctx.strokeStyle = this.stroke;
        ctx.lineWidth = this.strokeWidth;
        ctx.strokeRect(this.x, this.y, this.width, this.height);
        
        ctx.fillStyle = this.fill;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        
        ctx.restore();
    }
};