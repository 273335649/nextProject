import Link from 'next/link'
import React from 'react'

const index = () => {
    return (
        <Link href={'/dashboard'} className='bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400'>login</Link>
    )
}

export default index