import {z} from "zod"

export const addBolg =z.object({
    body:z.object({
        title:z.string({required_error:" Please enter a title ", invalid_type_error:" Please enter a valid title"}).min(3,"the title must be a more then 3").max(10,"the title must be a less then 10"),

        message:z.string({required_error:" Please enter a message ", invalid_type_error:" Please enter a valid message"}).max(200, "the masseg must be a less then 200"),

    })
})



export const UpdataBolg =z.object({
    body:z.object({
        title:z.string({required_error:" Please enter a title ", invalid_type_error:" Please enter a valid title"}).min(3,"the title must be a more then 3").max(10,"the title must be a less then 10"),
        message:z.string({required_error:" Please enter a message ", invalid_type_error:" Please enter a valid message"}).max(200, "the masseg must be a less then 200"),

    }),
    params:z.object({
        idblog:z.string({required_error:" Please enter a id in params ", invalid_type_error:" Please enter a valid id "})
    })
})


 export const BlogId=z.object({
    params:z.object({
        id:z.string({required_error:" Please enter a id in params ", invalid_type_error:" Please enter a valid id "})
    })
})


 export const BlogDelet=z.object({
    params:z.object({
        id:z.string({required_error:" Please enter a id in params ", invalid_type_error:" Please enter a valid id "})
    })
})

export type  BlogIdtype =z.infer< typeof BlogId>['params']
export type  BlogUpdatatype =z.infer< typeof UpdataBolg>['params']
export type  Blogdelettype =z.infer< typeof BlogDelet>['params']