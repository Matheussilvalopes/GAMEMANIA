function mostrarMenu(){
    let menu= document.getElementById("menu")
    menu.style.display="flex"
    if(getComputedStyle(menu).display=="none"){
        menu.style.display="flex"
    }else{
        menu.style.display="none"
    }
}
function esconderbarradepesquisa() {
   let barradepesquisa= document.getElementById("barradepesquisa")
    barradepesquisa.style.display="flex"
    if(getComputedStyle(barradepesquisa).display=="none"){
    
        barradepesquisa.style.display="flex"

    }else{
         barradepesquisa.style.display="none"
    }
}