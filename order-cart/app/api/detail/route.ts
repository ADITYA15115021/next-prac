
import { NextRequest } from "next/server";
import { data } from "./data";



export async function GET(request:NextRequest) {
    const headers = request.headers;
    console.log(headers);    
    return Response.json(data);
}


export async function POST(request:NextRequest){
    
    const body = await request.json();
    const newData = {
        id:data.length + 1,
        name:body.name,
        address : body.address
    }
    data.push(newData);
    return Response.json( JSON.stringify(newData),{
        headers:{ "content-type":"application/json"},
        status : 201 
    })    

}

