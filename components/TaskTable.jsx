import React from 'react'

const TaskTable = () => {
    return (
        <div>
            <div className="container mx-auto max-w-3xl">
                <div className="w-full shadow overflow-y-scroll">
                    <table className="w-full">
                        <thead>
                            <tr className="p-2  border-b">
                                <th className="p-2">Id</th>
                                <th className="p-2">First Name</th>
                                <th className="p-2">Last Name</th>
                                <th className="p-2">Username</th>
                                <th className="p-2">Email</th>
                                <th className="p-2">Phone</th>
                                <th className="p-2">Education</th>
                                <th className="p-2">Edit</th>
                                <th className="p-2">Delete</th>
                            </tr>
                        </thead>
                        {/* <tbody>
                            {users && users.map((val, index) => {
                                return (
                                    <>
                                        <tr className="p-2 border-b" key={val._id}>
                                            <td className="p-2 font-bold text-center">{index + 1}</td>
                                            <td className="p-2 font-bold text-center">{val.fname}</td>
                                            <td className="p-2 font-bold text-center">{val.lname}</td>
                                            <td className="p-2 font-bold text-center">{val.username}</td>
                                            <td className="p-2 font-bold text-center">{val.email}</td>
                                            <td className="p-2 font-bold text-center">{val.phone}</td>
                                            <td className="p-2 font-bold text-center">{val.education}</td>
                                            <td className="p-2 font-bold text-center">
                                                <Link href={`/admins/user/${val._id}`}><button className="rounded  my-3 px-5 py-1 text-md bg-green-700 text-white hover:bg-green-800" >Edit</button></Link>
                                            </td>
                                            <td className="p-2 font-bold text-center">
                                                <button className="rounded  my-3 px-5 py-1 text-md bg-red-700 text-white hover:bg-red-800" onClick={() => { deleteData(val._id) }}>Delete</button>
                                            </td>
                                        </tr>
                                    </>
                                )
                            })}
                        </tbody> */}
                    </table>
                </div>
            </div>
        </div>
    )
}

export default TaskTable