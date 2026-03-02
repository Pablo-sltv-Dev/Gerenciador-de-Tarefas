# Gerenciador-de-Tarefas

---

# 📝 Gerenciador de Tarefas (To-Do App)

Aplicação web de **gerenciamento de tarefas**, desenvolvida com **HTML, CSS e JavaScript**, utilizando uma **API simples em Flask** para persistência dos dados em um arquivo **JSON**.

> ⚠️ **Projeto em desenvolvimento** — algumas funcionalidades e melhorias ainda estão sendo implementadas.

---

## 🚀 Funcionalidades atuais

* ✅ Adicionar novas tarefas
* ✅ Listar tarefas salvas
* ✅ Marcar tarefas como concluídas
* ✅ Remover tarefas
* ✅ Persistência de dados via API (arquivo JSON)

---

## 🛠️ Tecnologias utilizadas

### Front-end

* **HTML5**
* **CSS3**
* **JavaScript (Vanilla)**

### Back-end

* **Python**
* **Flask**
* **Arquivo JSON** para armazenamento de dados

---

## 📂 Estrutura do projeto

```bash

.📁Gerenciador-de-Tarefas/
├──📁api/
│   ├── app.py
│   ├── models.py
│   ├── requirements.txt
│   └── teste.py
├── index.html
├── proposta.txt
├── README.md
├── requirements.txt
└──📁static/
    ├──📁css/
    │   ├── style.css
    │   ├── style_pg01.css
    │   ├── style_pg02.css
    │   └── style_pg03.css
    ├──📁db/
    │   ├── concluidas.json
    │   ├── exemplo.json
    │   └── tarefas.json
    ├──📁html/
    │   ├── pg_01.html
    │   ├── pg_02.html
    │   ├── pg_03.html
    │   └── teste.html
    └──📁js/
        ├── main.js
        ├── pg02_script.js
        ├── pg03_script.js
        ├── script.js
        ├── script_pq01.js
        └── teste.js



```

---

## ⚙️ Sobre a API

A API foi desenvolvida de forma **intencionalmente simples**, com os seguintes objetivos:

* Facilitar a persistência das tarefas
* Evitar complexidade desnecessária
* Permitir maior foco no desenvolvimento do **app gerenciador de tarefas**

### Observações importantes

* ❌ Não possui autenticação
* ❌ Não utiliza tokens ou camadas avançadas de segurança

> Essa escolha foi **consciente**, considerando que o projeto tem fins **educacionais** e não será utilizado em produção.
> Implementações de segurança ficam fora do escopo atual, mas podem ser adicionadas futuramente.

---

## 🎯 Objetivo do projeto

Este projeto foi criado para praticar:

* Integração entre **front-end e back-end**
* Consumo de API com `fetch`
* Manipulação do DOM com JavaScript
* Persistência de dados com JSON
* Organização de projetos full stack simples

---

## 🧪 Funcionalidades planejadas

* ⏳ Filtro de tarefas (todas / pendentes / concluídas)
* ⏳ Contador de tarefas
* ⏳ Melhorias no layout e responsividade
* ⏳ Tema claro/escuro
* ⏳ Validações adicionais no back-end

---

## ▶️ Como executar o projeto

### 1️⃣ Back-end (API)

```bash
cd api/
python app.py
```

A API ficará disponível em:

```
http://localhost:5000
```

---

### 2️⃣ Front-end

* Abra o arquivo `index.html` no navegador
  **ou**
* Utilize a extensão **Live Server** no VS Code

---

## 📌 Status do projeto

🚧 **Em desenvolvimento**

---

## 👤 Autor

Desenvolvido por **Pablo**
🔗 GitHub: [https://github.com/Pablo-sltv-Dev](https://github.com/Pablo-sltv-Dev)

---
