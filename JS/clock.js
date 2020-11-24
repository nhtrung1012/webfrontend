var dd = new Date() //tao đối tượng thời gian hiện tại
var hour= dd.getHours();
var min= dd.getMinutes();
var sec=dd.getSeconds();
function clock(){
    var house_txt = hour>=10?hour:"0"+hour;
    var min_txt = min>=10?min:"0"+min;
    var sec_txt = sec>=10?sec:"0"+sec;
    document.getElementById("hour").innerText=house_txt;
    document.getElementById("min").innerText=min_txt;
    document.getElementById("sec").innerText=sec_txt;
    sec++;
    if (sec>=60){
        sec=0;
        min++;
    }
    if (min>=60){
        min=0;
        hour++;
    }
    if (hour>=24){
        hour=0;
    }
}
setInterval(clock,1000);