const Sequelize = require("sequelize")
const db = require('../db/connection')
const Department = require('./department')

const Teacher = db.define("teacher", {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome:{
        type: Sequelize.STRING,
    },
    cpf: {
        type: Sequelize.STRING,
    },
    endereco: {
        type: Sequelize.STRING
    }/* ,
    departamento: {
        type: Sequelize.STRING
    } */

})

/* Teacher.belongsTo(Department, {foreignKey: 'teacher', allowNull: false}); */


// Exportando os dados para serem utilizados
module.exports = Teacher;