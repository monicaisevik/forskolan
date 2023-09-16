import User from '../../../../models/User';
import connect from '../../../../db/db';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

export const POST= async(request)=>{
const {username, password}=await request.json();

await connect()

const hasedPassword= await bcrypt.hash(password, 6);

const newUser= new User({
    username,
    password: hasedPassword,
})

try{
await newUser.save();
return new NextResponse('User has been created',{
    status:201
})
}catch(err){
return new NextResponse(err.message, {
    status: 500
})
}




}
