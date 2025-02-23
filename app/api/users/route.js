import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.json({
        message: 'user data found in next server'
    })
}