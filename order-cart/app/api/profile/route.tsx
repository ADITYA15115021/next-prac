

import { NextRequest } from "next/server";
import { data } from "../detail/data";
import { headers } from "next/headers";

export async function GET( request:NextRequest) {

    const searhParams = request.nextUrl.searchParams;
    const name = searhParams.get("name");
    console.log(name);
    const searchResult  = data.find( obj => obj.name === name );
    console.log(searchResult);
    if( searchResult ){
        return new Response(`<h1>${searchResult.name}</h1> 
                             <h2>${searchResult.address}</h2>`,{
            headers:{
                "Content-Type" : "text/html"
            },
            status:200
        })
    }else{
        return Response.json( { msg : "not found !" })
    } 
}