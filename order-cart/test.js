
import * as z from "zod";

const schema = z.object({
    name: z.string().min(3,"name should be atleat 3 letters long"),
    password : z.string().min(6,"password must be atleast length 6").max(12,"password can't exceed 12 ")
})

const obj = {
    name: "ad",
    password:"2234"
}
const response  = schema.safeParse(obj);

if( !response.success){
    console.log(response.error.errors);
}else{
    console.log("validation successful")
}

