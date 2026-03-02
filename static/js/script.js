const bto_vzlzr = document.getElementById('vzlzr');
const vizualizador = document.getElementById('tbl_vizualizador');


function redirecionar(caminho){
    return window.location.href = String(caminho)
}




function abrir_vzlzdr(){
    if(vizualizador.classList.contains('desativado')){
        vizualizador.classList.remove('desativado');
        vizualizador.classList.add('ativado');
        
        
    }else if(vizualizador.classList.contains('ativado')){
        vizualizador.classList.remove('ativado');
        vizualizador.classList.add('desativado');
        
    }
}




