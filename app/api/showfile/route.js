import { NextResponse } from "next/server";
import connect from "../../../db/db";
import File from "../../../models/File";


 export const GET = async (request) => {
     try {
        await connect();

        const files = await File.find();
      
       return NextResponse.json({files}, { status: 200 });
      } catch (err) {
        console.log(err)
        return new NextResponse("Database Error", { status: 500 });
      }
 }

 export const DELETE = async (request) => {
  
  const {searchParams}= new URL(request.url);
  const id=searchParams.get('id')
  
  try {
    await connect();
    await File.findByIdAndDelete( id );
    return NextResponse.json({success:true, message:'Done'}, { status: 200 });
   } catch (err) {
     console.log(err)
     return new NextResponse("Database Error", { status: 500 });
   }
}