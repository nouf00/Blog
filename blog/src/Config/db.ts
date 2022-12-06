import { PrismaClient } from '@prisma/client';

export const prisma= new PrismaClient({
log:['query'],                // عشان يطلع لنا الاستعلام با سي كيول 
  errorFormat :"pretty"
    })


    export const contecctDB= async ()=>{
        try{

            await prisma.$connect()
            console.log(" database is work ")
          
        }catch(error){
            console.log(error);
            process.exit(1);  
        }

    }
