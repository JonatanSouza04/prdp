"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sales = require('../controllers/sales'); var _sales2 = _interopRequireDefault(_sales);
var _express = require('express'); var _express2 = _interopRequireDefault(_express);
const router = _express2.default.Router()

router
  .get('/', _sales2.default.list)
  .post('/', _sales2.default.create)

exports. default = router