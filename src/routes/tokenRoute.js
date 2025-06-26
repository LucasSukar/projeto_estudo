import { Router } from 'express'
const router = new Router()
import tokenControler from '../controllers/TokenController'

router.post('/', tokenControler.store)

export default router
