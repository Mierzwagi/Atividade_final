const Sequelize = require("sequelize")
const db = require('../db/connection')
const Course = require('./course')

const Discipline = db.define("discipline", {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    codigo:{
        type: Sequelize.INTEGER,
    },
    nome:{
        type: Sequelize.STRING,
    },
    descricao: {
        type: Sequelize.STRING,
    },
    cargaHoraria: {
        type: Sequelize.INTEGER
    },
    teacher: {
        type: Sequelize.STRING
    }

})

/* Discipline.belongsTo(Course, {foreignKey: 'student', allowNull: false}); */

// Exportando os dados para serem utilizados
module.exports = Discipline;