import Sequelize from 'sequelize'
import databaseConfig from '../config/database'
import Usuario from '../models/Usuario'
import Post from '../models/Post'

const models = [Usuario, Post]

const connection = new Sequelize(databaseConfig)

models.forEach( (model) => model.init(connection));

