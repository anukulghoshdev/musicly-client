import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loader from '../../shared/Loader/Loader';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_strip_pk);
// console.log(stripePromise);

const Payment = () => {
    const order = useLoaderData();
    const navigation = useNavigation();
    if (navigation.state === "loading") {
        return <Loader></Loader>
    }

    return (
        <div className='p-10'>
            <h3 className="text-3xl">Payment for {order.product_name}</h3>
            <h2>Pay <strong>${order.product_price}</strong></h2>
            <div className='w-96 my-12 border-2 p-3'>

                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        order={order}
                    ></CheckoutForm>    
                </Elements>

            </div>
        </div>
    );
};

export default Payment;