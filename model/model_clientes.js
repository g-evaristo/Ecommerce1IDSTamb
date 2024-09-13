const { MySQL } = require("./mysql_connect");

class Cliente extends MySQL {
    async createClient(data) {
        console.log(data);
        const response = await this.executeQuery(
            `INSERT INTO cliente (nome, cpf, email, senha, telefone, endereco)
            VALUES ("${data.nome}", "${data.cpf}", "${data.email}", "${data.senha}", 
            "${data.telefone}", "${data.endereco}");`
        )
        console.log(response);
        return response;
    }
}

exports.Cliente = Cliente;
