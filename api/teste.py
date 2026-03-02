import json, os


def vr_json():
    if not os.path.exists('../static/db/tarefas.json'):
        with open('../static/db/tarefas.json', 'w', encoding='utf-8') as f:
            json.dump([], f)
    else:
        return "\n__ O arquivo Já existe __\n"


def carregar():
    with open('../static/db/tarefas.json', 'r', encoding='utf-8') as f:
        return json.load(f)

def salvar(novos_dados):
    dados_antigos = carregar()
    dados_antigos.append(novos_dados)
    with open('../static/db/tarefas.json', 'r', encoding='utf-8') as f:
        json.dump(dados_antigos, f, ensure_ascii=False, indent=4)


dados = carregar()

for dado in dados:
    print(dado)
    