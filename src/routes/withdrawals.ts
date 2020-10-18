import WithdrawalController from '../controllers/withdrawals'
import express from 'express'
const router = express.Router()

router
  .get('/', WithdrawalController.list)
  .get('/:id', WithdrawalController.listID)
  .post('/', WithdrawalController.create)

export default router