const Department = require("../models/department");


exports.creatDepartment = (req, res, next) => {

    const department = new Department(req.body);
    console.log(department);
  
    department
      .save()
      .then((result) => {
        res.status(200).json({
          message: "Departamento criado!",
          result: result,
        });
      })
      .catch((error) => {
        return res.status(500).json({
          message: "Erro ao criar o Departamento!",
          result: error,
        });
      });
    console.log(department);
  };
  