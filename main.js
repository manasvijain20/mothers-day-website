function play() {
 document.getElementById("song").play();
}
function show(){
    var x = document.getElementById("Poem");
    console.log(x);
    if (x.style.display == "none"){
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
}


