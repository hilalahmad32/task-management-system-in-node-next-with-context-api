import Link from 'next/link'
import React, { useState, useContext, useEffect } from 'react'
import Navbar from '../../../components/Navbar'
import Sidebar from '../../../components/Sidebar'
import { GlobalContext } from '../../context/GlobalContext'
import { useRouter } from 'next/router'
const AddCategory = ({ sidebar, setSidebar }) => {
    const { updateCategory } = useContext(GlobalContext)
    const [category, setCategory] = useState('')
    const { query } = useRouter();

    const submit = (e) => {
        e.preventDefault();
        const data = {
            category_name: category
        }
        updateCategory(query.id, data)
    }

    const getData = async () => {
        const res = await (await fetch(`../../api/admins/category/${query.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'adminauthtoken': localStorage.getItem('adminToken')
            }
        })).json();
        if (res.success) {
            setCategory(res.categorys.category_name)
        }
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <div className="flex relative">
            <Sidebar sidebar={sidebar} />
            <div className="content md:ml-52 m-0 w-full">
                <Navbar updateSidebar={setSidebar} sidebar={sidebar} />
                <div className="container my-16 max-w-md mx-auto">
                    <Link href="/admins/category"><button type="submit" className="rounded  mb-3 px-5 py-1 text-md bg-blue-700 text-white hover:bg-blue-800">Go Back</button></Link>
                    <div className="shadow-md  rounded-md">
                        <h1 className="text-4xl text-center pt-4 text-black">Update Category</h1>

                        <form action="" className="p-5" onSubmit={submit}>
                            <div className="my-2">
                                <label htmlFor="" className="text-md font-semibold">
                                    Enter Category Name
                                </label>
                                <input type="text" value={category} onChange={(e) => { setCategory(e.target.value) }} name="category_name" id="" className="rounded w-full my-3 px-2 py-1 text-md outline-blue-500 border" />
                            </div>

                            <button type="submit" className="rounded  my-3 px-5 py-1 text-md bg-blue-700 text-white hover:bg-blue-800">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AddCategory