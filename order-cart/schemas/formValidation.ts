


import * as z from "zod";

export const signUpSchema = z.object({
      username : z.string().min(3,"username must be atleast 3 character long!").max(12,"username can't exceed 12 characters !"),
      email    : z.string().email("email is incorrect!"),
      password : z.string().min(3,"username must be atleast 3 character long!").max(12,"username can't exceed 12 characters !")                         
})


export const signInSchema = z.object({
    email    : z.string().email("email is incorrect!"),
    password : z.string().min(3,"username must be atleast 3 character long!").max(12,"username can't exceed 12 characters !")    
})