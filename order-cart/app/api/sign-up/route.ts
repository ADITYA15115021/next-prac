import { NextRequest, NextResponse } from "next/server";
import { signUpSchema } from "@/schemas/formValidation";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function POST(request :NextRequest){
     
    
        const body = await request.json();
        const response  = signUpSchema.safeParse(body);
        console.log(response.success);

        if( !response.success ){
           return NextResponse.json({
            status: 400,
            message: "signup validation error",
            error : response.error.format()
           })
        }

        try {
            const hashedPassword = await bcrypt.hash(body.password, 10);
            const response = await prisma.userDetails.create({
                data :{
                username : body.username,
                email : body.email,
                password : hashedPassword
                }
            });

            console.log("user sign-up!",response);

            return Response.json({
                status:201,
                message:"sign-up successfull!",
                data:response
            })

        } catch (error) {
            console.log("error in sign-up",error.code);
            return Response.json({
                status:400,
                message:"unable to sign-up",
                error:error.code
            })

        }

        
    
} 