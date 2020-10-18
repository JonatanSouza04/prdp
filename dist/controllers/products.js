"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _products = require('../model/products'); var _products2 = _interopRequireDefault(_products);

class ProductsController {

   async list (req, res )  {
    try {
      console.log('list');
      const Product = await _products2.default.find({})
      return res.status(200).json(Product)
    } catch (error) {
       return res.status(200).json([]) 
    }
  }

   async listID (req, res )  {
    try {

      const Product = await _products2.default.find({_id:req.params.id});
      return res.status(200).json(Product)

    } catch (error) {
       return res.status(200).json([]) 
    }
  }  

   async create (req, res )  {
    try {

      const { code } = req.body;

      if (await _products2.default.findOne({ code })) 
      {
        return res.status(400).json({ msg: 'Code já existe' }) 
      }

      const product = await _products2.default.create(req.body)

      return res.status(200).json(product)
    } catch (error) {
      return res.status(403).json({ code: 'fail_create', error: true, msg: error })
    }
  }
}

exports. default = new ProductsController()
