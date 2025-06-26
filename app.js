import express from 'express'
//routes
import tokenRoutes from './src/routes/tokenRoute'
import usuarioRoutes from './src/routes/usuariosRoute'
import postRoutes from './src/routes/postRoute'

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
    this.app.use('/tokens',tokenRoutes)
    this.app.use('/usuarios/', usuarioRoutes)
    this.app.use('/posts/', postRoutes)
  }
}

export default new App().app
