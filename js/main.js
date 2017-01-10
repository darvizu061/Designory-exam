function showMenu(){
    var x = document.getElementById("menuUL");
    if (x.className === "float-right topnav") {
        x.className += " responsive";
    } else {
        x.className = "float-right topnav";
    }
}