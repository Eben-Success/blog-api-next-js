import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic"
import { NextURL } from "next/dist/server/web/next-url";


export async function POST(req: Request){
    
    try {
        const {title, description} = await req.json();
    await connectMongoDB();
    await Topic.create({title, description});
    console.log("Topic created Successful")
    return Response.json({message: "Topic Created"}, {status: 201})
    }
    catch(error){
        console.log(`Error creating topic ${error}`);
        return Response.json({message: "Error creating topic"})
        
    }
    
}

// Get all post
export async function GET(){
    try{
        await connectMongoDB();
        const topics = await Topic.find();
        return Response.json({topics})
    }
    catch (error) {
        console.log(`Error getting topics ${error}`);
        return Response.json({message: error})
        
    }
}

export async function DELETE(req: Request){
    try {
        const url = new URL(req.url);
        const id = url.searchParams.get("id");
        await connectMongoDB();
        await Topic.findByIdAndDelete(id)
        return Response.json({message: "Post deleted"}, {status: 200})
    } catch (error){
        console.log(`Error deleting post ${error}`);
        return Response.json({message: error})
    }
}