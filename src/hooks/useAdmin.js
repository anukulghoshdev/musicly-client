import { useEffect, useState } from "react"
import { set } from "react-hook-form"

const useAdmin = (email) => {
    const [isAdmin, setIsAdmin] = useState(false)
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/admin/${email}`)
                .then(res => res.json())
                .then(data => { // {adminIs: user?.role === 'Admin'}
                    console.log(data);
                    setIsAdmin(data.adminIs)
                })
        }
    }, [email])
    return [isAdmin]
}
export default useAdmin;