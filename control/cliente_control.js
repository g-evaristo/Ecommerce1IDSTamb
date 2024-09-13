const { Cliente } = require("../model/model_clientes");

async function cadastraCliente(req, res) {
    const cliente = new Cliente();
    const dados = req.body;
    const resposta = await cliente.createClient(dados);
    console.log(resposta);
    res.status(resposta["statusCode"]).json(resposta);
}

exports.cadastraCliente = cadastraCliente;