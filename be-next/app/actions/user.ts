"user server"
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
const client= new PrismaClient();
export async function signup(username: string, password: string) {
    await client.user.create({
        data:{
            username: username,
            password: password
        }
    })
    console.log({username,password})

    return NextResponse.json({ message: "User created"})
}