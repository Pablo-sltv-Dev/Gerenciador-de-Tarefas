const URL = 'http://127.0.0.1:5000'
const formulario = document.getElementById('frml')
const bto_formu = document.getElementById('btdr')
const bto_vlt = document.getElementById("vltr")

 async function vrfcr_cnx(){
    const pedido = await fetch(`${URL}/`)
    const rsp_pdd = await pedido.json()
    if (rsp_pdd.conexao === true){
        // console.log("foi")
        return true
        
    }
    
}
// console.log(vrfcr_cnx())

bto_formu.addEventListener('click', async () => {

    formulario.addEventListener('submit', async (Event)=>{
        Event.preventDefault()
    
        const one = document.getElementById('nome').value
        const texto = document.getElementById('dscr').value
        console.log(texto)
        let dados = {
            "nome" : one,
            "descricao": texto
        };
        const pedido = await fetch(`${URL}/api/rcb_dados`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(dados)
        })
        const resposta = await pedido.json()
        console.log(resposta)
        
            
    
    })
})






bto_vlt.addEventListener('click', ()=> {
    window.location.href = '../../index.html'
})
