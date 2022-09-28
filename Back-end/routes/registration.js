

import {regPost} from "../controller/registration.js";
import express from 'express'

const router=express.Router()


router.post('/',regPost)

export default router