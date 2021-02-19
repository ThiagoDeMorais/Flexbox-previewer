/* var theCSSprop = window.getComputedStyle(boxes[0], null).getPropertyValue("display");*/ 

/*** Funções aplicadas aos boxes++ */
/** Função responsável por ocultar ou mostrar os boxes*/
/* HideShow++ */
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
/*HideShow-- */


/** Função responsável por aumentar ou diminuir as larguras dos boxes*/
/*IncreaseDecreaseWidth++ */
function IncreaseDecreaseWidth(element) {
    let rangeBox = element;
    let rangeBoxArray = document.getElementsByClassName("rangeBoxWidth");
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
/*IncreaseDecreaseWidth-- */

/** Função responsável por aumentar ou diminuir as alturas dos boxes*/
/*IncreaseDecreaseHeight++ */
function IncreaseDecreaseHeight(element) {
    let rangeBox = element;
    let rangeBoxArray = document.getElementsByClassName("rangeBoxHeight");
    let boxes = document.getElementsByClassName("box") ;

    let theCSSprop;
    for(let i = 0; i<rangeBoxArray.length;i++){
        if(rangeBoxArray[i].id == rangeBox.id ){
            console.log(boxes[i]);
            boxes[i].style.height = rangeBox.value + "px";
            theCSSprop = window.getComputedStyle(boxes[i], null).getPropertyValue("height")
            console.log(theCSSprop);/**Remover */
        }
    }
}
/*IncreaseDecreaseHeight++ */
/*** Funções aplicadas aos boxes-- */


/*** Funções aplicadas ao conteiner++ */
/** Função responsável por modificar a propriedade flex-direction do container que contém os boxes 1,2 e 3*/
/*FlexDirectionChange++ */
function FlexDirectionChange(element) {
    let theCSSprop;/**Remover */
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
/*FlexDirectionChange-- */

/** Função responsável por modificar a propriedade flex-wrap do container que contém os boxes 1,2 e 3*/
/*FlexWrapChange++ */
function FlexWrapChange(element) {
    let theCSSprop;/**Remover */
    let disPlayConteiner = document.getElementById("displayContainer");
    console.log(disPlayConteiner);
    switch(element.id){
        case "flexWrap1":
                console.log(flexWrap1);/**Remover */
                disPlayConteiner.style.flexWrap = "nowrap";
                
            break;
        case "flexWrap2":
            console.log(flexWrap2);/**Remover */
            disPlayConteiner.style.flexWrap = "wrap";

            break;
        case "flexWrap3":
            console.log(flexWrap3);/**Remover */
            disPlayConteiner.style.flexWrap = "wrap-reverse";

            break;                                                     
    }
}
/*FlexWrapChange-- */

/** Função responsável por modificar a propriedade align-content do container que contém os boxes 1,2 e 3*/
/*AlignContentChange++ */
function AlignContentChange(element) {
    let theCSSprop;/**Remover */
    let disPlayConteiner = document.getElementById("displayContainer");
    console.log(disPlayConteiner);
    switch(element.id){
        case "alignContent1":
                console.log(flexWrap1);/**Remover */
                disPlayConteiner.style.alignContent = "flex-start";
                
            break;
        case "alignContent2":
            console.log(flexWrap2);/**Remover */
            disPlayConteiner.style.alignContent = "flex-end";

            break;
        case "alignContent3":
            console.log(flexWrap3);/**Remover */
            disPlayConteiner.style.alignContent = "center";

            break;      
        case "alignContent4":
            console.log(flexWrap3);/**Remover */
            disPlayConteiner.style.alignContent = "space-between";
    
            break; 
        case "alignContent5":
            console.log(flexWrap3);/**Remover */
            disPlayConteiner.style.alignContent = "space-around";
        
            break;  
        case "alignContent6":
            console.log(flexWrap3);/**Remover */
            disPlayConteiner.style.alignContent = "stretch";
    
            break;                       
            
    }
}
/*AlignContentChange-- */


/** Função responsável por modificar a propriedade justify-content do container que contém os boxes 1,2 e 3*/
/*JustifyContentChange++ */
function JustifyContentChange(element) {
    let theCSSprop;/**Remover */
    let disPlayConteiner = document.getElementById("displayContainer");
    console.log(disPlayConteiner);
    switch(element.id){
        case "justifyContent1":
                console.log(flexWrap1);/**Remover */
                disPlayConteiner.style.justifyContent = "flex-start";
                
            break;
        case "justifyContent2":
            console.log(flexWrap2);/**Remover */
            disPlayConteiner.style.justifyContent = "flex-end";

            break;
        case "justifyContent3":
            console.log(flexWrap3);/**Remover */
            disPlayConteiner.style.justifyContent = "space-between";

            break;      
        case "justifyContent4":
            console.log(flexWrap3);/**Remover */
            disPlayConteiner.style.justifyContent = "center";
    
            break; 
        case "justifyContent5":
            console.log(flexWrap3);/**Remover */
            disPlayConteiner.style.justifyContent = "space-around";
        
            break;                    
            
    }
}
/*JustifyContentChange-- */


/** Função responsável por modificar a propriedade justify-content do container que contém os boxes 1,2 e 3*/
/*JustifyContentChange++ */
function AlignItems(element) {
    let theCSSprop;/**Remover */
    let disPlayConteiner = document.getElementById("displayContainer");
    console.log(disPlayConteiner);
    switch(element.id){
        case "alignItems1":
                console.log(flexWrap1);/**Remover */
                disPlayConteiner.style.alignItems = "flex-start";
                
            break;
        case "alignItems2":
            console.log(flexWrap2);/**Remover */
            disPlayConteiner.style.alignItems = "flex-end";

            break;
        case "alignItems3":
            console.log(flexWrap3);/**Remover */
            disPlayConteiner.style.alignItems = "center";

            break;      
        case "alignItems4":
            console.log(flexWrap3);/**Remover */
            disPlayConteiner.style.alignItems = "baseline";
    
            break; 
        case "alignItems5":
            console.log(flexWrap3);/**Remover */
            disPlayConteiner.style.alignItems = "stretch";            
            break;                    
            
    }
}
/*JustifyContentChange-- */
/*** Funções aplicadas ao conteiner-- */



/*
var v =(document.getElementById("visibilityContainer"));
function func(){
    console.log(this.checked);
}

v.addEventListener("click",func);
*/

