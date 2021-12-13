<script>
        var app = new Vue({
            el: '#app',
            data: {
                width:700,
                height:700,
                tagsNum:20,
                RADIUS:200,
                speedX:Math.PI/360,
                speedY:Math.PI/360,
                tags: []
            },
            computed:{
                CX(){
                    return this.width/2;
                },
                CY(){
                    return this.height/2;
                }
            },
            created(){//初始化标签位置
                let tags=[];
                for(let i = 0; i < this.tagsNum; i++){
                    let tag = {};
                    let k = -1 + (2 * (i + 1) - 1) / this.tagsNum;
                    let a = Math.acos(k);
                    let b = a * Math.sqrt(this.tagsNum * Math.PI);
                    tag.text = i + 'tag';
                    tag.x = this.CX +  this.RADIUS * Math.sin(a) * Math.cos(b);
                    tag.y = this.CY +  this.RADIUS * Math.sin(a) * Math.sin(b); 
                    tag.z = this.RADIUS * Math.cos(a);
                    tag.href = 'https://imgss.github.io';
                    tags.push(tag);
                }
                this.tags = tags;
            },
            mounted(){//使球开始旋转
                setInterval(() => {
                    this.rotateX(this.speedX);
                    this.rotateY(this.speedY);
                }, 17)
            },
            methods: {
                rotateX(angleX){
                    var cos = Math.cos(angleX);
                    var sin = Math.sin(angleX);
                    for(let tag of this.tags){
                        var y1 = (tag.y- this.CY) * cos - tag.z * sin  + this.CY;
                        var z1 = tag.z * cos + (tag.y- this.CY) * sin;
                        tag.y = y1;
                        tag.z = z1;
                    } 
                },
                rotateY(angleY){
                    var cos = Math.cos(angleY);
                    var sin = Math.sin(angleY);
                    for(let tag of this.tags){
                        var x1 = (tag.x - this.CX) * cos - tag.z * sin + this.CX;
                        var z1 = tag.z * cos + (tag.x-this.CX) * sin;
                        tag.x = x1;
                        tag.z = z1;
                    } 
                },
                listener(event){//响应鼠标移动
                    var x = event.clientX - this.CX;
                    var y = event.clientY - this.CY;
                    this.speedX = x*0.0001>0 ? Math.min(this.RADIUS*0.00002, x*0.0001) : Math.max(-this.RADIUS*0.00002, x*0.0001);
                    this.speedY = y*0.0001>0 ? Math.min(this.RADIUS*0.00002, y*0.0001) : Math.max(-this.RADIUS*0.00002, y*0.0001); 
                }
              }
          })
    </script>