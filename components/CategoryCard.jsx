import React from 'react'
import Link from 'next/link'

const CategoryCard = () => {
    return (
        <div className="container mx-auto max-w-3xl my-4">
            <div className="shadow-md p-4">
                <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">category ( 44 )</h3>

                    <Link href={'category/add-category'}><button type="submit" className="rounded  my-3 px-5 py-1 text-md bg-blue-700 text-white hover:bg-blue-800">New</button></Link>
                </div>
            </div>
        </div>
    )
}

export default CategoryCard