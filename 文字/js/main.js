function say(word){
    document.getElementById('ul').innerHTML = '<li>' + word.toString() +'</li><br/>' + document.getElementById('ul').innerHTML
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
    say('你当前的情况如下：<br/>鱼：' + fish + '<br/>猫：' + cat)
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
