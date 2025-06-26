import { Router } from 'express'
const router = new Router()
import PostController from '../controllers/PostController'
import loginRequired from '../middlewares/loginRequired'

router.post('/',loginRequired,  PostController.create)
router.get('/', PostController.index)
router.put('/:id', loginRequired, PostController.update)
router.delete('/:id', loginRequired, PostController.delete)

export default router
