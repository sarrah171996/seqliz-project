import * as userController from './controller/product.js'

import { Router } from 'express'

const router = Router();

router.post('/' , userController.addProduct)
router.get('/' , userController.getAllProducts)
router.get('/search' , userController.searchByPrice)
router.patch('/update/:UserId',userController.updateProduct)
router.delete('/delete/:id',userController.deleteproduct)

export default router;