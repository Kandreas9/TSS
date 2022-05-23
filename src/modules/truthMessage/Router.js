import { Router } from 'express'
import truthMessageCreate from './controllers/truthMessageCreate.js'
import truthMessageDeleteById from './controllers/truthMessageDeleteById.js'
import truthMessageGetAll from './controllers/truthMessageGetAll.js'
import truthMessageGetById from './controllers/truthMessageGetById.js'
import truthMessageUpdateById from './controllers/truthMessageUpdateById.js'

const router = Router()

router.post('/', truthMessageCreate)
router.delete('/:id', truthMessageDeleteById)
router.get('/:id', truthMessageGetById)
router.get('/', truthMessageGetAll)
router.patch('/:id', truthMessageUpdateById)

export default router
