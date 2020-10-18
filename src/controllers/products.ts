import { Request, Response } from 'express'
import Products from '../model/products'

class ProductsController {

  public async list (req: Request, res: Response ) : Promise<Response> {
    try {
      const Product = await Products.find({})
      return res.status(200).json(Product)
    } catch (error) {
       return res.status(200).json([]) 
    }
  }

  public async listID (req: Request, res: Response ) : Promise<Response> {
    try {
      const Product = await Products.find({_id:req.params.id});
      return res.status(200).json(Product)
    } catch (error) {
       return res.status(200).json([]) 
    }
  }  

  public async create (req: Request, res: Response ) : Promise<Response> {
    try {
      const { code } = req.body;
      if (await Products.findOne({ code })) 
      {
        return res.status(400).json({ msg: 'Code já existe' }) 
      }

      const product = await Products.create(req.body)
      return res.status(200).json(product)

    } catch (error) {
      return res.status(403).json({ code: 'fail_create', error: true, msg: error })
    }
  }


  public async valid (req: Request, res: Response ) : Promise<Response> {
    try {

      const Product = await Products.find({code:req.params.code});
      return res.status(200).json(Product)

    } catch (error) {
       return res.status(200).json([]) 
    }
  } 

}



export default new ProductsController()
