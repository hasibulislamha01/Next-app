import { NextResponse } from "next/server"

export function GET(){
    const todos = [
        {
            id: '1',
            name: 'lorem10',
        },
        {
            id: '1',
            name: 'lorem10',
        },
        {
            id: '1',
            name: 'lorem10',
        },
    ]
    return NextResponse.json(todos)
}

export function POST(){
    return NextResponse.json({
        message: "posted",
        status: "success"
    })
}