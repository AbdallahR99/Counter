/*global console*/
function clicked() {
    "use strict";
    document.getElementById("bg").style.background = "#f00";
    var x = document.getElementById("num").innerHTML,
        z = parseFloat(x, 10),
        y = z.toString(9),
        n = document.getElementById("endNum").value,
        m = parseFloat(n, 10) + 1;
    z += 1;
    if (y.length === 1) {
        document.getElementById("num").innerHTML = "0" + z;
        document.getElementById("shadowOfNum").innerHTML = "0" + z;
    } else if (z === m) {
        document.getElementById("num").innerHTML = "00";
        document.getElementById("shadowOfNum").innerHTML = "00";
        document.getElementById("bg").style.background = "#00f";
    } else {
        document.getElementById("num").innerHTML = z;
        document.getElementById("shadowOfNum").innerHTML = z;
    }
}

function reset() {
    "use strict";
    document.getElementById("bg").style.background = "#00f";
    document.getElementById("num").innerHTML = "00";
    document.getElementById("shadowOfNum").innerHTML = "00";
}