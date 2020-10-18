import EmployeeController from '../controllers/employees'
import express from 'express'
const router = express.Router()

router
  .get('/', EmployeeController.list)
  .get('/:id',EmployeeController.listID)
  .get('/valid/:cpf', EmployeeController.valid)
  .post('/', EmployeeController.create)

  

export default router