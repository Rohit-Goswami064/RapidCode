import { auth, authOptions } from '@/auth'
import ButtonLogOut from '@/components/ButtonLogOut'
import NewFormBoard from '@/components/NewFormBoard'
import connectMongo from '@/libs/mongoose'
import User from '@/models/User'
import Board from "@/models/Board"; // Ensure this is imported
import Link from 'next/link'
import { getServerSession } from 'next-auth'
import ButtonCheckout from '@/components/ButtonCheckout'



const getUserBoard = async () => {
    const session = await getServerSession(authOptions);
    await connectMongo()
    return await User.findById(session.user.id).populate("boards");

}


const dashboard = async () => {

    const user = await getUserBoard();

    return (
        <main className='bg-base-200 min-h-screen'  >
            {/* {Header} */}
            <section className='bg-base-100 '>
                <div className=' max-w-5xl mx-auto   bg-base-100 px-5 py-3 flex justify-between '>

                    <ButtonLogOut />
                </div>

            </section>
            <section className=' max-w-5xl mx-auto  px-5 py-12 space-y-12  '>
                <NewFormBoard />


                <div>

                    <h1 className=' font-extrabold text-xl mb-4'>
                        {user.boards.length}   Boards
                    </h1>
                    <ul className='space-y-4'
                    > {user.boards.map((board) => {
                        return (
                            <li key={board._id}
                            >
                                <Link
                                    href={`dashboard/b/${board._id}`}
                                    className=' block bg-base-100 p-6 rounded-3xl hover:bg-neutral hover:text-neutral-content duration-200'>
                                    {board.name}

                                </Link></li>
                        )

                    })}</ul>
                </div>

            </section>

        </main >
    )
}

export default dashboard
