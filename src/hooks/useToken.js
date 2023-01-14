import { useEffect, useState } from "react"

const useToken = (email) => {
    const [token, setToken] = useState('')
    useEffect(() => {
        fetch(`https://musicly-server-anukulghoshdev.vercel.app/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.accessToken) {
                    localStorage.setItem('musiclyToken', data.accessToken)
                    setToken(data.accessToken)
                }
            });
    }, [email]);
    return [token]
}
export default useToken