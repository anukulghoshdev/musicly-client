import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider';

const BuyingModal = ({ sell_product, setSell_product }) => {
    //const { product_name, product_pic, location, Category_name, resale_price, original_price, years_of_use } = sell_product;
    console.log(sell_product);
    const { user } = useContext(AuthContext);


    const handleSubmit = (event) => {
        event.preventDefault();
        const username = event.target.username.value;
        const email = event.target.email.value;
        const product_name = event.target.product_name.value;
        const product_price = event.target.product_price.value;
        const phone = event.target.phone.value;
        const meeting_location = event.target.meeting_location.value;
        console.log(username, email, product_name, product_price, phone, meeting_location);

        const bookingProducts = {
            product_name,
            username,
            email,
            product_price,
            product_img:sell_product.product_pic,
            phone,
            meeting_location,

        }
        fetch('http://localhost:5000/bookingProducts',{
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(bookingProducts)
        })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged){
                    toast.success('Booking Placed')
                    setSell_product(null)
                } // {acknowledged: true, insertedId: '638197411bd465cfdf202044'}

                else{
                    toast.error(data.message)
                    setSell_product(null)
                }
            })
    }

    return (
        <div>
            {/* The button to open modal */}


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="BuyingModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="BuyingModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{sell_product?.product_name}</h3>
                    <form className="form-control w-full grid grid-cols-1 gap-1" onSubmit={handleSubmit}>

                        <label className="label ">
                            <span className="label-text">Username</span>
                        </label>
                        <input name='username' readOnly disabled type="text" defaultValue={user?.displayName} placeholder="Type here" className="input input-bordered w-full" />

                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name='email' readOnly disabled type="text" defaultValue={user?.email} placeholder="Type here" className="input input-bordered w-full" />

                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input name='product_name' readOnly disabled type="text" defaultValue={sell_product?.product_name} placeholder="Type here" className="input input-bordered w-full" />

                        <label className="label">
                            <span className="label-text">Product Price</span>
                        </label>
                        <input name='product_price' readOnly disabled type="text" defaultValue={sell_product?.resale_price} placeholder="Type here" className="input input-bordered w-full" />

                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <input name='phone' type='text' placeholder="Type here" className="input input-bordered w-full" />

                        <label className="label">
                            <span className="label-text">Meet Location</span>
                        </label>
                        <input name='meeting_location' type='text' placeholder="Type here" className="input input-bordered w-full" />

                        <input className='btn btn-primary w-full mt-3' type="submit" value="submit" />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default BuyingModal;