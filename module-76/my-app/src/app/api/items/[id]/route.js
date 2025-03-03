import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {

    const { id } = await params;
    const result = await dbConnect('users').findOne({ _id: new ObjectId(id) })

    return Response.json(result)
}

export async function DELETE(req, params) {

    const id = await params;

    return Response.json({ ...id, method: 'DELETE' })
}

export async function PATCH(req, { params }) {

    const { id } = params;
    const filter = { _id: new ObjectId(id) };
    const updatedDoc = await req.json();
    const result = await dbConnect('users').updateOne(filter, { $set: { ...updatedDoc } }, { upsert: true })

    return Response.json(result)
}
