var v =(document.getElementById("hideShowbox1"));
function func(){
    console.log(this.checked);
}

window.onload = function(){
    console.log(v.defaultChecked);
}

v.addEventListener("click",func);

