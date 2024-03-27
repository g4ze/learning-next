import { NextRequest } from "next/server"


export async function POST(req:NextRequest){
    const body=await req.json();
    console.log(body);

}
export async function GET(){
    console.log("GET request");
    return Response.json({
        status:200,
        json:{
            name:"John Doe",
            email:"nilkjk"
        }})
}