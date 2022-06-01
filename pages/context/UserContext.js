import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const UserContext = createContext({})

const UserProvider = ({ children }) => {
    const [users, setUsers] = useState('')

    const router = useRouter()
    const addUser = async (data) => {
        const res = await (await fetch('../../api/admins/user', {
            method: "POST",
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
            router.push('/admins/user')
        } else {
            toast(res.message, {
                type: 'error'
            });
        }
    }

    const getUser = async () => {
        const res = await (await fetch('../../api/admins/user', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'adminauthtoken': localStorage.getItem('adminToken')
            }
        })).json();

        if (res.success) {
            setUsers(res.users)
            getUser();
        } else {
            toast(res.message, {
                type: 'error'
            });
        }
    }
    const deleteUser = async (id) => {
        const res = await (await fetch(`../../api/admins/users/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'adminauthtoken': localStorage.getItem('adminToken')
            }
        })).json();
        if (res.success) {
            toast(res.message, {
                type: 'success'
            });
            getUser();
        } else {
            toast(res.message, {
                type: 'error'
            });
        }
    }
    const updateUsers = async (id, data) => {
        const res = await (await fetch(`../../api/admins/users/${id}`, {
            method: "PUT",
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
            router.push('/admins/user')
            getUser();

        } else {
            toast(res.message, {
                type: 'error'
            });
        }
    }

    useEffect(() => {
        getUser();
    }, [])

    return (
        <UserContext.Provider value={{ addUser, users, deleteUser, updateUsers }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider