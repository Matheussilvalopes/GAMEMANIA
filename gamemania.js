function mostrarBarra(){
    let Barradepesquisa= document.getElementById("txtBusca")
    if(getComputedStyle(txtBusca).display=="none"){
        txtBusca.style.display="flex"

    }else{
        txtBusca.style.display="none"
    }
}
