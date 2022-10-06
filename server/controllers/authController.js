import jwt from "jsonwebtoken";
import User from "../models/User.js";


export const login = async (req,res)=>{

    const { email  , password } = req.body;

    try{    
        const user = await User.findOne({ email });

        if (!user)
        {   
            return res.status(404).json({
                status:"doesn't exist"
            })
        }
        else
        {
            const pw = user.password;

            if ( pw != password )
            {
                return res.status(401).json({
                    status:"wrong password"
                })
            }
            else
            {   
                return res.status(200).json({
                    status:"ok",
                    email:user.email,
                    name:user.prenom,
                    token:generateToken(user._id)
                })
            }
        }
    }catch(err){
        return res.status(400).json({
            status:"error"
        })
   }
}


const generateToken = (id)=>{
    return jwt.sign(  { id  }  ,  process.env.JWT_SECRET  ,   {  expiresIn:"7d"  }  );
}