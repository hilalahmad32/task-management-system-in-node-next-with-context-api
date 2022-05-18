import { createContext, useState, useEffect } from "react";
import { useRouter } from 'next/router'

export const GlobalContext = createContext({})
// check if the window is not server side 
const ISSERVER = typeof window === "undefined";

const GlobalProvider = ({ children }) => {
    // router
    const router = useRouter();
    //  admin auth token state
    const [adminToken, setAdminToken] = useState(!ISSERVER ? localStorage.getItem('adminToken') || false : '')
    // admin state
    const [admins, setAdmins] = useState('');


    const adminLogin = async (data) => {
        const { username, password } = data;
        const res = await (await fetch('../api/admins/login', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })).json()
        if (res.success) {
            alert(res.message);
            username = "";
            password = ""
            localStorage.setItem('adminToken', res.adminToken)
            setAdminToken(res.adminToken)
            router.push('/admins/dashboard')
        } else {
            alert(res.message)
        }
    }
    // get admins username
    const getAdmins = async () => {
        const res = await (await fetch('../api/admins/admins', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'adminauthtoken': localStorage.getItem('adminToken')
            }
        })).json()
        setAdmins(res.admins)
        console.log(res);

    }

    // admin logout
    const adminLogout = () => {
        setAdminToken('')
        localStorage.removeItem('adminToken')
        router.push('/admins/')
    }

    useEffect(() => {
        getAdmins()
    }, [])

    return (
        <GlobalContext.Provider value={{ adminToken, adminLogin, adminLogout, admins }}>
            {children}
        </GlobalContext.Provider>
    )

}

export default GlobalProvider;