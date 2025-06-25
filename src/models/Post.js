import Sequelize , { Model } from 'sequelize'

export default class Post extends Model{
  static init(sequelize){
    super.init({
      usuario_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      titulo: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      texto:{
        type: Sequelize.STRING,
        defaultValue: '',
      },
      resumo: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      data_publicacao: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'informe a data'
          }
        }
      },
      post_likes: {
        type: Sequelize.VIRTUAL,
        get() {
          return this.getDataValue('post_likes') || 0;
        }
      }
    },
    {
      sequelize
    })
    return this
  }
}

