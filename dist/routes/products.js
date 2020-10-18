"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _products = require('../controllers/products'); var _products2 = _interopRequireDefault(_products);
var _express = require('express'); var _express2 = _interopRequireDefault(_express);
const router = _express2.default.Router()

router
  .get('/', _products2.default.list)
  .get('/:id', _products2.default.listID)
  .post('/', _products2.default.create)

exports. default = router