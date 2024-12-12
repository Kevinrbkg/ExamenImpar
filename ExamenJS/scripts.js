let nums = Number(0);
let numl = Number(0);
function hide() {
    document.getElementById("ocultable").style.visibility = "hidden";
    document.getElementById("hide").style.display = "none";
    document.getElementById("show").style.display = "inline";
}
function show() {
    document.getElementById("ocultable").style.visibility = "visible";
    document.getElementById("hide").style.display = "inline";
    document.getElementById("show").style.display = "none";
}

function dado () {
    let a = Math.ceil(Math.random()*6);
    document.getElementById("dado").innerText = a;
    numl ++;
    document.getElementById("numl").innerText = numl;
    if (a == 6) {
        nums ++;
    }
    document.getElementById("nums").innerText = nums;
}

