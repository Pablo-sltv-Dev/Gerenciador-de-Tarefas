from flask import Flask, jsonify, request
from flask_cors import CORS
from models import *
app = Flask(__name__)
CORS(app)
@app.route("/")
def home():
    return jsonify({'Menssage':'API ONLINE', 'conexao':True})

@app.route('/api/rcb_dados', methods=['POST'])
def receber_dados():
    dados = request.get_json()
    
    # saida:{'nome': '1', 'descricao': 'foi?'}
    # print(dados)
    resposta = salvar_dados('../static/db/tarefas.json', dados)
    if resposta == False:
        return jsonify({"Menssage": "erro ao salvar os arquivos", "ok":False})
    elif resposta == True:
        return jsonify({"Menssage": "Salvo com sucesso", "ok":True})
    else:
        return jsonify({"Menssage": "erro interno", "ok":False})
    # return jsonify({"mensage":"recebendo dados"})

@app.route('/api/cmpr', methods=['POST'])
def fz_cmpr():
    dados = request.get_json()
    rsp = cmpr_dds(dados)
    if rsp == False:
        return jsonify({"message":"error", "ok":False})
    else:
        return jsonify({"message":"Ok", "ok":True})
        





if __name__=='__main__':
    app.run(debug=True)
