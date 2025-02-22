import { PrismaClient } from "@prisma/client";
import { NextAuthOptions } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";


const prisma = new PrismaClient();

export const authOptions : NextAuthOptions = {
    providers:[
        CredentialProvider({
            id:"adi",
            credentials:{
                email: { label:"email", type:"text"},
                password : { label: "password", type:"password" }
            },
            async authorize(credentials): Promise<{ id: string; username: string; email: string } | null> {
                console.log("credentials received!");
                try {
                    const user = await prisma.userDetails.findFirst({
                    where:{ email:credentials?.email }
                    })

                    if(!user){
                        return Promise.reject(new Error("User does not exist!")); 
                    }

                    const isCorrect = await bcrypt.compare(credentials?.password || "", user.password);
                    if(!isCorrect ){
                        return Promise.reject(new Error("invalid password!"));
                    }

                    return { id:user.id.toString(), username:user.username,email:user.email};
                 
                }catch (error) {
                    //console.log("error in db query !",error);
                    return Promise.reject(error);
                }

            }
        })
    ],
    session:{ 
    strategy:"jwt"
    },
    pages:{
    signIn:'/auth/sign-in',
    error: "/auth/sign-in"
    },
    secret:process.env.NEXTAUTH_SECRET,
    callbacks:{
    async jwt ({token,user}) {
       if(user){
          token.id = user.id?.toString();
          token.username = user.username; 
          token.email = user.email;
       } 
       
       return token;
   }, 
   async session({session,token}) {
       if(token){
           session.user.id = token.id;
           session.user.username = token.username;
           session.user.email = token.email;
       }
       return session;
   }
}

}



