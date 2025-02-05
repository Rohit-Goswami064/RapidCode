import { NextResponse } from "next/server";
import Post from "@/models/Post";
import connectMongoDB from "@/libs/mongoose";

export async function POST(req) {
    const { searchParams } = req.nextUrl;
    const postId = searchParams.get("postId");

    try {
        await connectMongoDB();
        const post = await Post.findById(postId);
        if (!post) return NextResponse.json({ error: "Post not found" }, { status: 404 });

        post.votesCounter += 1;
        await post.save();

        return NextResponse.json({ message: "Vote counted" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function DELETE(req) {
    const { searchParams } = req.nextUrl;
    const postId = searchParams.get("postId");

    try {
        await connectMongoDB();
        const post = await Post.findById(postId);
        if (!post) return NextResponse.json({ error: "Post not found" }, { status: 404 });


        if (post.votesCounter > 0) {
            post.votesCounter -= 1;
            await post.save();
        }

        return NextResponse.json({ message: "Vote removed" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
