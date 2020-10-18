"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _login = require('../../controllers/login'); var _login2 = _interopRequireDefault(_login);

const router = _express.Router.call(void 0, )

router
  .get('/', _login2.default.login)


  exports. default = router
