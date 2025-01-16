import { auth } from '@/auth'
import ButtonLogOut from '@/components/ButtonLogOut'
import NewFormBoard from '@/components/NewFormBoard'
import connectMongo from '@/libs/mongoose'
import User from '@/models/User' 
import Board from "@/models/Board"; // Ensure this is imported



const getUserBoard = async () => {
    const session = await auth()
    await connectMongo()
    return await User.findById(session.user.id).populate("boards");

}


const dashboard = async () => {

    const user = await getUserBoard();

    return (
        <main className='bg-base-200 min-h-screen'  >
            {/* {Header} */}
            <section className='bg-base-100 '>
                <div className=' max-w-5xl mx-auto   bg-base-100 px-5 py-3 flex justify-end '>

                    <ButtonLogOut />
                </div>

            </section>
            <section className=' max-w-5xl mx-auto  px-5 py-12 space-y-12  '>
                <NewFormBoard />


                <div>

                    <h1 className=' font-extrabold text-xl mb-4'>
                        {user.boards.length}   boards
                    </h1>
                    <ul className='space-y-4'
                    > {user.boards.map((board) => {
                        return (
                            <div key={board.id} className='bg-base-100 p-6 rounded-3xl'>{board.name}</div>
                        )

                    })}</ul>
                </div>

            </section>

        </main>
    )
}

export default dashboard
