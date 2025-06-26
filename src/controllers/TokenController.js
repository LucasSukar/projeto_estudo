import Usuario from '../models/Usuario'
import jwt from 'jsonwebtoken'

class TokenController{
  async store(req , res){
   const { email = '', senha = ''} = req.body
    if(!email || !senha){
      return res.status(401).json({
        errors: ['credenciais invalidas']
      })
    }

    const usuario = await Usuario.findOne( { where: {email} })

    if(!usuario){
      return res.status(401).json({
        errors: ['usuario nao existe']
      })
    }

    if(!(await usuario.senhaValida(senha))){
      return res.status(401).json({
        errors: ['senha invalida']
      })
    }

    const { id } = usuario
    const token = jwt.sign({id, email}, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    })

    return res.json(token)
  }
}

export default new TokenController()
