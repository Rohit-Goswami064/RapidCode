import React from 'react';
import Link from 'next/link';

const ButtonLogin = ({ islogin, name, extraStyle }) => {
    console.log(extraStyle)
    if (islogin) {
        return <Link href="/dashboard">
            <button className={`btn btn-primary ${extraStyle ? extraStyle : ''}`}>{`Welcome ${name}`}</button>
        </Link>
    }
    else {
        return <button className='btn btn-primary'>Login</button>
    }

};

export default ButtonLogin;
