import { useEffect, useState } from "react"

const useSeller = (email) => {
    const [isSeller, setIsSeller] = useState(false);
    const [sellerLoading, setSellerLoading] = useState(true)

    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/seller/${email}`)
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