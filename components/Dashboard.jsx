import React from 'react'

const Dashboard = () => {
    return (
        <div>
            <div className="container mx-auto my-5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mx-4">
                    <div className="shadow-md bg-pink-500 p-4 rounded">
                        <div className="flex justify-between items-center">
                            <h1 className="text-xl tex-white text-semibold ">
                                Categorys
                            </h1>
                            <h1 className="text-xl tex-white">
                                44
                            </h1>
                        </div>
                    </div>
                    <div className="shadow-md bg-green-500 p-4 rounded">
                        <div className="flex justify-between items-center">
                            <h1 className="text-xl tex-white text-semibold ">
                                Users
                            </h1>
                            <h1 className="text-xl tex-white">
                                44
                            </h1>
                        </div>
                    </div>
                    <div className="shadow-md bg-blue-500 p-4 rounded">
                        <div className="flex justify-between items-center">
                            <h1 className="text-xl tex-white text-semibold ">
                                Tasks
                            </h1>
                            <h1 className="text-xl tex-white">
                                44
                            </h1>
                        </div>
                    </div>
                    <div className="shadow-md bg-red-500 p-4 rounded">
                        <div className="flex justify-between items-center">
                            <h1 className="text-xl tex-white text-semibold ">
                                Completed Tasks
                            </h1>
                            <h1 className="text-xl tex-white">
                                44
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard