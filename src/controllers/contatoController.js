var contatos = require("../models/contatoModel");

function exibirContatos(request, response) {
  var contato = contatos.listarContatos();
  console.log("Contatos listados:",contato)
  response.render("index");
}

function exibirNovosContato(request, response) {
  response.render("adicionarContato");
}

function adicionarContato(request, response) {
  var nome = request.body.nome;
  var email = request.body.email;
  var telefone = request.body.telefone;
  contatos.adicionarContato(nome, telefone, email);
  response.redirect("/");
}

module.exports = {
  exibirContatos,
  exibirNovosContato,
  adicionarContato
}