const valor_nulo = null;
// try{

// }catch(){

// }finally{

// }


try{
    console.log(valor_nulo.toUpperCase())
}catch(error){
    console.log(error.name)// saida: TypeError
}




// function produzir(dados){
//     const tr = document.createElement("tr")
//     for (dado in dados){
//         const td = document.createElement("td")
//         // td.textContent = 
//         // ---_____________--
//         const removedor = document.createElement("form") //document.getElementById("")
//         removedor.id="frml_cncl";
//         const inpu_t = document.createElement("input");
//         inpu_t.type="checkbox";
//         inpu_t.id="teste_one";
//         inpu_t.name="teste";
//         inpu_t.value=dados[dado]
//         const label = document.createElement("label");
//         label.for='teste_one'
//         label.textContent=dados[dado]
//         td.appendChild(inpu_t)
//         td.appendChild(label)
//         // td.appendChild(removedor)
        
        
//         // _____________
//         removedor.appendChild(td)
//         tr.appendChild(removedor)
//         tbody.appendChild(tr)
        
//     }

    
// }