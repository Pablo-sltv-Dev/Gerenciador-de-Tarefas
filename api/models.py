import json, os


def vrfcr(caminho):
    l = False
    if not os.path.exists(caminho):
        pass
    else:
        return True

    if l == False:
        with open(caminho, 'w', encoding='utf-8') as f:
            json.dump([], f)
            return True


def carregar_dados(caminho):
    vr = vrfcr(caminho)
    if vr != True:
        return False
    elif vr == True:
        with open(caminho, 'r', encoding='utf-8') as f:
            return json.load(f)
    else:
        return False

def salvar_dados(caminho, nvs_dados):
    

    # arquivos = []
    # arquivos.append(arquivos)
    with open(caminho, 'w', encoding='utf-8') as f:
        json.dump(nvs_dados, f, ensure_ascii=False, indent=4)
    return True

dados = {
    'nome': 'teste manual',
    'descricao': ' Testando manualmente o salvamento dos arquivos em json'
}


def cmpr_dds(dados_web):
    dados_atuais = carregar_dados(caminho='../static/db/tarefas.json')
    procurando = False
    while True:

        for dados in dados_atuais:
            if dados_web == dados['nome']:

                procurando = True
                nv_dados = dados
                
                dados_atuais.remove(nv_dados)
                # nvo_dados_atuais = dados_atuais
                
                salvar_dados('../static/db/tarefas.json',dados_atuais)
                break
            else:
                break
        if procurando == False:
            return False     
        else:
            pass
        ot = carregar_dados('../static/db/concluidas.json')
        ot.append(nv_dados)
        salvar_dados('../static/db/concluidas.json', ot)
        return True
# print(salvar_dados('../static/db/exemplo.json', dd))    

# print(carregar_dados('../static/db/tarefas.json'))
# print(cmpr_dds('teste1'))