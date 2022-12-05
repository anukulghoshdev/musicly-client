import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = ({ order }) => {
    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState("");
    const [transactionId, setTransactionId] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);

    const navigate = useNavigate()

    const stripe = useStripe();
    const elements = useElements();

    const {product_name, product_price, username, email, _id } = order;
    const price = Number(product_price);


    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://musicly-server-kjmtmdl3u-anukulghoshdev.vercel.app/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('musiclyToken')}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log(error);
            setCardError(error.message)
        }
        else {
            setCardError('')
        }

        setSuccess('');

        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: username,
                        email: email
                    },
                },
            },
        );
        if (confirmError) {
            setCardError(confirmError.message);
            return
        }

        // console.log("payment Intent", paymentIntent);


        if (paymentIntent.status === "succeeded") {
            console.log("card", card);
            // store payment info in db here
            const payment = {
                product_name,
                price,
                transactionId: paymentIntent.id,
                email,
                bookingId: _id

            }
            fetch('https://musicly-server-kjmtmdl3u-anukulghoshdev.vercel.app/payments', {
                method: 'POST',
                headers: {
                    "content-type": "application/json",
                    authorization: `bearer ${localStorage.getItem('musiclyToken')}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => { // {acknowledged: true, insertedId: '6385a8e126efa5c35511eca7'}
                    if (data.insertedId) {
                        setSuccess('Congratulations! your payment completed');
                        setTransactionId(paymentIntent.id);
                        navigate('/dashboard/myorders')
                    }
                })


        }
        setProcessing(false)
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button
                    className='border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline'
                    type="submit"
                    disabled={!stripe || !clientSecret || processing }>
                    Pay
                </button>
            </form>

            <p className='text-red-600'>
                {cardError}
            </p>

            {
                success && <div>
                    <p className='text-green-500'>{success}</p>
                    <p>Your TransactionID: <span className='font-bold'>{transactionId}</span></p>
                </div>
            }
        </>


    );
};

export default CheckoutForm;