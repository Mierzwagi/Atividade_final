const Discipline = require("../models/discipline");


exports.creatDepartment = (req, res, next) => {

    const discipline = new Discipline(req.body);
    console.log(discipline);
  
    discipline
      .save()
      .then((result) => {
        res.status(200).json({
          message: "Diciplina criada!",
          result: result,
        });
      })
      .catch((error) => {
        return res.status(500).json({
          message: "Erro ao criar a Disciplina!",
          result: error,
        });
      });
    console.log(discipline);
  };
  