'use client'

import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const ButtonUpvote = ({ postId, initialVoteCount }) => {
    // Ensure initialVoteCount is a number, default to 0 if undefined
    const [isVoting, setIsVoting] = useState(false);
    const [hasVoted, setHasVoted] = useState(false);
    const [voteCount, setVoteCount] = useState(Number(initialVoteCount) || 0);

    const handleVote = async () => {
        if (isVoting) return;

        setIsVoting(true);
        try {
            if (!hasVoted) {
                await axios.post(`/api/vote?postId=${postId}`);
                setVoteCount(prev => prev + 1);
                setHasVoted(true);
                toast.success("Vote counted!");
            } else {
                await axios.delete(`/api/vote?postId=${postId}`);
                setVoteCount(prev => prev - 1);
                setHasVoted(false);
                toast.success("Vote removed!");
            }
        } catch (error) {
            toast.error(error.response?.data?.error || "Something went wrong");
        } finally {
            setIsVoting(false);
        }
    };

    return (
        <button
            onClick={handleVote}
            className={`border px-4 py-2 rounded-xl text-lg m-2 hover:btn-outline hover:text-black  ${hasVoted ? 'bg-neutral text-neutral-content' : 'btn-outline text-black'}`}
            disabled={isVoting}
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
            </svg>

            {isVoting ? (
                <span className="loading loading-spinner loading-xs"></span>
            ) : (
                <span className="text-xs">{voteCount}</span>
            )}
        </button>
    );
};

export default ButtonUpvote;