/**
 * Created by Administrator on 2016/10/22.
 */
function PieChart(option) {
    this._init(option);
}

PieChart.prototype ={
    constructor: PieChart,
    _init: function (option) {
          option = option || {};
          this.x = option.x || 0;
          this.y = option.y || 0;
          this.innerRadius = option.innerRadius || 0;
          this.outerRadius = option.outerRadius || 0;
          this.outerCircleColor = option.outerCircleColor || 'gray';
          this.outerCircleWidth = option.outerCircleWidth || 5;
        
          this.dataArray = option.dataArray || [];

          this.animationIndex = 0; // 动画的索引
    },
    
    render: function (layer) {
        // 0. 备份指针
        var self = this;

        // 1. 创建总组
        this.group = new Konva.Group({
             x: 0,
             y: 0
        });
        layer.add(this.group);

        // 2. 扇区组
        this.wedgeGroup = new Konva.Group({
             x: 0,
             y: 0
        });
        this.group.add(this.wedgeGroup);

        // 3. 比例组
        this.valueTextGroup = new Konva.Group({
            x: 0,
            y: 0
        });
        this.group.add(this.valueTextGroup);

        // 4. 区域组
        this.areaGroup = new Konva.Group({
            x: 0,
            y: 0
        });
        this.group.add(this.areaGroup);

        // 5. 绘制外圆
        var outerCircle = new Konva.Circle({
            x: this.x,
            y: this.y,
            radius: this.outerRadius,
            stroke: this.outerCircleColor,
            strokeWidth: this.outerCircleWidth
        });
        this.group.add(outerCircle);

        // 6. 根据数据绘制扇区的内容
        // 6.1 相关的量
        var beginAngle = -90;
        this.dataArray.forEach(function (item, index) {

            var tempAngle = item.value * 360;

            // 6.1 绘制里面的扇区
            var wedge = new Konva.Wedge({
                 x: self.x,
                 y: self.y,
                 radius:self.innerRadius,
                 fill: item.color,
                 rotation: beginAngle,
                 angle: tempAngle
            });
            // 6.2 加入组
            self.wedgeGroup.add(wedge);
            
            
            
            // 6.3 绘制比例文字
            // 文字的角度
            var textAngle = beginAngle  + tempAngle * 0.5; // 角度
            var x0 = self.x + (self.outerRadius + 30) * Math.cos(textAngle * Math.PI / 180),
                y0 = self.y + (self.outerRadius + 30) * Math.sin(textAngle * Math.PI / 180);
            var valueText = new Konva.Text({
                 x: x0,
                 y: y0,
                 text: item.value * 100 + '%',
                 fill: item.color,
                 fontSize: 18
            });

            // 6.4 特殊情况的处理
            if(textAngle > 90 && textAngle < 270){
                 valueText.x(x0 - valueText.width());
            }
            self.valueTextGroup.add(valueText);

            // 6.5 创建区域中的内容
            var tempX = self.x + self.outerRadius + 200,
                 tempY = self.y + index * 30,
                 tempWidth = 60,
                 tempHeight = 20;
            var areaRect = new Konva.Rect({
                 x: tempX,
                 y: tempY,
                 width: tempWidth,
                 height: tempHeight,
                 fill: item.color
            });
            self.areaGroup.add(areaRect);

            var areaText = new Konva.Text({
                 x: tempX  + tempWidth +  10,
                 y: tempY,
                 text: item.name,
                 fill: item.color,
                 fontSize: 20
            });
            self.areaGroup.add(areaText);


            // 7. 更新起始角度
            beginAngle += tempAngle;
        });
    },

    // 执行动画
    playAnimation: function () {
        // 0. 备份指针
        var self = this;

        // 1. 初始状态 ---> 让所有的旋转的角度都为0
        if(self.animationIndex == 0){ // 保证第一次进来清除,后面不会清除
            this.wedgeGroup.getChildren().each(function (item, index) {
                item.angle(0);
            });
        }


        // 2. 结束的状态
        var wedge = this.wedgeGroup.getChildren()[this.animationIndex];
        wedge.to({
             angle: this.dataArray[this.animationIndex].value * 360,
             duration: this.dataArray[this.animationIndex].value,
             onFinish: function () {
                 // 让索引 ++
                 self.animationIndex += 1;
                 // 过滤
                 if(self.animationIndex >= self.dataArray.length){
                      self.animationIndex = 0;
                      return;
                 }

                 // 递归调用
                 self.playAnimation();
             }
        });

    }
};