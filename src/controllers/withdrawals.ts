import { Request, Response } from 'express'
import Withdrawals from '../model/withdrawals'
import Products from '../model/products'

class WithdrawalController {

  public async list (req: Request, res: Response ) : Promise<Response> {
    try {
      const Product = await Withdrawals.find({}).populate('products').exec();
                        

      return res.status(200).json(Product)
    } catch (error) {
       return res.status(200).json([]) 
    }
  }

  public async listID (req: Request, res: Response ) : Promise<Response> {
    try {
      const Product = await Withdrawals.find({employees:req.params.id}).populate('products').exec();
      return res.status(200).json(Product)
    } catch (error) {
       return res.status(200).json([]) 
    }
  }  

 

  public async create (req: Request, res: Response ) : Promise<Response> {
    try {
      const { products, employees, amount } = req.body;
      if (await Withdrawals.findOne({ products, employees, status: 0 }))
      {
         return res.status(400).json({ msg: 'Produto já retirado' }) 
      }

      let findProduct  = await Products.find({_id:products});

      if(findProduct.length <= 0)
      {
        return res.status(403).json({ code: 'fail_create', error: true, msg: 'Produto não existe' }) 
      }

      if(amount > findProduct[0].amount)
      {
        return res.status(403).json({ code: 'fail_create', error: true, msg: 'Quantidade maior que o estoque' }) 
      }
      const withdrawal    = await Withdrawals.create(req.body);
      await Products.updateOne({_id:products },{amount: (findProduct[0].amount) - amount, withdrawn: (findProduct[0].withdrawn + amount) });

      return res.status(200).json(withdrawal)

    } catch (error) {
      return res.status(403).json({ code: 'fail_create', error: true, msg: error })
    }
  }

}

export default new WithdrawalController()
