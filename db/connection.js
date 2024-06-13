//Baixei o sequelize usando: npm install --save sequelize mysql2
//Criei uma pasta chamada db e dentro dela um arquivo chamado connection.js onde vou realizar a conecção com o banco de dados MySql

//Chama o Sequelize
const Sequelize = require('sequelize')

//Criando a instancia do sequelize e chama o banco
const sequelize = new Sequelize("facul_db", "root", "root",{
    //Dizer qual banco você esta utilizando 
    dialect: "mysql"
})

//Exporta as configurações do banco
module.exports = sequelize;