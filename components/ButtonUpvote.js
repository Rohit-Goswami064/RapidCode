'use client';

import axios from 'axios';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const ButtonUpvote = ({ postId, initialVoteCount }) => {
    const localStorageVotedKey = `rapideCode-hasVote-${postId}`;
    const localStorageVoteCountKey = `rapideCode-voteCount-${postId}`;

    const [hasVoted, setHasVoted] = useState(false);
    const [voteCount, setVoteCount] = useState(() => {
        return Number(initialVoteCount ?? 0);
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedVoteCount = Number(localStorage.getItem(localStorageVoteCountKey));
            setVoteCount(isNaN(storedVoteCount) ? Number(initialVoteCount ?? 0) : storedVoteCount);
            setHasVoted(!!localStorage.getItem(localStorageVotedKey));
        }
    }, [initialVoteCount]);

    const handleVote = async () => {
        const newVoteState = !hasVoted;
        setHasVoted(newVoteState);
        try {
            await axios.post(`/api/vote?postId=${postId}`);
            const newCount = voteCount + (newVoteState ? 1 : -1);
            setVoteCount(newCount);
            localStorage.setItem(localStorageVoteCountKey, newCount);
            newVoteState ? localStorage.setItem(localStorageVotedKey, 'true') : localStorage.removeItem(localStorageVotedKey);
        } catch (error) {
            toast.error(error.response?.data?.error || 'Something went wrong');
            setHasVoted(!newVoteState);
        }
    };

    return (
        <button
            onClick={handleVote}
            className={`border group px-4 py-2 rounded-xl text-lg m-2 hover:btn-outline hover:text-black transition-all duration-200 ${hasVoted ? 'bg-neutral text-neutral-content' : 'btn-outline text-black'}`}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 group-hover:-translate-y-0.5 duration-200"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
            </svg>
            {voteCount}
        </button>
    );
};

export default ButtonUpvote;
