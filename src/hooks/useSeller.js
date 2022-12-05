import { useEffect, useState } from "react"

const useSeller = (email) => {
    const [isSeller, setIsSeller] = useState(false);
    const [sellerLoading, setSellerLoading] = useState(true)

    useEffect(() => {
        if (email) {
            fetch(`https://musicly-server-kjmtmdl3u-anukulghoshdev.vercel.app/users/seller/${email}`)
                .then(res => res.json())
                .then(data => {
                    // console.log(data); // { isSeller: user?.role === 'Seller' }
                    setIsSeller(data.isSeller)
                    setSellerLoading(false);
                })
        }
    }, [email])
    return [isSeller, sellerLoading]
}
export default useSeller;