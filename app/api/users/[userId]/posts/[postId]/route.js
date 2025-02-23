import { NextResponse } from "next/server"

export function GET({params}){
    const specificPostForSpecificUser = {
        userId: params.userId,
        postId: params.postId
    }
    console.log(specificPostForSpecificUser)
    return NextResponse.json({
        message: 'gotcha'
    })
}