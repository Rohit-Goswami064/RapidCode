'use client'

import { useState } from 'react'

const FAQ = ({ qa }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <li>
            <button
                className="py-5 font-semibold border-b w-full text-left flex items-center justify-between transition"
                onClick={() => setIsOpen(!isOpen)}
            >
                <p>{qa.question}</p>
                {isOpen ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="size-4"
                    >
                        <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="size-5"
                    >
                        <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                    </svg>
                )}
            </button>

            {isOpen && <div className="mt-3 mb-6 opacity-90">{qa.answer}</div>}
        </li>
    );
};

export default FAQ;
