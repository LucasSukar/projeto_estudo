import express from 'express'
import homeRoutes from './src/routes/home'
import usuarioRoutes from './src/routes/usuariosRoute'

import './src/database'

import dotenv from 'dotenv'
dotenv.config()

class App{
  constructor(){
    this.app = express()
    this.middlewares()
    this.routes()
  }
  middlewares(){
    this.app.use(express.urlencoded({extended: true}))
    this.app.use(express.json())
  }
  routes(){
    this.app.use('/',homeRoutes)
    this.app.use('/usuarios/', usuarioRoutes)
  }
}

export default new App().app
