const { where } = require("sequelize");
const Student = require("../models/student");

//Pegando pelo ID
/* exports.getStudent = async (req, res, next) => {
  const id = req.params.id;
  try {
    const student = await Student.findByPk(id);
    if (!student) {
      return res.status(404).json({ message: "Aluno não encntrado!!" });
    }
    res.status(200).json({student: student})
  } catch (error) {
    console.log("Error Catch");
    next(error);
  }
};
 */

//Pegando pelo cpf
exports.getStudent = async (req, res, next) => {
  const cpf = req.params.cpf;
  try {
    const student = await Student.findOne({where: {cpf:cpf}});
    if (!student) {
      return res.status(404).json({ message: "Aluno não encontrado!!" });
    }
    res.status(200).json({student: student})
  } catch (error) {
    console.log("Error Catch", error);
    next(error);
  }
};

exports.creatStudent = (req, res, next) => {

  const student = new Student(req.body);
  console.log(student);

  student
    .save()
    .then((result) => {
      res.status(200).json({
        message: "Aluno cadastrado!",
        result: result,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        message: "Erro ao cadastrado o Aluno!",
        result: error,
      });
    });
  console.log(student);
};
