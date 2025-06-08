const bd = require('../bd/bd_utils.js');
const modelo = require('../modelo.js');

beforeEach(() => {
  bd.reconfig('./bd/esmforum-teste.db');
  // limpa dados de todas as tabelas
  bd.exec('delete from perguntas', []);
  bd.exec('delete from respostas', []);
});

test('Testando banco de dados vazio', () => {
  expect(modelo.listar_perguntas().length).toBe(0);
});

test('Testando cadastro de três perguntas', () => {
  modelo.cadastrar_pergunta('1 + 1 = ?');
  modelo.cadastrar_pergunta('2 + 2 = ?');
  modelo.cadastrar_pergunta('3 + 3 = ?');
  const perguntas = modelo.listar_perguntas(); 
  expect(perguntas.length).toBe(3);
  expect(perguntas[0].texto).toBe('1 + 1 = ?');
  expect(perguntas[1].texto).toBe('2 + 2 = ?');
  expect(perguntas[2].num_respostas).toBe(0);
  expect(perguntas[1].id_pergunta).toBe(perguntas[2].id_pergunta-1);
});

// Novos testes para o modelo

test('Testando cadastro e listagem de respostas', () => {
  const id = modelo.cadastrar_pergunta('Qual a capital da França?');
  modelo.cadastrar_resposta(id, 'Paris');
  modelo.cadastrar_resposta(id, 'Lyon');

  const respostas = modelo.listar_respostas(id);
  expect(respostas.length).toBe(2);
  expect(respostas[0].texto).toBe('Paris');
  expect(respostas[1].texto).toBe('Lyon');
});

test('Verificando número de respostas é atualizado corretamente', () => {
  const id = modelo.cadastrar_pergunta('Qual a cor do céu?');
  modelo.cadastrar_resposta(id, 'Azul');

  const perguntas = modelo.listar_perguntas();
  expect(perguntas[0].num_respostas).toBe(1);
});
