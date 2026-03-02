







// original

// function ver_tarefas(){
//     let teste_dados = adc_tarefa()
//     tarefas.push(teste_dados);
//     var ler_tamanho = tarefas.length // isso vai contar as tarefas
//     // console.log("o tamnho é", ler_tamanho)
//     const dados = tarefas[0]//isso vai tirar a lista
//     if (ler_tamanho == 0){
//         const mensagem = document.createElement("h2")
//         mensagem.textContent = "SEM DADOS";
//         return tbl_rdp.append(mensagem)
//     }else if(ler_tamanho != 0){
//         for (let i=0; i <= ler_tamanho; i++){
//             i++
//             const tr = document.createElement('tr');
//             console.log(i)
//             for (chave in dados){
//                 // console.log(dados[chave])
//                 const td = document.createElement('td')
//                 td.textContent = dados[chave]
//                 tr.appendChild(td)
//                 tbl_corpo.appendChild(tr)
//             }
            
//         }

//     }else{
//         alert("ERROR DE SISTEMA")
//     }   
// }



// JSON.stringify() -> salva
// JSON.parse() -> Lê
function exemplo_jso(){

    const fs = require("fs")
    
    const dados_exemplo = {
        "nome": "Pablo",
        "idade": "não te interessa",
        "trabalho": "Dev"
    }
    
    // converte o objeto Js para Json (string)
    const objeto_json = JSON.stringify(dados_exemplo, null, 2)
    
    // salva o arquivo
    
    fs.writeFileSync('../db/exemplo.json', objeto_json, "utf-8");
}


const fs = require("fs");

const path = require("path");

function ler_arquivo() {


    // monta o caminho até o JSON
const caminhoJson = path.join(__dirname, "..", "db", "tarefas.json");



// lê o arquivo
let dados_em_json = fs.readFileSync(caminhoJson, "utf-8");

// converte JSON em objeto JS
const dados_em_js = JSON.parse(dados_em_json);
// console.log("\n",dados_em_js,"\n")

    let contador = dados_em_js.length
    console.log(`\n__ a quantia de tarefas é: ${contador} __\n `)
    

const dados = dados_em_js[0] // "carrega os dados"

// desta maneira ele só puxa -> os nomes dos indices
// for (dado in dados){
//     console.log(dado)
// }

// for (dado in dados){ // assim ele só puxa os valores
//     console.log(dados[dado])
// }
    
}

// ler_arquivo()
