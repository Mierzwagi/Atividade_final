const Student = require("../models/student");

exports.getStudent = async (req, res, next) => {
  const id = req.parames.id;
  try {
    const student = await Student.findByPk(id);
    if (!student) {
      return res.status(404).json({ message: "Aluno não encntrado!!" });
    }
    res.status(200).json({student: student})/*  */
  } catch (error) {
    console.log("Error Catch");
    next(error);
  }
};
