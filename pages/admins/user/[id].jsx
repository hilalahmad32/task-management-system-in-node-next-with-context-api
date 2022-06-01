import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../../../components/Navbar'
import Sidebar from '../../../components/Sidebar'
import { UserContext } from '../../context/UserContext'

const UpdateUser = ({ sidebar, setSidebar }) => {
    const { updateUsers } = useContext(UserContext)
    const { query } = useRouter();
    const [users, setUsers] = useState({
        fname: '',
        lname: '',
        email: '',
        education: '',
        username: '',
        phone: '',
    })
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setUsers({ ...users, [name]: value })
    }
    const getUserById = async () => {
        const res = await (await fetch(`../../api/admins/users/${query.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'adminauthtoken': localStorage.getItem('adminToken')
            }
        })).json();
        if (res.success) {
            setUsers(res.users)
        }
    }

    const submit = (e) => {
        e.preventDefault();
        updateUsers(query.id, users)
    }
    useEffect(() => {
        getUserById()
    }, [])

    return (
        <div>
            <div className="flex relative">
                <Sidebar sidebar={sidebar} />
                <div className="content md:ml-52 m-0 w-full">
                    <Navbar updateSidebar={setSidebar} sidebar={sidebar} />
                    <div className="container my-16 max-w-xl mx-auto">
                        <Link href="/admins/user"><button type="submit" className="rounded  mb-3 px-5 py-1 text-md bg-blue-700 text-white hover:bg-blue-800">Go Back</button></Link>
                        <div className="shadow-md  rounded-md">
                            <h1 className="text-4xl text-center pt-4 text-black">Add User</h1>

                            <form action="" className="p-5" onSubmit={submit} >
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
                                    <div className="my-2">
                                        <label htmlFor="" className="text-md font-semibold">
                                            Enter First name
                                        </label>
                                        <input type="text" onChange={handleChange} name="fname" value={users.fname} id="" className="rounded w-full my-3 px-2 py-1 text-md outline-blue-500 border" />
                                    </div>
                                    <div className="my-2">
                                        <label htmlFor="" className="text-md font-semibold">
                                            Enter Last Name
                                        </label>
                                        <input type="text" onChange={handleChange} value={users.lname} name="lname" id="" className="rounded w-full my-3 px-2 py-1 text-md outline-blue-500 border" />
                                    </div>
                                    <div className="my-2">
                                        <label htmlFor="" className="text-md font-semibold">
                                            Enter Email
                                        </label>
                                        <input type="email" onChange={handleChange} value={users.email} name="email" id="" className="rounded w-full my-3 px-2 py-1 text-md outline-blue-500 border" />
                                    </div>
                                    <div className="my-2">
                                        <label htmlFor="" className="text-md font-semibold">
                                            Enter Username
                                        </label>
                                        <input type="text" onChange={handleChange} value={users.username} name="username" id="" className="rounded w-full my-3 px-2 py-1 text-md outline-blue-500 border" />
                                    </div>
                                    <div className="my-2">
                                        <label htmlFor="" className="text-md font-semibold">
                                            Enter Phone
                                        </label>
                                        <input type="text" onChange={handleChange} value={users.phone} name="phone" id="" className="rounded w-full my-3 px-2 py-1 text-md outline-blue-500 border" />
                                    </div>
                                    <div className="my-2">
                                        <label htmlFor="" className="text-md font-semibold">
                                            Enter Education
                                        </label>
                                        <input type="text" onChange={handleChange} value={users.education} name="education" id="" className="rounded w-full my-3 px-2 py-1 text-md outline-blue-500 border" />
                                    </div>
                                </div>

                                <button type="submit" className="rounded  my-3 px-5 py-1 text-md bg-blue-700 text-white hover:bg-blue-800">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateUser