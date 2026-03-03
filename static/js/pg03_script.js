const tbody = document.getElementById('tbl_corpo')
const bto_form = document.getElementById("bto_rmvdr")

function teste(texto){
    // let texto = "texto exemplificativo"
    const tr = document.createElement("tr")
    // const td = document.createElement("td")
    const removedor = document.createElement("form") //document.getElementById("")
    removedor.id="frml_cncl";
    const inpu_t = document.createElement("input");
    inpu_t.type="checkbox";
    inpu_t.id="teste_one";
    inpu_t.name="teste";
    inpu_t.value=texto
    const label = document.createElement("label");
    label.for='teste_one'
    label.textContent=texto
    removedor.appendChild(inpu_t)
    removedor.appendChild(label)
    td.appendChild(removedor)
    tr.appendChild(td)
    tbody.appendChild(tr)

}

// teste()



// let cntdr_inputs = 0;
function produzir(dados){
    let cntdr = 1;
    const tr = document.createElement("tr")
    for (dado in dados){
        i_d = String(cntdr++)
        const td = document.createElement("td")
        td.classList.add(i_d) //String(cntdr++)
        if (td.classList.contains("1")){
            
            const checkbox_ = document.createElement("input");
            checkbox_.type="checkbox";
            checkbox_.id= i_d;
            // cntdr_inputs++
            
            checkbox_.value=dados[dado]
            const label = document.createElement("label");
            label.textContent = dados["nome"]
            td.appendChild(checkbox_)
            td.appendChild(label)
            // td.appendChild(removedor)
        }else{

            td.textContent = dados[dado]
        }
        tr.appendChild(td)
        tbody.appendChild(tr)
        
    }
    console.log("contador está em :",cntdr)

}


async function ler_arquivo() {
    const arquivos = await fetch('../db/tarefas.json')
    const resp_arquivos = await arquivos.json()
    
    
    let contador = resp_arquivos.length
    
    let dados = resp_arquivos


    for (dado in dados){
        
        produzir(dados[dado])
    }

}

ler_arquivo()

const voltar = document.getElementById('vlt')

voltar.addEventListener('click', ()=>{
    window.location.href ='../../index.html'
})


bto_form.addEventListener('click', ()=>{
    document.getElementById('frmlr_rmvr').addEventListener('submit', async (event)=>{
        event.preventDefault()
        const valor_checkbox = document.getElementById("1").value

        console.log(valor_checkbox)
    const vn = await fetch(`http://127.0.0.1:5000/api/cmpr`, {
        method : 'POST',
        headers : {'Content-Type': 'application/json'},
        body: JSON.stringify(valor_checkbox)
    })
    const resp = await vn.json()
    console.log(resp)



    })
})