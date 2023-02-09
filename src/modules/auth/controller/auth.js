import userModel from "../../../../DB/model/User.model.js"

export  const signup = async(req,res,next)=>{
    try{

        const {userName, email , age ,password} =req.body
        console.log( {userName , email , age,password  });

        const user = await userModel.create(req.body);
        return res.json({message:"Done" , user})


    } catch (error){
        if(error.original?.errno==1062){

            return  res.json({message:"email dublicated" , error})
        }
        return  res.json({message:"error" , error})


    }
    
 }




 export  const login = async(req,res,next)=>{
    try{

        const { email , password} =req.body
        console.log( {email ,password  });

        const user = await userModel.findAll({
            where: {
                email,
                password
              }
        });

      return  user[0]?  res.json({message:"Done" , user}):  res.json({message:'in-valid email or password'}) 

    } catch (error){
       
      return  res.json({message:'error' , error}) 


    }
    
 }




