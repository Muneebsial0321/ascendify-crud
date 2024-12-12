import {Router} from 'express';
import {create,getAll,getOne,patch,put,remove } from '../controller/task.controller'
import authenticateJWT from '../guards/authorization.guard';
const router = Router()


router.get('/',authenticateJWT,getAll)
router.get('/:id',authenticateJWT,getOne)
router.post('/',authenticateJWT,create)
router.patch('/id',authenticateJWT,getOne)
router.put('/:id',authenticateJWT,patch)
router.delete('/:id',authenticateJWT,remove)

export default router