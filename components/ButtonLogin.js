import React from 'react';
import Link from 'next/link';

const ButtonLogin = ({ islogin }) => {
    console.log(islogin)
    if (islogin) {
        return <Link href="/dashboard">
            <button className="btn bg-white">Login</button>
        </Link>
    }
    else {
        return <button className='btn btn-primary'>login</button>
    }

};

export default ButtonLogin;
