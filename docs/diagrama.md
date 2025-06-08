sequenceDiagram
    title Cadastrar Pergunta

    participant browser
    participant server
    participant modelo
    participant bd_utils

    browser->>server: POST /perguntas
    server->>modelo: cadastrar_pergunta(pergunta)
    modelo->>bd_utils: exec()
    bd_utils-->>modelo: return
    modelo-->>server: id_pergunta
    server-->>browser: json
