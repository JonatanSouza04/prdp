"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _expresssession = require('express-session'); var _expresssession2 = _interopRequireDefault(_expresssession);
var _bodyparser = require('body-parser'); var _bodyparser2 = _interopRequireDefault(_bodyparser);

var _products = require('./routes/products'); var _products2 = _interopRequireDefault(_products);
var _employees = require('./routes/employees'); var _employees2 = _interopRequireDefault(_employees);
var _sales = require('./routes/sales'); var _sales2 = _interopRequireDefault(_sales);

const app = _express2.default.call(void 0, )
app.use(_express2.default.json())
app.use(_express2.default.urlencoded({ extended: false }))
app.use(_bodyparser2.default.json())
app.use(_expresssession2.default.call(void 0, { secret: 'prodap-teste', resave: true, saveUninitialized: true }))

app.use('/products',_products2.default)
app.use('/employees',_employees2.default)
app.use('/sales',_sales2.default)


/*// Se ocorrer algum falha
app.use((req, res, next) => {
 
  const msgError = {}
  msgError.message = 'Not found'
  msgError.status = 404

  next(msgError)
})*/

exports. default = app
