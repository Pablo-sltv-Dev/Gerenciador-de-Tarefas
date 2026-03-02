const tbody = document.getElementById('tbl_corpo')

function receber(dados){
    const tr = document.createElement("tr")
    for (dado in dados){
        const td = document.createElement("td")
        td.textContent = dados[dado]
        tr.appendChild(td)
        tbody.appendChild(tr)
    }

    
}


async function ler_arquivo() {
    const arquivos = await fetch('../db/tarefas.json')
    const resp_arquivos = await arquivos.json()
    
    
    let contador = resp_arquivos.length
    
    let dados = resp_arquivos


    for (dado in dados){
        
        receber(dados[dado])
    }
    
    



   
    
    
    
}

ler_arquivo()

const voltar = document.getElementById('vlt')

voltar.addEventListener('click', ()=>{
    window.location.href ='../../index.html'
})