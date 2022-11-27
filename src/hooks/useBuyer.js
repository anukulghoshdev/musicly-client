// import { useEffect, useState } from "react"

// const useBuyer = (email) => {
//     const [isBuyer, setIsBuyer] = useState(false);
//     const [buyerLoading, setBuyerLoading] = useState(true)

//     useEffect(() => {
//         if (email) {
//             fetch(`http://localhost:5000/users/seller/${email}`)
//                 .then(res => res.json())
//                 .then(data => {
//                     console.log(data);
//                     setIsBuyer(data.isSeller)
//                     setBuyerLoading(false);
//                 })
//         }
//     }, [email])
//     return [isBuyer, buyerLoading]
// }

// export default useBuyer;