// an api endpoint to create a new post document in database. The route expecets a POST request with tilte ,description in the request body . the boardId and userId are passed as query parameters.The userId is the id of the user who is creating the post. The boardId is the id of the board where the post is being created. The post is created by the user and belongs to the board filed  is polpultaet with the user's Id if they are logged in 

import Post from "@/models/Post";
import { NextResponse } from "next/server";
import connectMongo from "@/libs/mongoose";
import { Filter } from "bad-words";
import { authOptions } from "@/auth";
import { getServerSession } from "next-auth";
import User from "@/models/User";

export async function POST(req) {
    try {
        const { title, description } = await req.json();
        const { searchParams } = await req.nextUrl;
        const boardId = searchParams.get('boardId');

        const badWordfilter = new Filter();
        const filteredTitle = badWordfilter.clean(title);
        const filteredDescription = badWordfilter.clean(description);


        if (!filteredTitle || !filteredDescription) {
            return NextResponse.json({ error: "title/description request" }, { status: 400 });
        }

        const session = await getServerSession(authOptions);
        console.log('check' + session)


        await connectMongo();
        const post = await Post.create({ title: filteredTitle, description: filteredDescription, boardId, userId: session?.user?.id });
        return NextResponse.json(post);
    } catch (e) {
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}

export async function DELETE(req) {
    try {
        const { searchParams } = await req.nextUrl;
        const postId = searchParams.get('postId');
        if (!postId) {
            return NextResponse.json(
                { error: "postId is required" },
                { status: 400 });
        };


        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 });
        };
        await connectMongo();
        const user = await User.findById(session.user.id);
        if (!user) {
            return NextResponse.json(
                { error: "User not found" },
                { status: 404 });
        };

        const post = await Post.findByIdAndDelete(postId);
        if (!post) {
            return NextResponse.json(
                { error: "Post not found" },
                { status: 404 });
        };
        if (!user.boards.includes(post.boardId.toString())) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 });
        };
        await Post.deleteOne({ _id: postId });
        return NextResponse.json({ message: "Post deleted" });
    } catch (e) {
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}
