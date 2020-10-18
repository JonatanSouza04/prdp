import SalesController from '../controllers/sales'
import express from 'express'
const router = express.Router()

router
  .get('/', SalesController.list)
  .post('/', SalesController.create)

export default router