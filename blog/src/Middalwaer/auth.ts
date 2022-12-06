import { Request, Response , NextFunction} from 'express';
import * as jwt from 'jsonwebtoken';

 export interface UserIn{
    id:string
}

 export const auth = async(req:Request,res:Response,next:NextFunction)=>{
    try{
        let token = req.headers.authorization

        if(!token){
            return res.status(401).json({masseg:"You are not allowed to access this route"})
        }
        token=token.split(' ')[1];

        const user =jwt.verify(token,process.env.JWT_SECERT as string) as UserIn
        res.locals.user=user


    }catch(error){
        return res.status(401).json({
            message:"You are not allowed to access thie route"
        })
      }
}

