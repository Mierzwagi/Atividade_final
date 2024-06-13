const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("./db/connection");
const Student = require("./models/student");
const Teacher = require("./models/teacher");
const Discipline = require("./models/discipline");
const Department = require("./models/department");
const Course = require("./models/course");

//usar body parser
app.use(bodyParser.json());
app.use(express.json());

//conectando com o db
db.authenticate()
  .then(() => {
    console.log("Conectado com o banco de dados");
  })
  .catch((error) => {
    console.log("Erro ao conectar ao Banco", error);
  });

//Ralacionando as tabelas
//Um curso pertence a um departamento
Course.belongsTo(Department);
//Um departamento tem varios cursos e professores
Department.hasMany(Course);
//Um professor pertence apenas em um departamento
Teacher.belongsTo(Department);
//Um aluno pertence a um curso
Student.belongsTo(Course);
//As diciplina pertence a um curso
Discipline.belongsTo(Course);
//E um curso tem várias diciplinas
Course.hasMany(Discipline);

//Sincronizando com os models, e criando as 'tabelas'
db.sync();
//db.sync({ alter: true }); // ({force: true})
//SERVIDOR
app.listen(1111, () => {
  console.log("Servidor rodando na porta 1111");
});
