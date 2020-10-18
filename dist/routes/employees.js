"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _employees = require('../controllers/employees'); var _employees2 = _interopRequireDefault(_employees);
var _express = require('express'); var _express2 = _interopRequireDefault(_express);
const router = _express2.default.Router()

router
  .get('/', _employees2.default.list)
  .post('/', _employees2.default.create)

exports. default = router