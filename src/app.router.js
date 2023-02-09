import authRouter from './modules/auth/auth.router.js';
import userRouter from './modules/user/user.router.js'
import productRouter from './modules/product/product.router.js';
import { connectDB } from '../DB/connection.js';





const initApp = (app, express) => {
    connectDB()
    app.use(express.json({}))
    app.get('/',userRouter )
    app.use('/auth' , authRouter)
    app.use('/user' , userRouter)
    app.use('/product' , productRouter)


    app.use("*", (req, res, next) => {
        return res.json({ message: "404 Page not found" })
    })
}

export default initApp