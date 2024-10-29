var image = document.getElementById("dog-walk");
var change = 0;


function dogMove() {
    image.style.left = change+"px";
    change-=1.8;
    if(change>200) {
        clearInterval();
    }
}

setInterval(dogMove,50);