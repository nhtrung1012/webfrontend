
function sidebar() {
    return "<div class=\"block subcribe\">\n" +
        "                    <h2>Block 1</h2>\n" +
        "                </div>\n" +
        "                <div class=\"block\">\n" +
        "                    <h2>Block 2</h2>\n" +
        "                </div>\n" +
        "                <div class=\"block\">\n" +
        "                    <h2>Block 3</h2>\n" +
        "                </div>";
}
document.getElementById("sidebar").innerHTML = sidebar();