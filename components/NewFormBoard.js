'use client'

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react"
import toast from "react-hot-toast";


const NewFormBoard = () => {
    const router = useRouter();
    const [name, setName] = useState('');
    const [isLoading, setIsloading] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isLoading) return;

        setIsloading(true);
        try {
            const data = await axios.post("/api/board", { name })
            setName('')
            router.refresh();
            toast.success("Board Created")
        } catch (error) {
            toast.error(error.response?.data.error || error.message || 'Something went wrong') // Log network or server errors
        } finally {
            setIsloading(false);
        }
    };

    return (
        <form className='bg-base-100 p-8 rounded-3xl space-y-8 ' onSubmit={handleSubmit}>
            <p className='font-bold text-lg '>Create a new feedback Board</p>
            <label className="form-control w-full ">
                <div className="label">
                    <span className="label-text">Board name</span>
                </div>
                <input
                    required type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full "
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                ></input>

            </label>
            <button className='btn btn-primary btn-block' type='submit'>
                {isLoading ? <span className="loading loading-spinner loading-xs"></span> : ''
                }
                Create Board </button>
        </form>
    )
}

export default NewFormBoard
