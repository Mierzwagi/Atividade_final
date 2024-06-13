const Sequelize = require("sequelize")
const db = require('../db/connection')
const Course = require('./course')
const Teacher = require('./teacher')

const Department = db.define("departiment", {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome:{
        type: Sequelize.STRING,
    },
    sigla: {
        type: Sequelize.STRING,
    },
    codigo:{
        type: Sequelize.INTEGER,
    },
    endereco: {
        type: Sequelize.STRING
    },
    telefone: {
        type: Sequelize.STRING
    }

});

/* Department.hasMany(Course, {foreignKey: 'departiment', allowNull: false});
Department.hasMany(Teacher, {foreignKey: 'departiment', allowNull: false}); */

// Exportando os dados para serem utilizados
module.exports = Department;