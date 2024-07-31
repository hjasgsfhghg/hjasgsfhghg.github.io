setInterval(function(){
    var cat = localStorage.getItem('cat')
    var fish = localStorage.getItem('fish')
    var username = localStorage.getItem('username')
    if(cat != null && username != ''){
        var add = Number(cat)*Math.random(0.8,1.5)
        say('你的猫为你抓到了' + add.toFixed(0).toString() + '条鱼')
        fish = Number(fish) + Number(add.toFixed(0))
        localStorage.setItem('fish',fish.toString())
        localStorage.setItem('cat',cat.toString())
    }
    
},10000)