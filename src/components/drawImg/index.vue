<template>
  <div style="position: relative;display: inline-block;" id="myDrawDom">
    <div class="menus" id="drawMain" ref="drawMain" :style="{left:toolLeft,top:toolTop}">
      <div class="menu-item">
        <span class="iconfont icon-tuozhuai1" ref="btnMove"></span>
      </div>
      <div class="menu-item" :class="{'active':config.curMenu=='square'}">
        <span class="iconfont icon-square-line" @click="config.curMenu='square'"></span>
        <div class="item-config" :class="{'active':config.curMenu=='square'}">
            <span class="size small" :class="{'active':config.square.size=='small'}"
                  @click="config.square.size='small'"></span>
          <span class="size normal" :class="{'active':config.square.size=='normal'}"
                @click="config.square.size='normal'"></span>
          <span class="size big" :class="{'active':config.square.size=='big'}"
                @click="config.square.size='big'"></span>
          <span class="color red" :class="{'active':config.square.color=='red'}"
                @click="config.square.color='red'"></span>
          <span class="color yellow" :class="{'active':config.square.color=='yellow'}"
                @click="config.square.color='yellow'"></span>
          <span class="color blue" :class="{'active':config.square.color=='blue'}"
                @click="config.square.color='blue'"></span>
          <span class="color green" :class="{'active':config.square.color=='green'}"
                @click="config.square.color='green'"></span>
          <span class="color black" :class="{'active':config.square.color=='black'}"
                @click="config.square.color='black'"></span>
        </div>
      </div>
      <div class="menu-item" :class="{'active':config.curMenu=='circle'}">
        <span class="iconfont icon-big-circle" @click="config.curMenu='circle'"></span>
        <div class="item-config" :class="{'active':config.curMenu=='circle'}">
            <span class="size small" :class="{'active':config.circle.size=='small'}"
                  @click="config.circle.size='small'"></span>
          <span class="size normal" :class="{'active':config.circle.size=='normal'}"
                @click="config.circle.size='normal'"></span>
          <span class="size big" :class="{'active':config.circle.size=='big'}"
                @click="config.circle.size='big'"></span>
          <span class="color red" :class="{'active':config.circle.color=='red'}"
                @click="config.circle.color='red'"></span>
          <span class="color yellow" :class="{'active':config.circle.color=='yellow'}"
                @click="config.circle.color='yellow'"></span>
          <span class="color blue" :class="{'active':config.circle.color=='blue'}"
                @click="config.circle.color='blue'"></span>
          <span class="color green" :class="{'active':config.circle.color=='green'}"
                @click="config.circle.color='green'"></span>
          <span class="color black" :class="{'active':config.circle.color=='black'}"
                @click="config.circle.color='black'"></span>
        </div>
      </div>
      <div class="menu-item" :class="{'active':config.curMenu=='line'}">
        <span class="iconfont icon-wujiantouzhixian" @click="config.curMenu='line'"></span>
        <div class="item-config" :class="{'active':config.curMenu=='line'}">
            <span class="size small" :class="{'active':config.line.size=='small'}"
                  @click="config.line.size='small'"></span>
          <span class="size normal" :class="{'active':config.line.size=='normal'}"
                @click="config.line.size='normal'"></span>
          <span class="size big" :class="{'active':config.line.size=='big'}"
                @click="config.line.size='big'"></span>
          <span class="color red" :class="{'active':config.line.color=='red'}"
                @click="config.line.color='red'"></span>
          <span class="color yellow" :class="{'active':config.line.color=='yellow'}"
                @click="config.line.color='yellow'"></span>
          <span class="color blue" :class="{'active':config.line.color=='blue'}"
                @click="config.line.color='blue'"></span>
          <span class="color green" :class="{'active':config.line.color=='green'}"
                @click="config.line.color='green'"></span>
          <span class="color black" :class="{'active':config.line.color=='black'}"
                @click="config.line.color='black'"></span>
        </div>
      </div>
      <div class="menu-item" :class="{'active':config.curMenu=='bolang'}">
        <span class="iconfont icon-huitu" style="margin-top: 0;" @click="config.curMenu='bolang'"></span>
        <div class="item-config" :class="{'active':config.curMenu=='bolang'}">
            <span class="size small" :class="{'active':config.bolang.size=='small'}"
                  @click="config.bolang.size='small'"></span>
          <span class="size normal" :class="{'active':config.bolang.size=='normal'}"
                @click="config.bolang.size='normal'"></span>
          <span class="size big" :class="{'active':config.bolang.size=='big'}"
                @click="config.bolang.size='big'"></span>
          <span class="color red" :class="{'active':config.bolang.color=='red'}"
                @click="config.bolang.color='red'"></span>
          <span class="color yellow" :class="{'active':config.bolang.color=='yellow'}"
                @click="config.bolang.color='yellow'"></span>
          <span class="color blue" :class="{'active':config.bolang.color=='blue'}"
                @click="config.bolang.color='blue'"></span>
          <span class="color green" :class="{'active':config.bolang.color=='green'}"
                @click="config.bolang.color='green'"></span>
          <span class="color black" :class="{'active':config.bolang.color=='black'}"
                @click="config.bolang.color='black'"></span>
        </div>
      </div>
      <div class="menu-item" :class="{'active':config.curMenu=='huabi'}">
        <span class="iconfont icon-huabi" @click="config.curMenu='huabi'"></span>
        <div class="item-config" :class="{'active':config.curMenu=='huabi'}">
            <span class="size small" :class="{'active':config.huabi.size=='small'}"
                  @click="config.huabi.size='small'"></span>
          <span class="size normal" :class="{'active':config.huabi.size=='normal'}"
                @click="config.huabi.size='normal'"></span>
          <span class="size big" :class="{'active':config.huabi.size=='big'}"
                @click="config.huabi.size='big'"></span>
          <span class="color red" :class="{'active':config.huabi.color=='red'}"
                @click="config.huabi.color='red'"></span>
          <span class="color yellow" :class="{'active':config.huabi.color=='yellow'}"
                @click="config.huabi.color='yellow'"></span>
          <span class="color blue" :class="{'active':config.huabi.color=='blue'}"
                @click="config.huabi.color='blue'"></span>
          <span class="color green" :class="{'active':config.huabi.color=='green'}"
                @click="config.huabi.color='green'"></span>
          <span class="color black" :class="{'active':config.huabi.color=='black'}"
                @click="config.huabi.color='black'"></span>
        </div>
      </div>
      <div class="menu-item" :class="{'active':config.curMenu=='wenzi'}">
        <span class="iconfont icon-wenzi" @click="config.curMenu='wenzi'"></span>
        <div class="item-config" :class="{'active':config.curMenu=='wenzi'}">
            <span class="size small" :class="{'active':config.wenzi.size=='14'}"
                  @click="config.wenzi.size='14'"></span>
          <span class="size normal" :class="{'active':config.wenzi.size=='16'}"
                @click="config.wenzi.size='16'"></span>
          <span class="size big" :class="{'active':config.wenzi.size=='18'}"
                @click="config.wenzi.size='18'"></span>
          <span class="color red" :class="{'active':config.wenzi.color=='red'}"
                @click="config.wenzi.color='red'"></span>
          <span class="color yellow" :class="{'active':config.wenzi.color=='yellow'}"
                @click="config.wenzi.color='yellow'"></span>
          <span class="color blue" :class="{'active':config.wenzi.color=='blue'}"
                @click="config.wenzi.color='blue'"></span>
          <span class="color green" :class="{'active':config.wenzi.color=='green'}"
                @click="config.wenzi.color='green'"></span>
          <span class="color black" :class="{'active':config.wenzi.color=='black'}"
                @click="config.wenzi.color='black'"></span>
        </div>
      </div>
      <div class="menu-item" :class="{'active':config.curMenu=='arrow'}">
        <img src="../../assets/img/arrow01.png" class="icon-img" crossOrigin id="img_arrow_01"
             @click="config.curMenu='arrow'" alt="">
        <img src="../../assets/img/arrow.png" class="icon-img" crossOrigin id="img_arrow"
             style="visibility: hidden;position: absolute;">
      </div>
      <div class="menu-item" :class="{'active':config.curMenu=='bomb'}">
        <img src="../../assets/img/bomb01.png" class="icon-img" @click="config.curMenu='bomb'" id="img_bomb_01">
        <img src="../../assets/img/bomb.png" class="icon-img" id="img_bomb"
             style="visibility: hidden;position: absolute;">
      </div>
      <div class="menu-item" :class="{'active':config.curMenu=='rubber'}">
        <span class="iconfont icon-xiangpica" @click="config.curMenu='rubber'"></span>
        <!--<el-button class="fr" @click="saveImg">保存图片</el-button>-->
      </div>
      <div class="menu-item">
        <span class="iconfont icon-chexiao" @click="chexiaoHandle"></span>
        <!--<el-button class="fr" @click="saveImg">保存图片</el-button>-->
      </div>
    </div>
    <!--<div>-->
    <div class="txt-main" ref="txtMain" id="txtMain" v-show="txtMain.isShow" @click.stop
         :style="{'left':(txtMain.left)+'px','top':(txtMain.top-1)+'px','color':txtMain.color,'font-size':txtMain.size+'px','max-width':txtMain.maxW+'px'}"
         style="border: 1px solid rgb(255, 30, 16);min-width: 40px;">
        <pre class="pre"
             style="display: inline-block;margin: 0;line-height: 22px;"
             :style="{'visibility':txtMain.isEdit?'hidden':'visible'}"><span>{{txtMain.text}}</span><br></pre>
      <pre class="pre" id="testWidth"
           style="display: inline-block;margin: 0;line-height: 22px; position: absolute;top: 0;left: 0;visibility: hidden"><span
        id="testWidthtext"></span><br></pre>
      <textarea class="inputTxt" ref="inputTxt" v-if="txtMain.isEdit" v-model="txtMain.text" @blur="textInputblur"
                :style="{}"></textarea>
    </div>
    <!---->
    <canvas id="draw_2d" style="line-height: 22px;display: block;">
      <span>不支持canvas浏览器</span>
    </canvas>
    <img src="" crossOrigin id="curImgData" style="display: none" alt="">
    <!--</div>-->
  </div>
</template>

<script>
  export default {
    // props:{
    //   imgUrl:'',
    // },
    data() {
      return {
        config: {
          // 方形
          square: {
            size: 'normal',
            color: 'red'
          },
          circle: {
            size: 'normal',
            color: 'red'
          },
          line: {
            size: 'normal',
            color: 'red'
          },
          huabi: {
            size: 'normal',
            color: 'red'
          },
          bolang: {
            size: 'normal',
            color: 'red'
          },
          wenzi: {
            size: '18',
            color: 'red'
          },
          curMenu: 'wenzi',
        },
        shapeConfig: {
          shape: '',
          size: '',
          color: '',
          startx: 0,
          endx: undefined,
          starty: 0,
          endy: undefined,
          x: [],
          y: []
        },
        shapes: [],
        myCanvas: undefined,
        my2D: undefined,
        imgUrl: '',
        saveUrl: '',
        imgData: '',
        isTextHander: false,
        txtMain: {
          isShow: false,
          isEdit: true,
          text: '',
          left: 0,
          top: 0,
          color: '',
          maxW: 40
        },
        width: 0,
        height: 0,
        toolLeft: '1225px',
        toolTop: '180px',
        dis: {
          right: 60
        },
        imgData: undefined
      }
    },
    watch: {
      $route() {

      }
    },
    created() {
    },
    methods: {
      initTools: function () {
        var oDiv = document.getElementById('drawMain');
        var btnmove = this.$refs.btnMove;
        btnmove.onmousedown = function (e) {
          console.log(oDiv);
          let disX = e.clientX - oDiv.offsetLeft;
          let disY = e.clientY - oDiv.offsetTop;
          document.onmousemove = function (e) {
            let slideLeft = e.clientX - disX;
            let slideTop = e.clientY - disY;

            if (slideLeft <= 0) {
              slideLeft = 0;
            }
            if (slideTop <= 0) {
              slideTop = 0;
            }
            if (window.innerHeight - oDiv.clientHeight <= slideTop) {
              slideTop = window.innerHeight - oDiv.clientHeight;
            }
            if (window.innerWidth - oDiv.clientWidth <= slideLeft) {
              slideLeft = window.innerWidth - oDiv.clientWidth;
            }
            console.log(window.innerHeight, slideTop)
            oDiv.style.left = slideLeft + 'px';
            oDiv.style.top = slideTop + 'px';
          }
          document.onmouseup = function () {
            document.onmousemove = null
            document.onmouseup = null
          }
        }
      },
      init: function (config) {
        this.imgUrl = config.img;
        this.shapes = config.shapes;
        this.toolTop = config.toolTop || '180px';
        if (config.dis) {
          this.dis = config.dis;
        }
        if (config.toolLeft) {
          this.toolLeft = config.toolLeft;
        }
        this.myCanvas = document.getElementById('draw_2d');

        this.my2D = this.myCanvas.getContext('2d');
        this.my2D.clearRect(0, 0, this.myCanvas.width, this.myCanvas.height);
        let that = this;

        var img = new Image();
        img.crossOrigin = '';
        img.onload = function () {

          if (config.width) {
            that.width = config.width;
            that.height = parseInt(config.width / (img.width / img.height));
          }
          else {
            that.width = img.width;
            that.height = img.height;
          }
          that.myCanvas.setAttribute('width', that.width);
          that.myCanvas.setAttribute('height', that.height);
          that.$emit('imgLoaded', {w: that.width, h: that.height});
          that.my2D.drawImage(this, 0, 0, that.width, that.height);
          that._drawImg(that);
          that.imgData = this;
          document.getElementById("curImgData").src = that.imgUrl;
        }
        img.src = this.imgUrl;

        this.myCanvas.onmousedown = function (e) {
          var oDiv = document.getElementById('txtMain');
          let disX = e.clientX;
          let disY = e.clientY;

          that.shapeConfig.shape = that.config.curMenu;
          that.shapeConfig.startx = e.offsetX;
          that.shapeConfig.starty = e.offsetY;
          that.shapeConfig.endx = undefined;
          that.shapeConfig.endy = undefined;

          if (that.shapeConfig.shape == 'rubber') {
            that._deletePicture(that, img);
            return;
          }
          var size = that.config[that.config.curMenu] ? that.config[that.config.curMenu].size : '';
          var color = that.config[that.config.curMenu] ? that.config[that.config.curMenu].color : '';
          that.shapeConfig.size = that._getShapeSize(size);
          that.shapeConfig.color = that._getShapeColor(color);

          //如果是任意线，创建该对象
          if (that.shapeConfig.shape == 'huabi') {
            that._drawParam(that, that.shapeConfig.startx, that.shapeConfig.starty, null, null);
            that.my2D.lineWidth = that.shapeConfig.size;
            that.my2D.strokeStyle = that.shapeConfig.color;
            that._createShape(that, that.config.curMenu, that.shapeConfig.startx, that.shapeConfig.starty, that.shapeConfig.endx, that.shapeConfig.endy)
            that.shapes[that.shapes.length - 1].x.push(that.shapeConfig.startx);
            that.shapes[that.shapes.length - 1].y.push(that.shapeConfig.starty);
          }

          if (that.shapeConfig.shape == 'wenzi') {
            if (that.txtMain.isShow) {
              that.textInputblur();
              that.isTextHander = true;
              setTimeout(() => {
                that.isTextHander = false;
              }, 200)
            }
            var index = 0;
            var isHave = false;
            for (var item of that.shapes) {
              if (item.shape == 'wenzi') {

                if (that.width - that.shapeConfig.startx < (40 + that.dis.right)) {
                  that.shapeConfig.startx = that.width - 40 - that.dis.right;
                }

                var cur_x = that.shapeConfig.startx;
                var cur_y = that.shapeConfig.starty;
                //item.starty-10 向上忽略10个像素
                if (item.startx <= cur_x && cur_x <= item.endx && (item.starty - 10) <= cur_y && cur_y <= item.endy) {
                  isHave = true;
                  break;
                }
              }
              index++;
            }
            // 不存在文字，就显示新的输入框 插入文字
            if (!isHave) {
              that.shapeConfig.text = '';
              that.txtMain.isEdit = true;
              that._showTxtMain(that);
              return;
            }
            else {
              that.txtMain.isEdit = false;
              var curShape = JSON.parse(JSON.stringify(that.shapes[index]));
              that.shapes.splice(index, 1);
              that.my2D.drawImage(img, 0, 0, that.width, that.height);
              that._drawImg(that);
              // 先展示出原先的位置
              that.txtMain.text = curShape.text || '';
              that.txtMain.isShow = true;
              that.txtMain.isEdit = false;
              that.txtMain.color = curShape.color;
              that.txtMain.left = curShape.startx;
              that.txtMain.top = curShape.starty;
              that.txtMain.size = curShape.size;
              that.txtMain.maxW = that.width - that.txtMain.left - that.dis.right;
              console.log(that.txtMain.maxW);
              // startx starty 记录原始位置
              that.shapeConfig.startx = curShape.startx;
              that.shapeConfig.starty = curShape.starty;
            }
          }
          that.imgData = that.my2D.getImageData(0, 0, that.myCanvas.width, that.myCanvas.height);
          document.onmousemove = function (e) {
            var endx = e.offsetX; // 鼠标落下时的X
            var endy = e.offsetY; // 鼠标落下时的Y
            var startx = that.shapeConfig.startx;
            var starty = that.shapeConfig.starty;
            if (that.config.curMenu == 'wenzi') {
              let slideLeft = e.clientX - disX;
              let slideTop = e.clientY - disY;
              that.txtMain.left = slideLeft + that.shapeConfig.startx;
              if (that.txtMain.left < 0) {
                that.txtMain.left = 0;
              }
              that.txtMain.top = slideTop + that.shapeConfig.starty;
              if (that.txtMain.top < 0) {
                that.txtMain.top = 0;
              }
            }
            if (that.shapeConfig.startx == null || that.config.curMenu == 'rubber' || that.config.curMenu == 'arrow' || that.config.curMenu == 'bomb' || that.config.curMenu == 'wenzi') {
              return;
            }
            var config = that._drawParam(that, that.shapeConfig.startx, that.shapeConfig.starty, endx, endy);
            if (that.shapeConfig.shape != 'huabi') {
              that.my2D.clearRect(0, 0, that.myCanvas.width, that.myCanvas.height);
              that.my2D.putImageData(that.imgData, 0, 0);
            }
            that._drawPicture(that, config);
          }

          document.onmouseup = function (e) {
            if (that.config.curMenu == 'wenzi') {
              that.txtMain.isEdit = true;
              that.txtMain.maxW = that.width - that.txtMain.left - that.dis.right;
              ;
              setTimeout(function () {
                that.$refs.inputTxt.focus();
              }, 100);
            }
            document.onmousemove = null;
            document.onmouseup = null;
            if (!that.shapeConfig.endx || !that.shapeConfig.endy) {
              return;
            }
            if (that.shapeConfig.startx == that.shapeConfig.endx) {
              return;
            }
            if (that.shapeConfig.shape == 'square'
              || that.shapeConfig.shape == 'circle' || that.shapeConfig.shape == 'line' ||
              that.shapeConfig.shape == 'bolang') {
              //创建该图形对象，并保存相关属性
              that._createShape(that, that.shapeConfig.shape, that.shapeConfig.startx, that.shapeConfig.starty, that.shapeConfig.endx, that.shapeConfig.endy)
              that.shapeConfig.endx = null;
            }
          }
        };
        this.myCanvas.onclick = function (e) {
          if (that.shapeConfig.shape == 'arrow') {
            var cur_img_01 = document.getElementById('img_arrow_01');
            var cur_img = document.getElementById('img_arrow');
            var s_x = parseInt(e.offsetX - cur_img_01.width / 2);
            var s_y = parseInt(e.offsetY - cur_img_01.height / 2);
            that.my2D.drawImage(cur_img, s_x, s_y, cur_img_01.width, cur_img_01.height);
            that._createIconShape(that, that.shapeConfig.shape, s_x, s_y, cur_img_01.width, cur_img_01.height)
          }
          if (that.shapeConfig.shape == 'bomb') {
            var cur_img_01 = document.getElementById('img_bomb_01');
            var cur_img = document.getElementById('img_bomb');
            var s_x = parseInt(e.offsetX - cur_img_01.width / 2);
            var s_y = parseInt(e.offsetY - cur_img_01.height / 2 - 6);
            that.my2D.drawImage(cur_img, s_x, s_y, cur_img_01.width, cur_img_01.height);
            that._createIconShape(that, that.shapeConfig.shape, s_x, s_y, cur_img_01.width, cur_img_01.height)
          }
          if (that.shapeConfig.shape == 'wenzi') {
            return;
            var index = 0;
            var isHave = false;
            for (var item of that.shapes) {
              if (item.shape == 'wenzi') {
                var cur_x = that.shapeConfig.startx;
                var cur_y = that.shapeConfig.starty;
                //item.starty-10 向上忽略10个像素
                if (item.startx <= cur_x && cur_x <= item.endx && (item.starty - 10) <= cur_y && cur_y <= item.endy) {
                  isHave = true;
                  break;
                }
              }
              index++;
            }
            if (!isHave) {
              that.shapeConfig.text = '';
              // that.txtMain.isEdit = true;
              that._showTxtMain(that);
              return;
            }
            var curShape = JSON.parse(JSON.stringify(that.shapes[index]));
            that.shapes.splice(index, 1);
            that.my2D.drawImage(img, 0, 0, that.width, that.height);
            that._drawImg(that);
            that.shapeConfig.text = curShape.text;
            that.shapeConfig.color = curShape.color;
            that.shapeConfig.size = curShape.size;
            that.shapeConfig.startx = curShape.startx;
            that.shapeConfig.starty = curShape.starty;
            that._showTxtMain(that);
          }
        }
      },
      _drawImg: function (that) {
        if (that.shapes.length == 0) {
          return;
        }
        var cxt = that.my2D;
        var shapes = that.shapes;
        for (var j in shapes) {
          cxt.lineWidth = shapes[j].size;
          cxt.strokeStyle = shapes[j].color;
          if (shapes[j].shape == 'huabi') {
            cxt.beginPath();
            var k;
            for (k = 0; k < shapes[j].x.length - 1; k++) {
              cxt.beginPath();
              cxt.moveTo(shapes[j].x[k], shapes[j].y[k]);
              cxt.lineTo(shapes[j].x[k + 1], shapes[j].y[k + 1]);
              cxt.stroke();
              cxt.closePath();
            }
          }
          else {
            that._drawPicture(that, shapes[j]);
          }
        }
      },
      _deletePicture: function (that, bgImg) {
        function judgeError(num) {
          switch (num) {
            case 1:
              return 2;
            case 3:
              return 2;
            case 5:
              return 3;
            case 10:
              return 4;
            case 15:
              return 8;
            case 20:
              return 11;
          }
        }

        var cxt = that.my2D;
        var canvas = that.myCanvas;
        var shapes = that.shapes;
        var startX = that.shapeConfig.startx;
        var startY = that.shapeConfig.starty;
        cxt.clearRect(0, 0, canvas.width, canvas.height);	// 清除画布
        if (bgImg) {
          cxt.drawImage(bgImg, 0, 0, that.width, that.height);
        }
        var list = new Array();// 用list记录需要删除的对象的下标
        var current_size = cxt.lineWidth;// 用current_size记录当前的lineWidth
        var hasFinde = false;
        for (var j in shapes) {
          var isPointIn = 0;// 标志该点是否存在当前对象中
          var Error = judgeError(shapes[j].size);
          switch (shapes[j].shape) {
            case 'line':
              //判断点到直线的距离
              var a = shapes[j].endy - shapes[j].starty;
              var b = shapes[j].startx - shapes[j].endx;
              var c = -shapes[j].endy * shapes[j].startx + shapes[j].endx * shapes[j].starty;
              var distance = Math.pow((a * startX + b * startY + c), 2) / (Math.pow(a, 2) + Math.pow(b, 2));
              //如果该距离小于2，则视为该点在直线上，删除该对象，否则画出该直线
              if (distance < (Error * Error)) {
                isPointIn = 1;
                break;
              }
              isPointIn = 0;
              break;
            case 'square'://矩形
              var y1 = Math.max(shapes[j].endy, shapes[j].starty);
              var y2 = Math.min(shapes[j].endy, shapes[j].starty);
              var x1 = Math.max(shapes[j].startx, shapes[j].endx);
              var x2 = Math.min(shapes[j].endx, shapes[j].startx);
              if ((x1 <= startX + Error && x1 >= startX - Error) || (x2 <= startX + Error && x2 >= startX - Error)) {
                if (startY >= y2 - Error && startY <= y1 + Error) {
                  isPointIn = 1;
                  break;
                }
              }
              if ((y1 <= startY + Error && y1 >= startY - Error) || (y2 <= startY + Error && y2 >= startY - Error)) {
                if (startX >= x2 - Error && startX <= x1 + Error) {
                  isPointIn = 1;
                  break;
                }
              }
              isPointIn = 0;
              break;
            case 'huabi':
              cxt.beginPath();
              var k;
              //依次取出任意线轨迹中的相邻两点，并且以这两点为对角顶点，做矩形
              for (k = 0; k < shapes[j].x.length - 1; k++) {
                var y1 = Math.max(shapes[j].y[k], shapes[j].y[k + 1]);
                var y2 = Math.min(shapes[j].y[k], shapes[j].y[k + 1]);
                var x1 = Math.max(shapes[j].x[k], shapes[j].x[k + 1]);
                var x2 = Math.min(shapes[j].x[k], shapes[j].x[k + 1]);
                cxt.rect(shapes[j].x[k], shapes[j].y[k], shapes[j].x[k + 1]
                  - shapes[j].x[k], shapes[j].y[k + 1] - shapes[j].y[k]);
                //如果该点在这个矩形中，则视为该点在这个对象上，删除对象
                if (startX <= x1 && startX >= x2 && startY <= y1 && startY >= y2) {
                  k = -1;
                  break;
                }
                if (startX - Error < x1 && startX + Error > x2 && startY - Error < y1 && startY + Error > y2) {
                  k = -1;
                  break;
                }
              }
              if (k == -1) {
                cxt.closePath();
                isPointIn = 1;
                break;
              }
              //该点不在对象上，设置当前画布属性与该对象一致，画出该任意线
              else {
                isPointIn = -1;
                cxt.lineWidth = shapes[j].size;
                cxt.strokeStyle = shapes[j].color;
                for (k = 0; k < shapes[j].x.length - 1; k++) {
                  cxt.beginPath();
                  cxt.moveTo(shapes[j].x[k], shapes[j].y[k]);
                  cxt.lineTo(shapes[j].x[k + 1], shapes[j].y[k + 1]);
                  cxt.stroke();
                  cxt.closePath();
                }
              }
              break;
            case 'circle':
              var x = shapes[j].startx + (shapes[j].endx - shapes[j].startx) / 2;
              var y = shapes[j].starty + (shapes[j].endy - shapes[j].starty) / 2;
              var a = Math.abs(shapes[j].startx - x);
              var b = Math.abs(shapes[j].starty - y);
              var x1 = (startX - x);
              var y1 = (startY - y);
              var bizhi = (Math.pow(x1, 2) / Math.pow(a, 2)) + (Math.pow(y1, 2) / Math.pow(b, 2));
              if (1.2 > bizhi > 0.8) {
                isPointIn = 1
              }
              else {
                isPointIn = 0
              }
              break;
            case 'bolang':
              if (shapes[j].startx <= startX && startX <= shapes[j].endx && shapes[j].starty - 4 <= startY && startY <= shapes[j].starty + 4) {
                isPointIn = 1
                break;
              }
              else {
                isPointIn = 0
              }
              break;
            case 'wenzi':
              if (shapes[j].startx <= startX && startX <= shapes[j].endx && shapes[j].starty <= startY && startY <= shapes[j].endy) {
                isPointIn = 1
                break;
              } else {
                isPointIn = 0
              }
              break;
            case 'arrow':
            case 'bomb':
              if (shapes[j].startx <= startX && startX <= (shapes[j].startx + shapes[j].width) && shapes[j].starty <= startY && startY <= (startY + shapes[j].height)) {
                isPointIn = 1
                break;
              } else {
                isPointIn = 0
              }
              break;
          }
          //如果该图形不是任意线，且该点不在对象上，设置当前画布属性与该对象一致，画出该图形
          if ((isPointIn == 0 && shapes[j].shape != 'huabi') || hasFinde) {
            cxt.lineWidth = shapes[j].size;
            cxt.strokeStyle = shapes[j].color;
            var config = JSON.parse(JSON.stringify(shapes[j]));
            that._drawPicture(that, config);
          }
          if (isPointIn == 1 && hasFinde == false) {
            list.push(j);
            hasFinde = true;
          }
        }
        //删除该点所经过的对象
        for (var k = 0; k < list.length; k++) {
          var a = list[k] - k;
          shapes.splice(a, 1);
        }
        //恢复当前画布属性到使用橡皮擦之前
        cxt.strokeStyle = that.shapeConfig.color;
        cxt.lineWidth = current_size;
      },
      _createShape: function (that, shape, startx, starty, endx, endy) {
        var color = that.my2D.strokeStyle.toString();
        var size = that.my2D.lineWidth;
        that.shapes[that.shapes.length] = {
          "shape": shape,
          "startx": startx,
          "endx": endx,
          "starty": starty,
          "endy": endy,
          "color": color,
          "size": size,
          "x": [],
          "y": [],
        };
      },
      _createIconShape: function (that, shape, startx, starty, width, height) {
        that.shapes[that.shapes.length] = {
          "shape": shape,
          "startx": startx,
          "starty": starty,
          "width": width,
          "height": height,
        };
      },
      _drawPicture: function (that, config) {
        that.my2D.lineWidth = config.size;
        that.my2D.strokeStyle = config.color;
        if (config.shape == 'line') {
          that.my2D.beginPath();
          that.my2D.moveTo(config.startx, config.starty);
          that.my2D.lineTo(config.endx, config.endy);
          that.my2D.stroke();
          that.my2D.closePath();
        }
        else if (config.shape == 'square') {
          that.my2D.beginPath();
          that.my2D.rect(config.startx, config.starty, config.endx - config.startx, config.endy - config.starty);
          that.my2D.stroke();
          that.my2D.closePath();
        }
        else if (config.shape == 'huabi') {          //画任意线
          that.my2D.beginPath();
          that.my2D.lineJoin = "round";
          that.my2D.moveTo(config.startx, config.starty);
          that.my2D.lineTo(config.endx, config.endy);
          that.my2D.stroke();
          that.my2D.closePath();
          that.shapeConfig.startx = config.endx;
          that.shapeConfig.starty = config.endy;
          that.shapes[that.shapes.length - 1].x.push(config.endx);
          that.shapes[that.shapes.length - 1].y.push(config.endy);
        }
        else if (config.shape == 'circle') {
          var x = config.startx + (config.endx - config.startx) / 2;
          var y = config.starty + (config.endy - config.starty) / 2;
          var a = Math.abs(config.startx - x);
          var b = Math.abs(config.starty - y);
          that._bezierEllipse2(that.my2D, x, y, a, b)
        }
        else if (config.shape == 'bolang') {
          that.my2D.beginPath();
          that.my2D.moveTo(config.startx, config.starty);
          for (var i = config.startx; i < config.endx; i += 1) {
            var y = Math.sin(i / 3) * 3 + config.starty;
            that.my2D.lineTo(i, y);
          }
          that.my2D.stroke();
          that.my2D.closePath();
        }
        else if (config.shape == 'wenzi') {
          that.my2D.beginPath();
          that.my2D.font = 'normal normal 400 ' + config.size + 'px Helvetica Neue';
          that.my2D.textBaseline = "top";
          that.my2D.fillStyle = config.color;
          var indexLine = 0;
          for (var txt of config.text.split('\n')) {
            var dis = 2;
            if (this.shapeConfig.size == 14) {
              dis = 4;
            }
            else if (this.shapeConfig.size == 16) {
              dis = 4;
            }
            else if (this.shapeConfig.size == 18) {
              dis = 2;
            }
            that.my2D.fillText(txt, config.startx, (indexLine * 22) + config.starty + dis);
            indexLine++;
          }
          that.my2D.closePath();
        }
        else if (config.shape == 'arrow') {
          that.my2D.beginPath();
          var cur_img = document.getElementById('img_arrow');
          that.my2D.drawImage(cur_img, config.startx, config.starty, config.width, config.height);
          that.my2D.closePath();
        }
        else if (config.shape == 'bomb') {
          that.my2D.beginPath();
          var cur_img = document.getElementById('img_bomb');
          that.my2D.drawImage(cur_img, config.startx, config.starty, config.width, config.height);
          that.my2D.closePath();
        }
      },
      _bezierEllipse2: function (ctx, x, y, a, b) {
        ctx.beginPath();
        var k = .5522848,
          ox = a * k, // 水平控制点偏移量
          oy = b * k; // 垂直控制点偏移量</p> <p> ctx.beginPath();
        //从椭圆的左端点开始顺时针绘制四条三次贝塞尔曲线
        ctx.moveTo(x - a, y);
        ctx.bezierCurveTo(x - a, y - oy, x - ox, y - b, x, y - b);
        ctx.bezierCurveTo(x + ox, y - b, x + a, y - oy, x + a, y);
        ctx.bezierCurveTo(x + a, y + oy, x + ox, y + b, x, y + b);
        ctx.bezierCurveTo(x - ox, y + b, x - a, y + oy, x - a, y);
        ctx.closePath();
        ctx.stroke();
      },
      _drawParam: function (that, startx, starty, endx, endy) {
        that.shapeConfig.shape = that.config.curMenu;
        that.shapeConfig.size = that._getShapeSize(that.config[that.config.curMenu].size);
        that.shapeConfig.color = that._getShapeColor(that.config[that.config.curMenu].color);
        that.shapeConfig.startx = startx;
        that.shapeConfig.starty = starty;
        that.shapeConfig.endx = endx;
        that.shapeConfig.endy = endy;
        return that.shapeConfig;
      },
      _getShapeSize: function (size) {
        switch (size) {
          case 'small':
            return 1;
          case 'normal':
            return 3;
          case 'big':
            return 5
          default:
            return size;
        }
      },
      _getShapeColor: function (color) {
        switch (color) {
          case 'red':
            return '#ff1e10';
          case 'yellow':
            return '#ffbe00';
          case 'blue':
            return '#1a9bff';
          case 'green':
            return '#1aad19';
          case 'black':
            return '#4d4d4d';
        }
      },
      _showTxtMain: function (that) {
        if (that.width - that.shapeConfig.startx < (40 + that.dis.right)) {
          that.shapeConfig.startx = that.width - 40 - that.dis.right;
        }
        that.txtMain.text = that.shapeConfig.text || '';
        that.txtMain.isShow = true;
        that.txtMain.color = that.shapeConfig.color;
        that.txtMain.left = that.shapeConfig.startx;
        that.txtMain.top = that.shapeConfig.starty;
        that.txtMain.size = that.shapeConfig.size;
        that.txtMain.maxW = that.width - that.shapeConfig.startx - that.dis.right;
        if (that.txtMain.isEdit == true) {
          setTimeout(function () {
            that.$refs.inputTxt.focus();
          }, 100);
        }
      },
      saveImg: function () {
        console.log(this.shapeConfig.shape, this.txtMain)
        var base64Data = this.myCanvas.toDataURL('image/png');
      },
      textInputblur: function () {
        if (this.isTextHander == true)
          return;
        var textList = [];
        var lineList = this.txtMain.text.split('\n');
        for (var line of lineList) {
          this.txtMain.text = line;
          document.getElementById('testWidthtext').innerHTML = line;
          var width = this.txtMain.maxW - 2;
          var linewidth = document.getElementById('testWidth').getBoundingClientRect().width;
          // 需要换行
          if (linewidth >= width) {
            var curText = '';
            for (var txt of line) {
              document.getElementById('testWidthtext').innerHTML = curText + txt;
              linewidth = document.getElementById('testWidth').getBoundingClientRect().width;
              if (linewidth >= width) {
                textList.push(curText);
                curText = txt;
              }
              else {
                curText += txt;
              }
            }
            textList.push(curText);
          }
          else {
            textList.push(line);
          }
          document.getElementById('testWidthtext').innerHTML = '';
        }
        this.txtMain.text = textList.join('\n');
        if (this.shapeConfig.shape == 'wenzi' && this.txtMain.isShow == true && this.txtMain.text != '') {
          var w = this.$refs.txtMain.offsetWidth;
          var h = this.$refs.txtMain.offsetHeight;
          this.my2D.font = 'normal normal 400 ' + this.shapeConfig.size + 'px sans-serif';
          this.my2D.fillStyle = this.shapeConfig.color;
          this.my2D.textBaseline = "top";
          var indexLine = 0;
          for (var txt of this.txtMain.text.split('\n')) {
            var dis = 2;
            if (this.shapeConfig.size == 14) {
              dis = 4;
            }
            else if (this.shapeConfig.size == 16) {
              dis = 4;
            }
            else if (this.shapeConfig.size == 18) {
              dis = 2;
            }
            this.my2D.fillText(txt, this.txtMain.left, (indexLine * 22) + this.txtMain.top + dis);
            indexLine++;
          }
          this.shapes[this.shapes.length] = {
            "shape": this.shapeConfig.shape,
            "color": this.txtMain.color,
            "size": this.txtMain.size,
            "startx": this.txtMain.left,
            "starty": this.txtMain.top,
            "endx": this.txtMain.left + w,
            "endy": this.txtMain.top + h,
            "text": this.txtMain.text,
          };
        }
        this.txtMain.isShow = false;
        this.txtMain.text = '';
      },
      getDrawData: function () {
        var base64Data = this.myCanvas.toDataURL('image/png');
        var data = {shapes: this.shapes, base64Data: base64Data};
        return data;
      },
      chexiaoHandle: function () {
        if (this.shapes.length > 0) {
          this.shapes.splice(this.shapes.length - 1, 1);
          this.my2D.clearRect(0, 0, this.myCanvas.width, this.myCanvas.height);
          this.my2D.drawImage(document.getElementById("curImgData"), 0, 0, this.width, this.height);
          this._drawImg(this);
        }
      }
    },
    mounted() {
      this.initTools();
    },
    beforeDestroy() {
    }
  }
</script>

<style lang="scss" scoped>
  .menus {
    position: fixed;
    z-index: 9999;
    background: #f3f2f2;
    left: 1255px;
    top: 180px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;

    .menu-item {
      padding: 5px 10px;
      position: relative;
      z-index: 9999;
      .item-config {
        display: none;
        flex-direction: column;
        width: 38px;
        position: absolute;
        background: #ffffff;
        border-radius: 5px;
        border: 1px solid #ddd;
        align-items: center;
        left: 48px;
        top: -95px;
        span {
          margin: 6px auto;
        }
        .size {
          border-radius: 50%;
          background: #c6c6c6;
          cursor: pointer;
          &.small {
            width: 6px;
            height: 6px;
          }
          &.normal {
            width: 9px;
            height: 9px;
          }
          &.big {
            width: 12px;
            height: 12px;
          }
          &.active, &:hover {
            background: #00be00;
          }
        }
        .color {
          display: block;
          width: 7px;
          height: 7px;
          border: 4px solid transparent;
          cursor: pointer;
          box-sizing: content-box;
          &.red {
            background: #ff1e10;
            border-color: #ff1e10;
          }
          &.yellow {
            background: #ffbe00;
            border-color: #ffbe00;
          }
          &.blue {
            background: #1a9bff;
            border-color: #1a9bff;
          }
          &.green {
            background: #1aad19;
            border-color: #1aad19;
          }
          &.black {
            background: #4d4d4d;
            border-color: #4d4d4d;
          }
          &:hover, &.active {
            background: #fff;
          }
        }
        &:before, &:after {
          content: ' ';
          position: absolute;
          border-left: 8px solid transparent;
          border-top: 8px solid transparent;
          border-right: 8px solid #d0d0d0;
          border-bottom: 8px solid transparent;
          left: -7px;
          top: 50%;
          margin-left: -10px;
        }
        &:after {
          border-right: 8px solid #fff;
          left: -6px;
        }
        &.active {
          display: flex;
        }
      }
      :hover {
        color: #545454;
      }
      .icon-img {
        cursor: pointer;
        width: 28px;
        /*height: 37px;*/
      }
      &.active {
        background: #ebeaea;
      }
    }
    .iconfont, .el-icon-rank {
      font-size: 28px;
      color: #8b8b8b;
      cursor: pointer;
    }
  }

  .txt-main {
    position: absolute;
    .inputTxt, pre {
      padding: 5px;
      background: transparent;
      font-family: sans-serif;
      white-space: pre-wrap;
      word-wrap: break-word;
      margin: 0;
      padding: 0;
      color: inherit;
      font-size: inherit;
      min-width: 40px;
      outline: 0;
      border: 0;
      word-break: break-all;
      min-width: 10px;
    }
    .inputTxt {
      overflow: hidden;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      resize: none;
      width: 100%;
      line-height: 22px;
      display: block;
    }
    pre {
      display: block;
      visibility: hidden;
    }

  }

</style>
