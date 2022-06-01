import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import UserCard from '../../components/UserCard'
import UserTable from '../../components/UserTable'


const user = ({ sidebar, setSidebar }) => {
    return (
        <div>
            <div className="flex relative">
                <Sidebar sidebar={sidebar} />
                <div className="content md:ml-52 m-0 w-full">
                    <Navbar updateSidebar={setSidebar} sidebar={sidebar} />
                    <UserCard />
                    <UserTable />
                </div>
            </div>

        </div>
    )
}

export default user