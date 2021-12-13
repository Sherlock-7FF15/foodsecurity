var diviceRatio = 1;
function TimeScaleChart(canvas, options) {
    this.canvas = canvas;
    this.options = options
    this.ctx = canvas.getContext("2d");
    this.inited = false;
    this.touchPoint;
    this.value;
    this.canTouch = true;
    this.options.chooseIndex = options.chooseIndex * 2 - 1;
    //生成x轴刻度点数组
    this.scaleXpointArr = new Array();
    this.perStep = this.canvas.width / 24;
    for (var i = 0; i < 23; i++) {
        this.scaleXpointArr.push((i + 1) * this.perStep);
    }
 
    //注册touchend事件，用于监测点击事件
    var _this = this;
	
    this.canvas.addEventListener('touchend', function(eve) {
        var tempLength = 100000;
        var tempIndex = 0;
        var selectX = eve.changedTouches[0].clientX;
        for (var i = 0; i < _this.scaleXpointArr.length; i++) {
            var tmpValue = Math.abs(_this.scaleXpointArr[i] - selectX * diviceRatio);
            if (tmpValue <= tempLength) {
                tempLength = tmpValue;
                tempIndex = i;
            }
        }
        options.chooseIndex = tempIndex + 1;
        _this.update(options);
        _this.options.callback.call((tempIndex + 1 + 1) / 2);
    });
    
    //注册touchmove事件，用于监测滑动事件
    this.canvas.addEventListener('touchmove', function(evt) {
        var tempLength = 100000;
        var tempIndex = 0;
        var selectX = evt.changedTouches[0].clientX;
        for (var i = 0; i < _this.scaleXpointArr.length; i++) {
            var tmpValue = Math.abs(_this.scaleXpointArr[i] - selectX * diviceRatio);
            if (tmpValue <= tempLength) {
                tempLength = tmpValue;
                tempIndex = i;
            }
        }
        options.chooseIndex = tempIndex + 1;
        _this.update(options);
    });
}

// 定义init()方法，用于初始化操作
TimeScaleChart.prototype.init = function() {
    var _this = this;
    _this.draw();
    this.inited = true;
}

// 定义update()方法，用于点击事件的更新操作
TimeScaleChart.prototype.update = function(options) {
    this.options = options;
    if (this.inited) {
        this.init();
    }
}


TimeScaleChart.prototype.draw = function() {
    var _this = this;
    //横线距底部偏移量
    var offsetY = 13 * diviceRatio;
 
    this.ctx.save();
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = this.options.backgroundColor;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    //横线
    this.ctx.beginPath();
    this.ctx.strokeStyle = this.options.lineColors[0];
    this.ctx.lineWidth = 1 * diviceRatio;
    this.ctx.moveTo(0, this.canvas.height - offsetY);
    this.ctx.lineTo(this.canvas.width, this.canvas.height - offsetY)
    this.ctx.stroke();
 
    for (var i = 0; i < this.scaleXpointArr.length; i++) {
        //刻度
        this.ctx.beginPath();
        this.ctx.strokeStyle = this.options.lineColors[1];
        this.ctx.lineWidth = 1 * diviceRatio;
        //整数刻度
        var scaleY = 20 * diviceRatio;
        if (i % 2) {
            //半数刻度
            scaleY = 10 * diviceRatio;
        }
        this.ctx.moveTo(this.scaleXpointArr[i], this.canvas.height - offsetY - scaleY);
        this.ctx.lineTo(this.scaleXpointArr[i], this.canvas.height - offsetY)
        this.ctx.stroke();
        //文字
        if (i % 2 == 0) {
            this.ctx.fillStyle = this.options.labelColors[0];
            // this.ctx.font = this.options.fontSize + this.options.fontName;
            var fontSize1 = 8 * diviceRatio;
            //字向下偏移量
            var font_offsetY = fontSize1 + 1 * diviceRatio;
            this.ctx.font = fontSize1 + "px Arial";
            var text1 = i / 2 + 1;
            var textWidth1 = this.ctx.measureText(text1).width;
            var textHeight1 = this.ctx.measureText(text1).height;
            this.ctx.fillText(text1, this.scaleXpointArr[i] - textWidth1, (this.canvas.height - offsetY + font_offsetY));
 
            var fontSize2 = 6 * diviceRatio;
            this.ctx.font = fontSize2 + "px Arial";
            var text2 = "月";
            var textWidth2 = this.ctx.measureText(text2).width;
            this.ctx.fillText(text2, this.scaleXpointArr[i], (this.canvas.height - offsetY + font_offsetY));
        }
    }
    //大屏手机加载3倍图
    if (diviceRatio > 2) {
        _this.options.chooseImg = _this.options.chooseImg.replace('@2x', '@3x');
    }
    //选中图片
    preImage(_this.options.chooseImg, function() {
        //此处的this指img，实际月份等于_this.options.chooseIndex * 2 - 1
        _this.ctx.drawImage(this, (_this.options.chooseIndex) * _this.perStep - this.width / 2, _this.canvas.height - offsetY - this.height);
    });
}


function preImage(url, callback) { //图片异步加载，加载完后再canvas中画出
    var img = new Image(); //创建一个Image对象，实现图片的预下载  
    img.src = url;
    if (img.complete) { // 如果图片已经存在于浏览器缓存，直接调用回调函数  
        callback.call(img);
        return; // 直接返回，不用再处理onload事件  
    }
    img.onload = function() { //图片下载完毕时异步调用callback函数。  
        callback.call(img); //将回调函数的this替换为Image对象  
    };
}
