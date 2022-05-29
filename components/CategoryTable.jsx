import React, { useContext } from 'react'
import { GlobalContext } from '../pages/context/GlobalContext'
import Link from 'next/link'

const CategoryTable = () => {
    const { categorys, deleteCategory } = useContext(GlobalContext)
    const deleteData = (id) => {
        deleteCategory(id);
    }
    return (
        <div className="container mx-auto max-w-3xl">
            <div className="w-full shadow">
                <table className="w-full">
                    <thead>
                        <tr className="p-2  border-b">
                            <th className="p-2">Id</th>
                            <th className="p-2">Category Name</th>
                            <th className="p-2">Edit</th>
                            <th className="p-2">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categorys && categorys.map((val, index) => {
                            return (
                                <>
                                    <tr className="p-2 border-b" key={val._id}>
                                        <td className="p-2 font-bold text-center">{index + 1}</td>
                                        <td className="p-2 font-bold text-center">{val.category_name}</td>
                                        <td className="p-2 font-bold text-center">
                                            <Link href={`/admins/category/${val._id}`}><button className="rounded  my-3 px-5 py-1 text-md bg-green-700 text-white hover:bg-green-800" >Edit</button></Link>
                                        </td>
                                        <td className="p-2 font-bold text-center">
                                            <button className="rounded  my-3 px-5 py-1 text-md bg-red-700 text-white hover:bg-red-800" onClick={() => { deleteData(val._id) }}>Delete</button>
                                        </td>
                                    </tr>
                                </>
                            )
                        })}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CategoryTable