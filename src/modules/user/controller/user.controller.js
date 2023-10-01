import { userModel } from "../../../../DB/model/user.model.js"


export const signup=async(req,res)=>{
    try{
        res.json('signup')
            const {passward,userName,email}=req.body
            const user=await userModel.findOne({email:email})
            if(user){
                res.ison('email exist')
            }
            else{
                
            }
    }catch(error){
        res.status(400).json({message:`catch error ${error}`})
    }
    
}