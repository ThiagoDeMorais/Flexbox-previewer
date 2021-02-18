/* var theCSSprop = window.getComputedStyle(boxes[0], null).getPropertyValue("display");*/ 

/** Função responsável por ocultar ou mostrar os blocos*/
/**HideShow++ */
function HideShow(element) {
    let hideShowbox  = element;
    let hideShowBoxArray = document.getElementsByClassName("hideShowbox");
    let boxes = document.getElementsByClassName("box") ;

    for(let i = 0; i<hideShowBoxArray.length;i++){
        if(hideShowBoxArray[i].id == hideShowbox.id ){
            console.log(hideShowbox.checked);
            if(hideShowbox.checked){
                boxes[i].style.display = "block";

            }else{
                boxes[i].style.display = "none";
            }
        }
    }
}
/**HideShow-- */


/** Função responsável por aumentar ou diminuir as larguras dos blocos*/
/**IncreaseDecrease++ */
function IncreaseDecrease(element) {
    let rangeBox = element;
    let rangeBoxArray = document.getElementsByClassName("rangeBox");
    let boxes = document.getElementsByClassName("box") ;

    for(let i = 0; i<rangeBoxArray.length;i++){
        if(rangeBoxArray[i].id == rangeBox.id ){
            boxes[i].style.width = rangeBox.value + "px";
            var theCSSprop = window.getComputedStyle(boxes[i], null).getPropertyValue("width")
            console.log(theCSSprop);
        }
    }
}
/**IncreaseDecrease-- */




/*
var v =(document.getElementById("visibilityContainer"));
function func(){
    console.log(this.checked);
}

v.addEventListener("click",func);
*/

