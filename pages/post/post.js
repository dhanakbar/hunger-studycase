import React from 'react'
import Link from 'next/link';

function post() {
    return (
        <div className='text-blue-700'>
            Ini Halaman Post
            <Link href="../about/about">Ke halaman about</Link>
        </div>
    )
}

export default post
