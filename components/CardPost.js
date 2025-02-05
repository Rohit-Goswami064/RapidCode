import React from 'react'
import ButtonUpvote from './ButtonUpvote'

const CardPost = ({ post }) => {
    return (
        <li className='bg-base-100 rounded-2xl p-6 flex justify-between items-center '>
            <div>
                <div className=' font-bold mb-1'>{post.title} </div>
                <div className="opacity-80 leading-relaxed max-h-32 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 scrollable-content">
                    {post.description}
                </div>

            </div>

            <ButtonUpvote postId={post._id.toString()} initialValue={post.votesCounter} />
        </li>
    )
}

export default CardPost
