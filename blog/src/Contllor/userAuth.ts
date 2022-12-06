import {user} from "@prisma/client"
import * as argon2 from "argon2"
import { NextFunction, Request ,  Response} from "express";
import * as jwt from 'jsonwebtoken';
import { prisma } from '../Config/db';


export const HandlingRegistr =async (req:Request, res:Response, next:NextFunction) => {
    try{
  const {username , email , password } = req.body as user    // عشان ننشاء اوبجكت بنفس صيغة الداتا بيس و نمرر لفنكشن الاكريت
  const HashPassword = await argon2.hash(password)             // نضيف قيمه الهاش للكلمة المرور  

  await prisma.user.create({
    data:{
        username,
        email,
        password:HashPassword
    }
  })
  return res.status(201).json({message:"مرحب"})

   }catch(error){
    return res.status(404).json({message: " توجد مشاكل في الادخال "})}
   
}
export const HandlingLog = async(req:Request,res:Response,next:NextFunction)=>{
    const {username, password} = req.body as user
    const user= await prisma.user.findUnique({
        where:{username}
    })
    if(!user){
        return res.status(400).json({message:" تاكد من كلمة المرور او اسم المستخدم  "})
    }
     
    const passwodSame = await argon2.verify(user.password,password)

    if(!passwodSame){
        return res.status(400).json({message:" تاكد من كلمة المرور او اسم المستخدم  "})
    }
    const token=jwt.sign(
        {id :user.id }, 
        process.env.JWT_SECERT as string,
        {
        expiresIn: '5 days',
    })
    return res.status(200).json({message:" marhap"+ token})
}
