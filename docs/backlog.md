# Histórias de Usuários e Backlog

O desenvolvimento do ESM Forum será dividido em sprints e, no presente momento, o primeiro sprint já foi concluído.

Assumindo esse cenário, o backlog do produto, as histórias de usuários e as tarefas nas quais essas histórias foram quebradas podem ser conferidas no GitHub Projects:

**[Histórias de Usuários e Backlog do Sprint 1](https://github.com/users/mtov/projects/1)**

## Exercício

No backlog do produto contido no link acima, a história do topo é a seguinte:

> Como usuário, eu gostaria de editar e deletar minhas perguntas

Faça então o que se pede abaixo:

1. Proponha um conjunto de tarefas para concluir a implementação dessa história. 

2. Proponha um conjunto de critérios para aceitação dessa história. Para conferir os critérios de aceitação das histórias do sprint 1, basta clicar nelas, na coluna Histórias do Sprint, no GitHub Projects.

Se preferir, você pode criar um novo projeto no Projects, chamado "ESM Forum - Sprint 2", e cadastrar essa história e suas tarefas nele, assim como fizemos para as histórias do primeiro sprint.

# ESM Forum - Sprint 2

## História do Usuário
**Como usuário, eu gostaria de editar e deletar minhas perguntas**

---

## Tarefas
- [ ] Criar interface de edição da pergunta  
- [ ] Implementar lógica de atualização da pergunta no backend  
- [ ] Criar funcionalidade para deletar pergunta  
- [ ] Controle de permissões para edição e exclusão  
- [ ] Testes unitários e de integração para editar e deletar  
- [ ] Atualizar documentação da API e interface  

---

## Critérios de Aceitação
- Usuário autenticado pode editar e deletar somente suas perguntas  
- Formulário de edição aparece pré-preenchido com dados atuais  
- Edição salva corretamente com validação  
- Exclusão requer confirmação e reflete imediatamente na lista  
- Ações não autorizadas são bloqueadas e exibem mensagem de erro  
- Tudo funciona sem erros e com boa performance  
- Testes automatizados cobrem as funcionalidades principais  
