import { useState } from 'react';
import './UpvoteButton.css';

interface UpvoteButtonProps {
    initialVoted?: boolean;
    onVote: () => Promise<void>;
}

export const UpvoteButton = ({ initialVoted = false, onVote }: UpvoteButtonProps) => {
    const [isVoted, setIsVoted] = useState(initialVoted);
    const [isVoting, setIsVoting] = useState(false);

    const handleVote = async () => {
        if (isVoting || isVoted) return;

        setIsVoting(true);
        try {
            await onVote();
            setIsVoted(true);
        } catch (error) {
            console.error('Failed to vote:', error);
        } finally {
            setIsVoting(false);
        }
    };

    return (
        <button
            className={`upvote-button ${isVoted ? 'voted' : ''} ${isVoting ? 'voting' : ''}`}
            onClick={handleVote}
            disabled={isVoting}
            aria-label="Upvote"
        >
            <svg
                viewBox="0 0 