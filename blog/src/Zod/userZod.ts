import { type } from "os"
import {z}from "zod"


export const UserSchemaRegister =z.object({
    body:z.object({
        username:z.string({required_error:" Please enter a username ", invalid_type_error:" Please enter a valid username"}),
        password:z.string({required_error:" Please enter a password ", invalid_type_error:" Please enter a valid password"})
        .min(8, "must be the passwoed more then 8" ).max(30, "must be the passwoed less then 30"),
        email:z.string().email()
    })
})


export const UserSchemaLog =z.object({
    body:z.object({
        username:z.string({required_error:" Please enter a username ", invalid_type_error:" Please enter a valid username"}),
        password:z.string({required_error:" Please enter a password ", invalid_type_error:" Please enter a valid password"})
    
    
    })
})
 export const UsreId=z.object({
    params:z.object({
        id:z.string({required_error:" Please enter a id in params ", invalid_type_error:" Please enter a valid id "})
    })
})

export type  UsreIdtype =z.infer< typeof UsreId>['params']
