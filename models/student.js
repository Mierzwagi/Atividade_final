const Sequelize = require("sequelize")
const db = require('../db/connection')
//const Course = require('./course')

const Student = db.define("student", {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome:{
        type: Sequelize.STRING,
    },
    numero:{
        type: Sequelize.INTEGER,
    },
    cpf: {
        type: Sequelize.STRING,
    },
    rg: {
        type: Sequelize.STRING
    },
    endereco: {
        type: Sequelize.STRING
    },
    telefone: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    dataNascimento: {
        type: Sequelize.DATE
    },
    sexo: {
        type: Sequelize.STRING
    }

});

/* Student.belongsTo(Course, {foreignKey: 'student', allowNull: false}); */



// Exportando os dados para serem utilizados
module.exports = Student;