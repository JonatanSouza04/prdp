"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _employees = require('../model/employees'); var _employees2 = _interopRequireDefault(_employees);

class EmployeeController {

   async list (req, res, next)  {
    try {
      const Users = await _employees2.default.find({})
      return res.status(200).json(Users)
    } catch (error) {
      next(error)
    }
  }

   async create (req, res, next)  {
    try {

      const { cpf } = req.body;

      if (await _employees2.default.findOne({ cpf })) 
      {
        return res.status(400).json({ msg: 'CPF já existe' }) 
      }

      const employee = await _employees2.default.create(req.body)

      return res.status(200).json(employee)
    } catch (error) {
      return res.status(403).json({ code: 'fail_create', error: true, msg: error })
    }
  }
}

exports. default = new EmployeeController()
