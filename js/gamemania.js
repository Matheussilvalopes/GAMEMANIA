function mostrarMenu(){
    let menu= document.getElementById("menu3")
    if(getComputedStyle(menu).display=="none"){
        menu.style.display="flex"
    }else{
        menu.style.display="none"
    }
}
