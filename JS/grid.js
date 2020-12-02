function grid(arr) {
    var grid_html = "<div class=\"col-md-4\">\n" +
        "                    <div class=\"item\">\n";
    for (var i=0;i<arr.length;i++){
                 grid_html +=  " <img src=\""+arr[i].image+"\"/>\n" ;
                 grid_html += "<h2>"+arr[i].name+"</h2>\n" ;
                 grid_html += "<p class='price'>"+arr[i].price +"</p>\n"

        "                        </div>\n" +
        "               </div>";
    }
    return grid_html;
}
function getData(){

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function (){
        if (this.readyState ==4 && this.status == 200){
            var rs = this.responseText;
            rs = JSON.parse(rs);
            var menu = rs.data;
            console.log(menu);
            document.getElementById("grid").innerHTML = grid(menu);
        }
    }
    xhttp.open("GET","https://foodgroup.herokuapp.com/api/today-special");
    xhttp.send();
}
getData();