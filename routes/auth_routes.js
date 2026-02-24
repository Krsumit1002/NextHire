import express from 'express'
import registerController from '../controller/auth_controller.js'

const router=express.Router()

router.post('/reqister',registerController)

export default router