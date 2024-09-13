const fs = require("fs");
const controlCliente = require("./cliente_control");

class Rotas {
    static getPaginaIndex(req, res) {
        const content = fs.readFileSync("view/index.html", "utf-8");
        res.send(content);
    }

    static getPaginaCadastrar(req,res) {
        const content = fs.readFileSync("view/cadastrar.html", "utf-8");
        res.send(content);
    }

    static getPaginaCarrinho(req, res) {
        const content = fs.readFileSync("view/carrinho.html", "utf-8");
        res.send(content);
    }

    static getPaginaLogin(req, res) {
        console.log(req.headers);
        const content = fs.readFileSync("view/login.html", "utf-8");
        res.send(content);
    }
    static cadastraCliente = controlCliente.cadastraCliente
}

exports.rotas = Rotas;