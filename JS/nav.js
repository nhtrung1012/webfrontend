function nav(arr) {
    var nav_html = "<div class=\"container\">\n" +
        "            <ul class=\"menu\">\n" ;
    for(var i=0;i<arr.length;i++){
        // muon thay arr[i].name vao vi tri Category #1
        nav_html+= "<li><a href=\"#\">"+arr[i].name+"</a></li>\n";
    }
    nav_html +="     <li class=\"last\"><a href=\"#\">Genesis now</a></li>\n" +
        "            </ul>\n" +
        "        </div>";

    return nav_html;
}
function getMenu() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200){
            var rs = this.responseText; // string ket qua tra ve
            rs = JSON.parse(rs); // bien string thanh JSON
            var menu = rs.data;
            console.log(menu);
            document.getElementById("nav").innerHTML = nav(menu);
        }
    }
    xhttp.open("GET","https://foodgroup.herokuapp.com/api/menu");
    xhttp.send();
}
getMenu();