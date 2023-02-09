import productModel from "../../../../DB/model/poduct.model.js"
import userModel from "../../../../DB/model/user.model.js"
import { Op } from "sequelize";



export const addProduct = async (req, res, next) => {
    try{

       const product = await productModel.create(req.body);
          return   res.json({message:"Done" , product})
    }catch (error){
        if(error.original?.errno==1452){
        res.json({message:'user not found' , error}) 

        }
        res.json({message:'error' , error}) 

    }


};


export const getAllProducts = async (req, res, next) => {
    try{

       const product = await productModel.findAll({
        include :userModel
       });
          return   res.json({message:"Done" , product})
    }catch (error){
        if(error.original?.errno==1452){
        res.json({message:'user not found' , error}) 

        }
        res.json({message:'error' , error}) 

    }


};

export const updateProduct = async (req, res, next) => {
    try{

        const {UserId} = req.params;
       const products = await productModel.update(req.body, {
            where: {
                UserId
            }
        });
        return   res.json({message:"Done" , products})  
    } 
    catch ( error) {

        if(error.original?.errno==1452){
            res.json({message:'user not found' , error}) 
    
            }
        res.json({message:'in-valid data' , error})

    }



};

export const deleteproduct = async (req, res, next) => {
    const {id} = req.params;
   const products = await productModel.destroy( {
        where: {
          id
        }
      });
      return   res.json({message:'product deleted' }) 


};

export const searchByPrice = async (req, res, next) => {
    const {  searchPrice } = req.query
    const product = await productModel.findAll({
        where: {
           
            price : {
                [Op.lt] : searchPrice
            }
        }
    })
    return res.json({ msg: "done", product })
};


