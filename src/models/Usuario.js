import Sequelize , { Model } from 'sequelize'
import bcryptjs from 'bcryptjs'

export default class Usuario extends Model{
  static init(sequelize){
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [1, 255],
            msg: 'preencha o nome'
          }
        }
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'email ja existe'
        },
        validate: {
          isEmail: {
            msg: 'preencha o emial'
          }
        }
      },
      senha:{
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 50],
            msg: 'a senha precisa ter pelo menos 6 caracteres'
          }
        }
      },
    },
    {
      sequelize
    })
    this.addHook('beforeSave', async usuario => {

      if(usuario.password){
        usuario.senha = await bcryptjs.hash(usuario.password, 8)
      }

    })
    return this
  }
    senhaValida(password){
      return bcryptjs.compare(password, this.senha)
    }
}

