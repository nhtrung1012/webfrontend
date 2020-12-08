function content(arr){
    var content_html="<div class=\"anh col-md-6 col-xs-3 col-sm-1\">\n"
        for(var i=0;i<arr.length;i++){

            content_html += "<img src=\""+arr[i].image+"\" height=\"300\" width=\"200\"/></div>\n";

        "                <div class=\"content col-md-6 col-xs-3 col-sm-1\">\n" +
        "\n" +
        "                    <div class=\"col-md-12 text-capitalize \">\n"

            content_html += " <h1 class =\"text-capitalize\">"+arr[i].name+"</h1>\n";


            content_html += "<div class=\"price col-md-12\">"+arr[i].price+" </div>\n"
        }
        "                    <div class=\"col-md-2 text-capitalize qua\">\n" +
        "                        <p>quality</p>\n" +
        "                    </div>\n" +
        "                    <div class=\"col-md-8 sl\">\n" +
        "                    <span class=\"text-center\">\n" +
        "                        <p class=\"text-center\">1</p>\n" +
        "                    </span>\n" +
        "                    </div>\n" +
        "                    <div class=\"col-md-12 text-center\">\n" +
        "                    <span class=\"col-md-4 text-center add\">\n" +
        "                        <p>Add to cart</p>\n" +
        "                    </span>\n" +
        "                    </div>\n" +
        "                </div>";

    return content_html;
}
function getMenu(){
    var x = new XMLHttpRequest();
    x.onreadystatechange = function (){
        if (this.readyState == 4 && this.status == 200){
            var ct = this.responseText;
            ct = JSON.parse(ct);
            var menu = ct.data;
            console.log(menu);
            document.getElementById("content").innerHTML= content(menu);
        }
    }
    x.open("GET","https://foodgroup.herokuapp.com/api/food/1");
    x.send();
}
getMenu();