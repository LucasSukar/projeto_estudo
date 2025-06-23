import { Router } from 'express'
const router = new Router()
import homeControler from '../controllers/Home'

router.get('/', homeControler.index)

export default router
