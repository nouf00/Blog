import {blog } from "@prisma/client"
import { Response , Request, NextFunction} from "express"
import { prisma } from "../Config/db"
import { UserIn } from "../Middalwaer/auth"
import {BlogUpdatatype,BlogIdtype,Blogdelettype}from "../Zod/blogZod"



export const NewBlog= async(req:Request,res:Response,next:NextFunction)=>{

   
    const {title , message} = req.body as blog
    const user = res.locals.user as UserIn;
    await prisma.blog.create({
        data:{
            title,
            message,
            user_id :user.id             //عشان يكون اليوز المحدد فقط يوصل لنفسه
        }
    }) 
    return res.status(201).json({message:"Succufly add blog for usre " + user.id})    
}
 
export const Updatablog = async(req:Request,res:Response,next:NextFunction)=>{
    try{
  const updataBlog =req.body as blog
  const {idblog} =req.params as BlogUpdatatype
  const user = res.locals.user as UserIn;
  const isUpdated = await prisma.blog.updateMany({
    where:{
        id : idblog,    // نحدد الايدي للبوست المراد تعديله 
        user_id:user.id ,
},
data:updataBlog
  })

  if(isUpdated.count ==0){
    return res.status(400).json({message:" there are no blog for updata "})
  }

  return res.status(200).json({
    message: 'Todo updated !',
  });
}catch(error){
    console.log(error);
    return res.status(500).json({message:" prafou   server is error "})
}
}

export const getallblog =async(req:Request,res:Response,next:NextFunction)=>{
    const {id} =req.params as BlogIdtype
    const user = res.locals.user as UserIn;
    const allBlog = await prisma.blog.findMany({
        where:{user_id:user.id}

    })

    // if(allBlog.count==0){

    // }
}


export const deletBlog =async(req:Request,res:Response,next:NextFunction)=>{
     try{
        const {id} =req.params as Blogdelettype
        const user = res.locals.user as UserIn;
        const Delet = await prisma.blog.deleteMany({
            where:{
                id:id,
                user_id:user.id
            }
        })
        if(Delet.count==0){

            return res.status(400).json({message:" there are no blog for Delet "})
        }
     }catch(error){
        console.log(error)
        return res.status(500).json({message:" srever is not work "})
     }
}
