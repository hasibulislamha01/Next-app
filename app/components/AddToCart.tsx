'use client'
import React from 'react'

const AddToCart = () => {
    return (
        <button
            onClick={() => console.log('clicked')}
            className='px-5 py-1 bg-gray-700 text-white rounded-md active:scale-95'>
            Action
        </button>
    )
}

export default AddToCart
