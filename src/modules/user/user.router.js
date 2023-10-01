import { Router } from "express";
import * as user from './controller/user.controller.js'
const router=Router()

router.post('/signup',user.signup)
router.get('/',(req,res)=>{
    res.json('hhhh')
})

export default router