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
    try{
        const arquivos = await fetch('../db/tarefas.json')
        if(!arquivos.ok){
            throw new Error(`Erro ao buscar dados ${arguments.status}`)
        }
        const resp_arquivos = await arquivos.json()
        
        let contador = resp_arquivos.length
        
        let dados = resp_arquivos
    
    
        for (dado in dados){
            
            receber(dados[dado])
        }
    }catch(error){
        console.error("Falaha ao buscar dados:", error.message)
    }
    
    
    
    



   
    
    
    
}

ler_arquivo()

const voltar = document.getElementById('vlt')

voltar.addEventListener('click', ()=>{
    window.location.href ='../../index.html'
})