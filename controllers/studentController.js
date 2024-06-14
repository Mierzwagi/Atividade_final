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
}; */


exports.getStudents = async (req, res, next) => {
  try {
    const student = await Student.findAll();

    res.status(200).json({
      message: "Alunos encontrados com sucesso!",
      result: student,
    });
  } catch (error) {
    res.status(200).json({
      message: "Erro!!",
      result: error,
    });
  }
};

//Pegando pelo cpf
exports.getStudent = async (req, res, next) => {
  const cpf = req.params.cpf;
  console.log(cpf)
  try {
    const student = await Student.findOne({ where: { cpf: cpf } });
    
    if (!student) {
      return res.status(404).json({ message: "Aluno não encontrado!!" });
    }
    res.status(200).json({ student: student });
  } catch (error) {
    console.log("Error Catch", error);
    next(error);
  }
};
