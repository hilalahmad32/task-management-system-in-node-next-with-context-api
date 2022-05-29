import React from 'react'
import CategoryCard from '../../components/CategoryCard'
import CategoryTable from '../../components/CategoryTable'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'

const category = ({ sidebar, setSidebar }) => {
    return (
        <div className="flex relative">
            <Sidebar sidebar={sidebar} />
            <div className="content md:ml-52 m-0 w-full">
                <Navbar updateSidebar={setSidebar} sidebar={sidebar} />
                <CategoryCard />
                <CategoryTable />
            </div>
        </div>
    )
}

export default category