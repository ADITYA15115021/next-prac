import { data } from "../data";


export async function GET(request : Request ,context : {params : { id : string }}) {
    
    const requestId = context.params.id;
    const searchResult  = data.find( c => c.id === parseInt(requestId) );
    if( searchResult ){
        return Response.json(searchResult);
    }else{
        return Response.json({  msg : "user details does not exist " ,data});
    }

    
}