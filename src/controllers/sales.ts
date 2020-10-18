import { Request, Response } from 'express';
import Sales from '../model/sales';

class SaleController {

  public async list (req: Request, res: Response, next: any) : Promise<Response> {
    try {
      const Users = await Sales.find({})
      return res.status(200).json(Users)
    } catch (error) {
      next(error)
    }
  }

  public async create (req: Request, res: Response, next: any) : Promise<Response> {
    try {

      const { cpf } = req.body;

      if (await Sales.findOne({ cpf })) 
      {
        return res.status(400).json({ msg: 'CPF já existe' }) 
      }

      const sale = await Sales.create(req.body)

      return res.status(200).json(Sales)
    } catch (error) {
      return res.status(403).json({ code: 'fail_create', error: true, msg: error })
    }
  }
}

export default new SaleController()
