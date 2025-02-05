'use client';

import axios from 'axios';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const ButtonUpvote = ({ postId, initialVoteCount }) => {
    const localStorageVotedKey = `rapideCode-hasVote-${postId}`;
    const localStorageVoteCountKey = `rapideCode-voteCount-${postId}`;

    const [hasVoted, setHasVoted] = useState(false);
    const [voteCount, setVoteCount] = useState(Number(initialVoteCount) || 0);
    const [isVoting, setIsVoting] = useState(false);

    // ✅ **Check `localStorage` on Component Mount**
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedVoteCount = localStorage.getItem(localStorageVoteCountKey);
            const voted = localStorage.getItem(localStorageVotedKey);

            if (storedVoteCount) {
                setVoteCount(Number(storedVoteCount)); // Load stored vote count
            } else {
                setVoteCount(Number(initialVoteCount) || 0); // Fallback to initial count
            }

            setHasVoted(!!voted);
        }
    }, []);

    const handleVote = async () => {
        if (isVoting) return;
        setIsVoting(true);

        try {
            if (!hasVoted) {
                const newCount = voteCount + 1;
                setVoteCount(newCount);
                setHasVoted(true);
                await axios.post(`/api/vote?postId=${postId}`);

                localStorage.setItem(localStorageVotedKey, 'true');
                localStorage.setItem(localStorageVoteCountKey, newCount);
            } else {
                const newCount = voteCount - 1;
                setVoteCount(newCount);
                setHasVoted(false);
                await axios.delete(`/api/vote?postId=${postId}`);

                localStorage.removeItem(localStorageVotedKey);
                localStorage.setItem(localStorageVoteCountKey, newCount);
            }
        } catch (error) {
            toast.error(error.response?.data?.error || 'Something went wrong');
            // Revert the optimistic updates if there's an error
            if (!hasVoted) {
                setVoteCount(voteCount);
                setHasVoted(false);
            } else {
                setVoteCount(voteCount);
                setHasVoted(true);
            }
        } finally {
            setIsVoting(false);  // This ensures loading state is always cleared
        }
    };

    return (
        <button
            onClick={handleVote}
            className={`border group px-4 py-2 rounded-xl text-lg m-2 hover:btn-outline hover:text-black transition-all duration-200 ${hasVoted ? 'bg-neutral text-neutral-content' : 'btn-outline text-black'
                }`}
            disabled={isVoting}
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
