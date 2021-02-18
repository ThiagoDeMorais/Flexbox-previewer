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
    let theCSSprop;

    for(let i = 0; i<rangeBoxArray.length;i++){
        if(rangeBoxArray[i].id == rangeBox.id ){
            boxes[i].style.width = rangeBox.value + "px";
            theCSSprop = window.getComputedStyle(boxes[i], null).getPropertyValue("width")
            console.log(theCSSprop);/**Remover */
        }
    }
}
/**IncreaseDecrease-- */

/** Função responsável por modificar a propriedade flex-direction do container que contém os boxes 1,2 e 3*/
/**FlexDirectionChange++ */
function FlexDirectionChange(element) {
    let theCSSprop;
    let disPlayConteiner = document.getElementById("displayContainer");
    console.log(disPlayConteiner);
    switch(element.id){
        case "flexDirection1":
                console.log(flexDirection1);/**Remover */
                disPlayConteiner.style.flexDirection = "row";
                
            break;
        case "flexDirection2":
            console.log(flexDirection2);/**Remover */
            disPlayConteiner.style.flexDirection = "row-reverse";

            break;
        case "flexDirection3":
            console.log(flexDirection3);/**Remover */
            disPlayConteiner.style.flexDirection = "column";

            break;
        case "flexDirection4":
            console.log(flexDirection4);/**Remover */
            disPlayConteiner.style.flexDirection = "column-reverse";

            break;                                                     
    }
}
/**FlexDirectionChange-- */

/*
var v =(document.getElementById("visibilityContainer"));
function func(){
    console.log(this.checked);
}

v.addEventListener("click",func);
*/

