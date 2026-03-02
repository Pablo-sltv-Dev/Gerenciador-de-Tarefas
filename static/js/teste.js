const corpoTabela = document.getElementById("tbl_corpo")
const tr = document.createElement("tr") // Cria a tag tr

const td = document.createElement("td")// cria a tag Td
td.textContent="joão"
tr.appendChild(td)
corpoTabela.appendChild(tr)