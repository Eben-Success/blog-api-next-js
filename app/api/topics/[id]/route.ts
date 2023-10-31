import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";

// Update Topic
export async function PUT(req: Request, { params }: any){
    try{
        const { id } = params;
        const {newTitle: title, newDescription: description} = await req.json();
        await connectMongoDB();
        await Topic.findByIdAndUpdate(id, {title, description});
        return Response.json({message: "Topic updated"}, {status: 200});
    } catch (error){
        return Response.json({message: `Error updating topic. Error message: ${error}`});
    }
}