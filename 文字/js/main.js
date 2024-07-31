
function say(word){
    document.getElementById('ul').innerHTML = '<li>' + word.toString() +'</li>' + document.getElementById('ul').innerHTML
}

function fisha(){
    var fish = localStorage.getItem('fish');
    var add = Math.random() * 10
    if (fish==null){
        fish = add.toFixed(0)
    }else{
        fish = Number(fish) + Number(add.toFixed(0))
    }
    say('你获得了' + add.toFixed(0).toString() + '条鱼')
    localStorage.setItem('fish',fish.toString())
}

function cata(){
    
    var fish = localStorage.getItem('fish');
    var cat = localStorage.getItem('cat');
    if(fish == null){
        say('你还没有鱼哦，先钓鱼获取一些鱼吧')
    }else{
        var a = Number(cat) *2 + 3
        if(fish < a){
            say('你当前仅有' + fish +'条鱼，买猫需要' + a.toString() + '条鱼哦')
        }else{
            fish = Number(fish) - a
            say('你花费了' + a.toString() +'条鱼，购买了一只猫')
            if (cat == null){
                cat = 1
                say('这是你第一只猫，猫咪开始为你抓鱼啦')
            }else{
                cat = Number(cat) + 1
                say('当前有' + cat.toString() + '只猫')
            }
            localStorage.setItem('fish',fish.toString())
            localStorage.setItem('cat',cat.toString())
        }
    }
}

function check(){
    var fish = localStorage.getItem('fish');
    var cat = localStorage.getItem('cat');
    say('你当前的情况如下：<br>鱼：' + fish + '<br>猫：' + cat)
}

function end(){
    var fish = localStorage.getItem('fish');
    var cat = localStorage.getItem('cat');
    localStorage.removeItem('fish');
    fish = null;
    localStorage.removeItem('cat');
    cat = null
    say('重置成功')
}

function color_night(){
    var text = document.getElementById('color_night').value
    say('已将颜色切换为' + text)
    if(text == '夜间'){
        text = '日间'
        var colora = 'white'
        var colorb = 'black'
    }else{
        text = '夜间'
        var colora = 'black'
        var colorb = 'palegoldenrod'
    }
    document.getElementById('color_night').value = text
    document.getElementById('show').style.outlineColor = colora
    document.getElementById('control').style.outlineColor = colora
    document.getElementById('all').style.background = colorb
    document.getElementById('show').style.color = colora
}
var username = ''
localStorage.setItem('username','')
//键盘监听enter
document.onkeydown = function(event){
    if(username==''){
        return
    }else{
        var code = event.keyCode
        if(code == 13){
            talka()
        }
    }
    
}

function save(){
    var fish = localStorage.getItem('fish');
    var cat = localStorage.getItem('cat');
    var msg = {
        "type":"save",
        "username":username,
        "text":{
            "fish":fish,
            "cat":cat
        },
        "time":time
    }
    socket.send(JSON.stringify(msg))
}

function start(){
    document.getElementById('start').style.display='';
    document.getElementById('control').style.display='none'
}
function starte(){
    document.getElementById('start').style.display='none';
    document.getElementById('control').style.display=''
}

function joina(){
    var msg = {
        type:'join',
        username:document.getElementById('username').value,
        password:document.getElementById('password').value,
        time:time
    }
    socket.send(JSON.stringify(msg))
}

function signa(){
     var msg = {
        type:'sign',
        username:document.getElementById('username').value,
        password:document.getElementById('password').value,
        time:time
    }
    socket.send(JSON.stringify(msg))
}

function onlinea(){
    var msg = {
        type:'online',
        time:time
    }
    socket.send(JSON.stringify(msg))
}

function paihanga(){
    var msg = {
        type:'paihang',
        time:time
    }
    socket.send(JSON.stringify(msg))
}

function gonggao(){
    say('本项目于七月初开始策划并学习相关知识，七月15日开始写前端，七月26日购买并搭建服务器，八月一上传初步成品<br>该项目由 腾讯云提供服务器,github代理网页，仅涉及html,css,js，采用nodejs代理服务器,websocket通讯<br>本项目会持续更新，直至八月26日关停服务器<br>欢迎同学们前来指点不足或提出建议<br>作者：卖的是苦瓜')
}

//聊天专区
var socket = new WebSocket('ws://106.52.51.200:3001/')
var time = new Date().toLocaleDateString()

function talka(){
    var text = document.getElementById('text').value
    var msg = {
        type:'liaotian',
        username:username,
        text:text,
        time:time
    }
    socket.send(JSON.stringify(msg))
}

socket.addEventListener('message',function(e){
    msg = JSON.parse(e.data)
    if(msg.type == 'liaotian'){
        say(msg.text)
    }else if(msg.type == 'command'){
        if(msg.text = 'starte'){
            document.getElementById('start').style.display='none';
            document.getElementById('control').style.display=''
        }
    }else if(msg.type == 'username'){
        username = msg.text
        localStorage.setItem('username',username)
        
    }
},100)

