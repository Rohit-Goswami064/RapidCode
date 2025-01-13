'use client'
import { signOut } from 'next-auth/react'

import React from 'react'

const ButtonLogOut = () => {
    return (
        <button
            className='btn btn-ghost'
            onClick={() => signOut()}>

            Logout
        </button >
    )
}

export default ButtonLogOut
