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

def salvar_dados(caminho, arquivo):
    # try:
    #     if bool(caminho) == None or bool(arquivo) == None:
    #         raise
    # except ValueError as error:
    #     print(f"\n__ Está faltando um arquivo, ou o arquivo indentado está errado __\n__ ValueError: {error} __\n")
    #     return False
    # except TypeError as error:
    #     print(f"\n__ Está falando um arquivo a ser indentado __\n__ TypeError: {error} __\n")
    # else:
    #     pass

    arquivos = carregar_dados(caminho)
    arquivos.append(arquivo)
    with open(caminho, 'w', encoding='utf-8') as f:
        json.dump(arquivos, f, ensure_ascii=False, indent=4)
    return True

dados = {
    'nome': 'teste manual',
    'descricao': ' Testando manualmente o salvamento dos arquivos em json'
}

# print(salvar_dados('../static/db/exemplo.json', dd))    

