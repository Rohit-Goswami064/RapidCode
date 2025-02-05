import React from 'react'

const CardPost = ({ post }) => {
    return (
        <li className='bg-base-100 rounded-2xl p-6 flex justify-between items-center '>
            <div>
                <div className=' font-bold mb-1'>{post.title} </div>
                <div className="opacity-80 leading-relaxed max-h-32 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 scrollable-content">
                    {post.description}
                </div>

            </div>

            <button className='btn btn-square btn-sm'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-caret-up"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M11.293 7.293a1 1 0 0 1 1.32 -.083l.094 .083l6 6l.083 .094l.054 .077l.054 .096l.017 .036l.027 .067l.032 .108l.01 .053l.01 .06l.004 .057l.002 .059l-.002 .059l-.005 .058l-.009 .06l-.01 .052l-.032 .108l-.027 .067l-.07 .132l-.065 .09l-.073 .081l-.094 .083l-.077 .054l-.096 .054l-.036 .017l-.067 .027l-.108 .032l-.053 .01l-.06 .01l-.057 .004l-.059 .002h-12c-.852 0 -1.297 -.986 -.783 -1.623l.076 -.084l6 -6z" /></svg> </button>
        </li>
    )
}

export default CardPost
