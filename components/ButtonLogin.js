'use client'
import React from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/react';

const ButtonLogin = ({ session, extraStyle }) => {
    const DashboardUrl = "/dashboard";

    if (session) {
        return <Link href={DashboardUrl}>
            <button className={`btn btn-primary ${extraStyle ? extraStyle : ''}`}>{`Welcome ${session.user.name || 'friend'}`}</button>
        </Link>
    }
    else {
        return <button
            onClick={() => (
                signIn(undefined, { callbackUrl: DashboardUrl })
            )} className={`btn btn-primary  ${extraStyle ? extraStyle : ''}`} > Get Started</ button>
    }

};

export default ButtonLogin;
