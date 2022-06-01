import Link from 'next/link'
import React from 'react'

const TaskCard = () => {
    return (
        <div>
            <div className="container mx-auto max-w-3xl my-4">
                <div className="shadow-md p-4">
                    <div className="flex justify-between items-center">
                        <h3 className="text-xl font-semibold">category ( 44 )</h3>
                        <Link href={'task/add-task'}><button type="submit" className="rounded  my-3 px-5 py-1 text-md bg-blue-700 text-white hover:bg-blue-800">New</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskCard