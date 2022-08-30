function mostrarMenu(){
    let menu= document.getElementById("menu3")
    if(getComputedStyle(menu).display=="none"){
        menu.style.display="flex"
    }else{
        menu.style.display="none"
    }
}
function esconderPesquisa(){
    let pesquisa= document.getElementById("txtBusca2")
    if(getComputedStyle(menu).display=="none"){
        pesquisa.style.display="flex"
    }else{
        pesquisa.style.display="none"
    }
}