//Importando bibliotecas necessárias
const express = require("express");
const path = require("path");
const { rotas } = require("./control/routes");
//Definindo número da porta
const port = 8080;
//Definindo caminhos
const pathModel = path.join(__dirname, "model");
const pathView = path.join(__dirname, "view");
const pathControl = path.join(__dirname, "control");

//Iniciando express
const app = express();

//Configurando express
app.use(express.static(pathModel));
app.use(express.static(pathView));
app.use(express.static(pathControl));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Chamando rotas APIs
app.post("/cadastrar", rotas.cadastraCliente);

//Chamando rotas HTML
app.get("/", rotas.getPaginaIndex);
app.get("/login", rotas.getPaginaLogin);
app.get("/cadastrar", rotas.getPaginaCadastrar);
app.get("/carrinho", rotas.getPaginaCarrinho);
//Iniciando recebimento de requisições
app.listen(port, () => {
    console.log(`Escutando porta ${port}`);
})