import FormAddPost from "@/components/FormAddPost";
import connectMongo from "@/libs/mongoose"
import Board from "@/models/Board";
import { redirect } from "next/navigation";


const getBoardId = async (boardId) => {
    await connectMongo();

    const board = await Board.findOne({
        _id: boardId,
    })
    if (!board) {
        redirect('/')
    }

    return board;
}


export default async function PublicFeedbackBoard({ params }) {
    const { boardId } = params
    const board = await getBoardId(boardId);
    return <main className="min-h-screen bg-base-200 "> {board.name}
        <FormAddPost boardId={boardId} />
    </main>
}