import { Request, Response } from 'express';
import Sales from '../model/sales';
import Withdrawals from '../model/withdrawals';
import Products from '../model/products';

class SaleController {

  public async list (req: Request, res: Response, next: any) : Promise<Response> {
    try {
      const sales = await Sales.find({employees: req.params.id})
                         .populate('products')
      return res.status(200).json(sales)
    } catch (error) {
      next(error)
    }
  }

  public async create (req: Request, res: Response, next: any) : Promise<Response> {
    try {

      const { products, employees, amount } = req.body;

      let findWithdrawal  = await Withdrawals.find({ products:products, employees: employees});
      if(findWithdrawal.length <= 0)
      {
        return res.status(403).json({ code: 'fail_create', error: true, msg: 'Retirada não existe' }) 
      }

      let findProduct  = await Products.find({_id:products});

      if(findProduct.length <= 0)
      {
        return res.status(403).json({ code: 'fail_create', error: true, msg: 'Produto não existe' }) 
      }

      const sales = await Sales.create(req.body);

      let status = 0
      if( (findWithdrawal[0].amount - amount) == 0)
      status = 1;

      await Withdrawals.updateOne({ _id: findWithdrawal[0]._id}, { amount: findWithdrawal[0].amount - amount, status});
      await Products.updateOne({_id:products },{withdrawn: (findProduct[0].withdrawn - amount) });

      return res.status(200).json(sales)
    } catch (error) {
      return res.status(403).json({ code: 'fail_create', error: true, msg: error })
    }
  }
}

export default new SaleController()
