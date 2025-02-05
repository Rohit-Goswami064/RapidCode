import CardPost from "@/components/CardPost";
import FormAddPost from "@/components/FormAddPost";
import connectMongo from "@/libs/mongoose"
import Board from "@/models/Board";
import Post from "@/models/Post";
import { redirect } from "next/navigation";


const getData = async (boardId) => {
    await connectMongo();

    const board = await Board.findById(boardId);
    const posts = await Post.find({
        boardId: boardId,
    }).sort({ createdAt: -1 });
    if (!board) {
        redirect('/')
    }

    return {
        board,
        posts,
    };
}


export default async function PublicFeedbackBoard({ params }) {
    const { boardId } = await params;
    const { board, posts } = await getData(boardId);

    return (

        <main className="bg-base-200 min-h-screen ">
            <section className=" max-w-5xl mx-auto p-5">
                <h1 className="text-lg font-bold  ">
                    {board.name}
                </h1>
            </section>
            <section className="flex items-start  flex-col md:flex-row gap-8 max-w-5xl mx-auto px-5 pb-12">
                <FormAddPost boardId={boardId} />
                <ul className="space-y-4 w-full flex-grow">
                    {posts.map((post) => (
                        <CardPost key={post._id} post={post} />
                    ))}


                </ul>
            </section>

        </main>)
}