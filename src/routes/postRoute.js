import { Router } from 'express'
const router = new Router()
import PostController from '../controllers/PostControllers'

router.post('/', PostController.create)

export default router
