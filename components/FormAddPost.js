'use client'

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react"
import toast from "react-hot-toast";


const FormAddPost = ({ boardId }) => {
    const router = useRouter();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isLoading, setIsloading] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isLoading) return;

        setIsloading(true);
        try {
            await axios.post(`/api/post?boardId=${boardId}`, { title, description })
            setTitle('')
            setDescription('')
            router.refresh();
            toast.success("Post Added")
        } catch (error) {
            toast.error(error.response?.data?.error || error.message || 'Something went wrong') // Log network or server errors
        } finally {
            setIsloading(false);
        }
    };

    return (
        <form className='bg-base-100 p-8 rounded-3xl space-y-8 w-full md:w-96  shrink-0 sticky top-8' onSubmit={handleSubmit}>
            <p className='font-bold text-lg '>Suggest a feature</p>
            <label className="form-control w-full ">
                <div className="label">
                    <span className="label-text">short, description title</span>
                </div>
                <input
                    required type="text"
                    placeholder="Green button plz"
                    className="input input-bordered w-full "
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                ></input>

            </label>
            <label className="form-control">
                <div className="label">
                    <span className="label-text">Description</span>
                    <span className="label-text-alt">Alt label</span>
                </div>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="textarea textarea-bordered h-24" placeholder="The login button color should be green to match our brad colors"
                    maxLength="1000"></textarea>

            </label>
            <button className='btn btn-primary btn-block' type='submit'>
                {isLoading ? <span className="loading loading-spinner loading-xs"></span> : ''
                }
                Add Post </button>
        </form>
    )
}

export default FormAddPost
