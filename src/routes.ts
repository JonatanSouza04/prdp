import express from 'express'
import expressSession from 'express-session'
import bodyParser from 'body-parser'
import cors from 'cors';

import Products from './routes/products';
import Employees from './routes/employees';
import Sales from './routes/sales';
import Withdrawals from './routes/withdrawals'; //Retiradas

const app = express()
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(expressSession({ secret: 'prodap-teste', resave: true, saveUninitialized: true }))

app.use('/products',Products)
app.use('/employees',Employees)
app.use('/sales',Sales)
app.use('/withdrawals',Withdrawals)


export default app
