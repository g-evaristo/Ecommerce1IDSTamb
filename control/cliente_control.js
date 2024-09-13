const { Cliente } = require("../model/model_clientes");

async function cadastraCliente(req, res) {
    const cliente = new Cliente();
    const dados = req.body;
    const resposta = await cliente.createClient(dados);
    console.log(resposta);
    res.json(resposta);
}

exports.cadastraCliente = cadastraCliente;