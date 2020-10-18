import ProductController from '../controllers/products'
import express from 'express'
const router = express.Router()

router
  .get('/', ProductController.list)
  .get('/:id', ProductController.listID)
  .post('/', ProductController.create)
  .post('/valid/:code', ProductController.valid)

export default router