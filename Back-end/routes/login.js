
import express from 'express'

import { loginPost } from '../controller/login.js'

const router=express.Router();

router.post('/',loginPost);


export default router



