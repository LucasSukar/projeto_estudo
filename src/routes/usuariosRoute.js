import { Router } from 'express'
const router = new Router()
import usuarioControler from '../controllers/UsuarioController'

router.post('/', usuarioControler.create)

export default router
