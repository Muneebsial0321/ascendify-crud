import express, { Request, Response } from 'express';
import { getAll, login, signup } from '../controller/user.controller';
const router = express.Router()
const app = express();



router.post('/signup',signup)
router.get('/',getAll)
router.post('/login',login)



 export default router