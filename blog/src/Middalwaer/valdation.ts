import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";
import { ZodError } from "zod/lib";



export const valdation=
(schema:AnyZodObject )=>
(req:Request,res:Response,next:NextFunction)=>{
try{
    schema.parse({
        body:req.body,             //   عشان نقدر نحدد المتغيرات تكون تابعة لاي جزء في الاتش تي تي بي في السكيما الي راح نسويها 
        params: req.params,                 // HTTP is protcal to trasport data to network , it a hsa a some part Hader , Body etc.. 
        query:req.query,
    });

}catch(error){
    const zodError = error as ZodError
    return res.status(404).json({   message: zodError.errors[0].message,})
}
}