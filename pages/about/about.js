import React from 'react'
import Link from 'next/link';

function about() {
    return (
        <div className='text-blue-700'>
            Halaman about
            <Link href="../post/post">Kembali ke post</Link>
        </div>
    )
}

export default about
