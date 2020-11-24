var min=parseInt(prompt("nhập số phút"));
if (isNaN(min)|| min<0){
    min=0;
}
var sec=0;
function countdownTimer(){
    var min_txt = min<10?"0"+min:min;
    var sec_txt =sec<10?"0"+sec:sec;
    //in phút vào chị trí span min
    var mm=document.getElementById("min");
    mm.innerText = min_txt;
    //in giây vào vị trí sec
    var ss=document.getElementById("sec");
    ss.innerText = sec_txt;
    //dem thời gian
    sec--;
    if (sec<0){
        sec=59;
        min--;
    }
    if (min<0){
        clearInterval(timer);
    }
}
var timer = setInterval(countdownTimer,1000);