const Sequelize = require("sequelize");
const db = require("../db/connection");
const Department = require("./department");
const Discipline = require("./discipline");

const Course = db.define(
  "course",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: Sequelize.STRING,
    },
    descricao: {
      type: Sequelize.STRING,
    },
    numero: {
      type: Sequelize.INTEGER,
    },
    cargaHorariaSemestre: {
      type: Sequelize.INTEGER,
    },
    cargaHorariaTotal: {
      type: Sequelize.INTEGER,
    },
    numeroSemestre: {
      type: Sequelize.INTEGER,
    },
    nivel: {
      type: Sequelize.STRING,
    },
    departamento: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: true, // Enable automatic createdAt and updatedAt fields
    createdAt: "created_at", // Customize the name of the createdAt field
    updatedAt: "updated_at", // Customize the name of the updatedAt field
  }
);

/* Course.belongsTo(Department, {foreignKey: 'course', allowNull: false});
Course.hasMany(Discipline, {foreignKey: 'course', allowNull: false}); */

// Exportando os dados para serem utilizados
module.exports = Course;
