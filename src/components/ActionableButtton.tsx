'use client'
import Link from 'next/link'
import React from 'react'

interface ActionableButtonProps {
    actions: {
        link: string,
        name: string
    }
}

const ActionableButton: React.FC<ActionableButtonProps> = ({ actions }) => {
    const { link, name } = actions || {};
    return (
        <Link
            href={link}
            // className='px-5 py-1 bg-gray-700 text-white rounded-md active:scale-95 border border-red-500'
        >
            <button
                onClick={() => console.log('clicked')}
                className='px-5 py-1 text-black active:scale-95'
            >
                {name}
            </button>
        </Link>
    )
}

export default ActionableButton
