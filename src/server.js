// Importando as dependências
const express = require("express");
const path = require("path");
const enableHotReload = require("./hot-reload");
const bodyParser = require('body-parser');
const app = express();

// Puxando os controladores da aplicação
const contatoController = require("./controllers/contatoController");

// Configurações do body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// Configurações do seu app Express
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

console.log("Views path set to:", path.join(__dirname, "views"));

// Configuração de pasta pública
app.use(express.static(path.join(__dirname, "public")));

// Habilitar hot-reload
enableHotReload(app);

// Rotas
app.get("/", contatoController.exibirContatos);
app.get("/adicionar-novo-contato", contatoController.exibirNovosContato);
app.post("/adicionar", contatoController.adicionarContato);

// Inicie o servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});