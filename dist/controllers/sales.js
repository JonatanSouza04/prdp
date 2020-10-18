"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _sales = require('../model/sales'); var _sales2 = _interopRequireDefault(_sales);

class SaleController {

   async list (req, res, next)  {
    try {
      const Users = await _sales2.default.find({})
      return res.status(200).json(Users)
    } catch (error) {
      next(error)
    }
  }

   async create (req, res, next)  {
    try {

      const { cpf } = req.body;

      if (await _sales2.default.findOne({ cpf })) 
      {
        return res.status(400).json({ msg: 'CPF já existe' }) 
      }

      const sale = await _sales2.default.create(req.body)

      return res.status(200).json(_sales2.default)
    } catch (error) {
      return res.status(403).json({ code: 'fail_create', error: true, msg: error })
    }
  }
}

exports. default = new SaleController()
