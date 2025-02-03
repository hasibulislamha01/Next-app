import React from 'react'
import AddToCart from '../components/AddToCart'

const ProductPage = async() => {


    return (
        <section>

            <section className='w-60 h-72 flex flex-col shadow-lg shadow-gray-300 hover:shadow-red-100 rounded-md p-1'>
                <div className='h-1/2 bg-gray-100 rounded-md'></div>
                <div className='p-3 space-y-5'>
                    <div>
                        <h1>Heading</h1>
                        <p>paragraph</p>
                    </div>
                    <AddToCart />
                </div>
            </section>
        </section>
    )
}

export default ProductPage
