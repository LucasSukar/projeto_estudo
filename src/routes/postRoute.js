import { Router } from 'express'
const router = new Router()
import PostController from '../controllers/PostControllers'

router.post('/', PostController.create)
router.get('/', PostController.index)
router.put('/:id', PostController.update)

export default router
