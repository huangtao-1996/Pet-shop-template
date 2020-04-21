var items = document.getElementsByClassName("item");
var wra = document.getElementById("wra");
var goProBtn = document.getElementById("goPro");
var goNextBtn = document.getElementById("goNext");
var point = document.getElementsByClassName("pointitem");
var index = 0;
var wrap = true;

var cleanAction = function(){
    for(var i = 0; i<items.length;i++){
        point[i].className = "pointitem";
        items[i].className = "item";
    }
}

var goIndex = function(){
    cleanAction();
    point[index].className = "pointitem active";
    items[index].className = "item active";
}
var goNext = function(){
    if(index < 5){
        index++;
    }else{
        index = 0;
    }
    goIndex();
}
var goPro = function(){
    if(index == 0){
        index = 5;
    }else{
        index --;
    }
    goIndex();
}
goNextBtn.addEventListener('click',function(){
    goNext();
})
goProBtn.addEventListener('click',function(){
    goPro();
})
for(var i = 0 ;i<point.length; i++){
    point[i].addEventListener('click',function(){
        var points = this.getAttribute("data-index");
        index = points;
        goIndex();
    })
    
}
setInterval("goNext()",3000);
