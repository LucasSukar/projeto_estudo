import Usuario from '../models/Usuario'

class UsuarioController {
  async create(req , res){
    try{
      const novoUsuario = await Usuario.create(req.body)
      res.json(novoUsuario)
    }catch(e){
      res.status(400).json({
        errors: e.errors.map((err) => err.message)
      })
    }
  }
}

export default new UsuarioController()
