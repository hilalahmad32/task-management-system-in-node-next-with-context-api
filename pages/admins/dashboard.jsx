import React, { useState } from 'react'
import Dashboard from '../../components/Dashboard'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'

const dashboard = () => {
    const [sidebar, setSidebar] = useState(false)
    return (
        <div>
            <div className="flex relative">
                <Sidebar sidebar={sidebar} />
                <div className="content md:ml-52 m-0 w-full">
                    <Navbar updateSidebar={setSidebar} sidebar={sidebar} />
                    <Dashboard />
                </div>
            </div>
        </div>
    )
}

export default dashboard