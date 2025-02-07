'use client';

import React from 'react';

const ButtonSecondary = ({ onClick, href = '', extraStyle = "", children = "See How It Works" }) => {
    const baseStyle = " px-5 py-3 border border-transparent text-base font-medium rounded-xl text-indigo-700 bg-indigo-100 hover:bg-indigo-200 transition duration-150 ease-in-out";

    if (href) {
        return (
            <a href={href} className={`${baseStyle} ${extraStyle}`}>
                {children}
            </a>
        );
    }

    return (
        <button onClick={onClick} className={`${baseStyle} ${extraStyle}`}>
            {children}
        </button>
    );
};

export default ButtonSecondary;
