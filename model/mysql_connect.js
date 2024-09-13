const mysql = require("mysql2/promise");

class BancoDados {
    db_data = {
        host: "localhost",
        user: "root",
        password: "root",
        port: 3306,
        database: "ecommerce_senai"
    };
    async executeQuery(query) {
        let resultado;
        const conexao = await mysql.createConnection(this.db_data);

        try {
            //Retorno vem com uma array contendo os resultados da consulta (0) e a estrutura da tabela (1)
            resultado = await conexao.execute(query);
        }
        catch(error) {
            resultado = error;
        }
        await conexao.end();
        console.log(resultado);
        return resultado[0];
    }
}

exports.MySQL = BancoDados;