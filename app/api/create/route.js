import { NextResponse } from "next/server";
import connect from "../../../db/db";
import File from "../../../models/File";





 export const POST = async (request) => {
  const { image, title } = await request.json();
  const newFile = new File({
       image,
       title
   });

    try {
      await connect();
     await newFile.save();
      return new NextResponse("File has been created", {
        status: 201,
      });
    } catch (err) {
      console.log(err)
      return new NextResponse(err.message, {
        status: 500,
      });
   }
 };
