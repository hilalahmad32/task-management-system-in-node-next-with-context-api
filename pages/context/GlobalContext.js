import { createContext, useState, useEffect } from "react";
import { useRouter } from 'next/router'
import { toast } from 'react-toastify';
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
    // get category
    const [categorys, setCategory] = useState('');
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
            toast(res.message, {
                type: 'success'
            });
            username = "";
            password = ""
            localStorage.setItem('adminToken', res.adminToken)
            setAdminToken(res.adminToken)
            router.push('/admins/dashboard')
        } else {
            toast(res.message, {
                type: 'error'
            });
        }
    }
    // get admins username
    const getAdmins = async () => {
        const res = await (await fetch('../../api/admins/admins', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'adminauthtoken': localStorage.getItem('adminToken')
            }
        })).json()
        setAdmins(res.admins)

    }

    // admin logout
    const adminLogout = () => {
        setAdminToken('')
        localStorage.removeItem('adminToken')
        router.push('/admins/')
    }
    // add category

    const addCategory = async (data) => {
        const { category_name } = data;
        const res = await (await fetch('../../api/admins/category', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'adminauthtoken': localStorage.getItem('adminToken')
            }
        })).json();
        if (res.success) {
            toast(res.message, {
                type: 'success'
            });
            category_name = "";
            router.push('/admins/category')
            getCategory()
        } else {
            toast(res.message, {
                type: 'error'
            });
        }
    }

    // get category
    const getCategory = async () => {
        const res = await (await fetch('../../api/admins/category', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'adminauthtoken': localStorage.getItem('adminToken')
            }
        })).json();
        if (res.success) {
            setCategory(res.categorys);
        }
    }

    // delete category
    const deleteCategory = async (id) => {
        const res = await (await fetch(`../../api/admins/category/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'adminauthtoken': localStorage.getItem('adminToken')
            }
        })).json();
        if (res.success) {
            toast(res.message, {
                type: 'success'
            });
            getCategory()
        } else {
            toast(res.message, {
                type: 'error'
            });
        }
    }

    const updateCategory = async (id, data) => {
        const { category_name } = data;
        const res = await (await fetch(`../../api/admins/category/${id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'adminauthtoken': localStorage.getItem('adminToken')
            }
        })).json();
        console.log(res);
        if (res.success) {
            toast(res.message, {
                type: 'success'
            });
            category_name = "";
            router.push('/admins/category')
            getCategory()
        } else {
            toast(res.message, {
                type: 'error'
            });
        }
    }


    useEffect(() => {
        getAdmins();
        getCategory();
    }, [])

    return (
        <GlobalContext.Provider value={{ adminToken, adminLogin, adminLogout, admins, addCategory, categorys, deleteCategory, updateCategory }}>
            {children}
        </GlobalContext.Provider>
    )

}

export default GlobalProvider;