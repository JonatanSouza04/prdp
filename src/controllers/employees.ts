import { Request, Response } from 'express';
import Employee from '../model/employees';

class EmployeeController {

  public async list (req: Request, res: Response, next: any) : Promise<Response> {
    try {
      const employee = await Employee.find({})
      return res.status(200).json(employee)
    } catch (error) {
      next(error)
    }
  }

  public async listID (req: Request, res: Response ) : Promise<Response> {
    try {

      const employee = await Employee.find({_id:req.params.id});
      return res.status(200).json(employee)

    } catch (error) {
       return res.status(200).json([]) 
    }
  }  


  public async create (req: Request, res: Response, next: any) : Promise<Response> {
    try {

      const { cpf } = req.body;

      if (await Employee.findOne({ cpf })) 
      {
        return res.status(400).json({ msg: 'CPF já existe' }) 
      }

      const employee = await Employee.create(req.body)

      return res.status(200).json(employee)
    } catch (error) {
       return res.status(404).json({ code: 'fail_create', error: true, msg: error })
    }
  }


  public async valid (req: Request, res: Response ) : Promise<Response> {
    try {

      const employee = await Employee.find({cpf:req.params.cpf});
      return res.status(200).json(employee)

    } catch (error) {
       return res.status(200).json([]) 
    }
  } 

}

export default new EmployeeController()
