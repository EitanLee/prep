let sw=20,//一个格子的宽
    sh=20,//一个格子的高
    tr=30,//行数
    td=30;//列数
let snake=null,//蛇的实例
    food=null;//食物的实例
function Square(a,b,classname){
    //0,0    简洁点的坐标 0,0
    //20,0               1,0
    //40,0               2,0
    this.x=a*sw;
    this.y=b*sh;
    this.class=classname;
    this.viewContent=document.createElement('div');//格子对应的DOM
    this.viewContent.className=this.class;
    this.parent=document.getElementById('snakeWrap');//格子的父级
}
//添加create方法,创建格子
Square.prototype.create=function(){
    this.viewContent.style.position='absolute'//格子(div)的定位
    this.viewContent.style.width=sw+'px'//格子的宽
    this.viewContent.style.height=sh+'px'//格子的高
    this.viewContent.style.left=this.x+'px'//格子的横坐标
    this.viewContent.style.top=this.y+'px'//格子的纵坐标
//将新建的格子(div)添加到父元素中
    this.parent.appendChild(this.viewContent)
}
//添加remove方法,移除格子
Square.prototype.remove=function(){
    this.parent.removeChild(this.viewContent)
}

//蛇的信息
function Snake(){
    this.head=null;//存储蛇头的信息
    this.tail=null;//存储蛇尾的信息;
    this.pos=[];//存储蛇的每个方块的位置

    this.directionNum={//存储蛇走的方向
        left:{
            x:-1,
            y:0,
            rotate:180//蛇头不同方向图片旋转的度数
        },
        right:{
            x:1,
            y:0,
            rotate:0
        },
        up:{
            x:0,
            y:-1,
            rotate:-90
        },
        down:{
            x:0,
            y:1,
            rotate:90
        }
    }
}
//添加蛇的初始化方法
Snake.prototype.init=function(){
    //创建蛇头
    let  snakeHead = new Square(2,0,'snakeHead');//蛇头实例化.传入初始位置和样式
    snakeHead.create();//调用create方法创建蛇头

    this.head = snakeHead;//存蛇头信息
    this.pos.push([2,0]);//存蛇头位置
    
    //创建身体1
    let snakeBody1 = new Square(1,0,'snakeBody');//蛇头实例化.传入初始位置和样式
    snakeBody1.create();//调用create方法创建蛇身体1
    this.pos.push([1,0]);//把身体1的位置存起来

    //创建身体2
    let snakeBody2 = new Square(0,0,'snakeBody');//蛇头实例化.传入初始位置和样式
    snakeBody2.create();//调用create方法创建蛇身体2
    this.tail=snakeBody2;//把蛇尾的信息存起来
    this.pos.push([0,0]);//把蛇身体2的位置存起来

    //将三部分连接成链表关系
    snakeHead.last=null;
    snakeHead.next=snakeBody1;
    snakeBody1.last=snakeHead;
    snakeBody1.next=snakeBody2;
    snakeBody2.last=snakeBody1;
    snakeBody2.next=null;
    
    //设置一个direction属性,表示蛇前进的方向
    this.direction=this.directionNum.right;//默认为向右
};
//这个方法获得蛇头前进的下一个格子是什么(食物,墙还是普通格子),然后根据不同元素做不同动作
Snake.prototype.getNextPos=function(){
    //首先要得到下一个格子的坐标
    let next = [
        //蛇头当前横坐标+direction属性(下一个方向)的x值
        this.head.x/sw+this.direction.x,
        //蛇头当前的纵坐标+direction属性(下一个方向)的y值
        this.head.y/sh+this.direction.y
    ]      
    
    //下一个格子是自己,代表撞到自己,游戏结束
    var selfBody = false; //是否撞到自己
    this.pos.forEach(function(value){
        if(value[0]==next[0]&&value[1]==next[1]){
            //如果下一个格子的坐标和暂存身体的pos数组的某一个坐标相等,代表撞到了自己
            selfBody = true;
        }
    });
    if(selfBody){
        console.log('撞到自己了');
        this.strategies.die.call(this)
        return;
    }
    //下一个格子是墙,游戏结束
    if(next[0]<0||next[1]<0||next[0]>td-1||next[1]>tr-1){
        //根据下一个格子的横纵坐标判断是不是墙
        console.log("撞墙了");
        this.strategies.die.call(this);
        return;
    }
    
    //下一个格子是食物,吃
    if(food&&food.pos[0]==next[0]&&food.pos[1]==next[1]){
        //判断蛇头是否碰到食物,true就是碰到
        this.strategies.eat.call(this);
        return;
    }
    //下一个格子是空格,前进
    this.strategies.move.call(this);
}
//处理前进一格后要做的事情
Snake.prototype.strategies={
    move:function(format){ //这个参数用于决定要不要删除最后面的格子,当传入参数表示eat
        //掐头去尾,创建一个新的身体,在蛇头的位置,
        var newBody=new Square(this.head.x/sw,this.head.y/sh,'snakeBody');
        //更新链表
        newBody.next=this.head.next;
        newBody.next.last=newBody;
        newBody.last=null;
        //将现在位置蛇头移除
        this.head.remove();
        //显示新的身体
        newBody.create();

        //创建新的蛇头
        var newHead=new Square(this.head.x/sw+this.direction.x,this.head.y/sh+this.direction.y,'snakeHead');
        //更新链表
        newHead.next = newBody;
        newHead.last=null;
        newHead.next.last = newBody;
        newHead.viewContent.style.transform='rotate('+this.direction.rotate+'deg)';
        newHead.create();

        //蛇身上每个坐标的更新(其实是插入新蛇头坐标到数组[0])
        this.pos.splice(0,0,[this.head.x/sw+this.direction.x,this.head.y/sh+this.direction.y])
        //更新this.head;
        this.head=newHead;


        if(!format){ //如果format的值是false,表示需要删除(不是eat)
            this.tail.remove();
            this.tail=this.tail.last;
            this.pos.pop();
        }
        
    },
    eat:function(){
        this.strategies.move.call(this,true);
        createFood();
        game.score++;
    },
    die:function(){
        game.over();
    }
}
snake = new Snake();

//创建食物
function createFood(){
    //食物的随机坐标
    let x = null,y=null;
    let include = true//循环跳出的条件,true表示食物在蛇身上(需要继续循环),false表示不在蛇身上(不需要继续循环)
    while(include){
        //随机生成0-29的坐标值,round取整
        x=Math.round(Math.random()*(td-1));
        y=Math.round(Math.random()*(tr-1));

        //遍历数组pos,去除在蛇上的随机坐标
        snake.pos.forEach(function(value){
            if(x!=value[0]&&y!=value[1]){
                //如果随机的坐标[x.y]和数组pos中每个坐标都不一样,说明这个随机坐标不在蛇身上,所以跳出循环
                include = false;
            }
        })
    }
    //生成食物
    food = new Square(x,y,'food');
    food.pos=[x,y]//存储食物的坐标,用于判断蛇头是否碰到食物
    var fooDom = document.querySelector('.food');
    if(fooDom){
        //true说明执行这个方法时已经有一个食物,那么就改变这个食物的坐标
        fooDom.style.left=x*sw+'px';
        fooDom.style.top=y*sh+'px';
    }else{
        food.create();
    } 
}

//游戏逻辑
function Game(){
    this.timer = null;
    this.score = 0;
};

Game.prototype.init = function(){
    snake.init();//创建一条蛇
    createFood();//创建食物

    document.onkeydown=function(ev){
        if(ev.which==37&&snake.direction!=snake.directionNum.right){
            //用户按下左键,蛇不能是往右走的
            snake.direction=snake.directionNum.left;
        }else if(ev.which==38&&snake.direction!=snake.directionNum.down){
            snake.direction=snake.directionNum.up;
        }else if(ev.which==39&&snake.direction!=snake.directionNum.left){
            snake.direction=snake.directionNum.right;
        }else if(ev.which==40&&snake.direction!=snake.directionNum.up){
            snake.direction=snake.directionNum.down;
        }
    }
        this.start();
}
//start方法
Game.prototype.start=function(){
    this.timer = setInterval(function(){
        snake.getNextPos();
    },200)
}
//pause方法
Game.prototype.pause=function(){
    clearInterval(this.timer);
}
//over方法
Game.prototype.over=function(){
    clearInterval(this.timer);
    alert('你的得分为:'+this.score);
    //游戏重新开始
    var snakeWrap = document.getElementById('snakeWrap');
    snakeWrap.innerHTML='';
    snake=new Snake();
    game=new Game();
    var startBtn2=document.querySelector('.startBtn');
    startBtn2.style.display='block';
}
//开始游戏
game=new Game();
var startBtn=document.querySelector('.startBtn button');
startBtn.onclick=function(){
    startBtn.parentNode.style.display='none';
    game.init();
}

//暂停游戏
var snakeWrap = document.getElementById('snakeWrap');
var pauseBtn = document.querySelector('.pauseBtn button')
snakeWrap.onclick=function(){
    game.pause();
    pauseBtn.parentNode.style.display='block';
}
pauseBtn.onclick=function(){
    pauseBtn.parentNode.style.display='none';
    game.start();
}
