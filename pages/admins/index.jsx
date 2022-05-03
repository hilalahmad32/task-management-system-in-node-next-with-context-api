import Head from 'next/head'
import React from 'react'
const index = () => {
    return (
        <div>
            <Head>
                <title>Admin Login - TMS</title>
            </Head>
            <div className="container my-16 max-w-md mx-auto">
                <div className="shadow-md bg-blue-500 rounded-md">
                    <h1 className="text-4xl text-center pt-4 text-white">Admin Login</h1>
                    <form action="" className="p-5">
                        <div className="my-2">
                            <label htmlFor="" className="text-md font-semibold">
                                Enter Username
                            </label>
                            <input type="text" name="" id="" className="rounded w-full my-3 px-2 py-1 text-md outline-blue-500" />
                        </div>
                        <div className="my-2">
                            <label htmlFor="" className="text-md font-semibold">
                                Enter Password
                            </label>
                            <input type="text" name="" id="" className="rounded w-full my-3 px-2 py-1 text-md outline-blue-500" />
                        </div>
                        <button type="submit" className="rounded  my-3 px-5 py-1 text-md bg-blue-700 text-white hover:bg-blue-800">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default index