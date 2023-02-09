import * as userController from './controller/user.js'
import { Router } from 'express'

const router = Router();

router.get("/", userController.getAllUsers)
router.get('/u_pro' , userController.getAllUsersWithPro)
router.get('/id' , userController.getUsersByID)
router.get("/searhUser", userController.searchByChar)
router.patch("/update/:id", userController.updateUser)
router.delete("/delete/:id", userController.deleteUser)



export default router;