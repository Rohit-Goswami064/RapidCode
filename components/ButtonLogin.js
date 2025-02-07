'use client'

import React from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/react';



const ButtonLogin = ({ session, extraStyle = "", text }) => {

    const DashboardUrl = "/dashboard";

    if (session) {
        return (
            <Link href={DashboardUrl}>
                <button className={`px-5 py-3 border border-transparent  text-base font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 transition duration-150 ease-in-out ${extraStyle}`}>
                    {`Welcome ${session.user.name || 'friend'}`}
                </button>
            </Link>
        );
    } else {
        return (
            <button
                onClick={() => signIn(undefined, { callbackUrl: DashboardUrl })}
                className={`px-5 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 transition duration-150 ease-in-out ${extraStyle}`}
            >
                {text || "Get Started for Free"}
            </button>
        );
    }
};

export default ButtonLogin;
