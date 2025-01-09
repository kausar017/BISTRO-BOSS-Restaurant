import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Authentication/Provaider/useAxiosSecure";
import UseCard from "../../Hooks/useCard/UseCard";
import AuthHooks from "../../Authentication/Provaider/AuthHooks";


const CheckoutForm = () => {

    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState()
    const axiosSecure = useAxiosSecure()
    const { user } = AuthHooks()
    const [ClientSectret, setClientSectret] = useState()
    const [TranJection, setTranJection] = useState()

    const [cart] = UseCard()
    const totalPrice = cart.reduce((total, item) => total + (item.price || 0), 0);
    // console.log(totalPrice);

    useEffect(() => {
        axiosSecure.post('/create-checkout-session', { price: totalPrice })
            .then(res => {
                console.log(res.data.clientSecret);
                setClientSectret(res.data.clientSecret)
            })
    }, [axiosSecure, totalPrice])


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement)
        if (card == null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setError(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError('')
        }

        // confirmCardPayment
        const { error: paymentError, paymentIntent } = await stripe.confirmCardPayment(ClientSectret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous',
                }
            }
        });
        if (paymentError) {
            console.log('confirm error');
        } else {
            console.log('payment Intent', paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                console.log('tranjection id', paymentIntent.id);
                setTranJection(paymentIntent.id)
            }
        }

    }



    return (
        <div className="p-5">
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#ffff',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                >
                </CardElement>
                <button className="btn btn-sm btn-primary my-3" type="submit" disabled={!stripe || !ClientSectret}>
                    Pay
                </button>
                <p hidden className="text-white">{error ? `${Swal.fire(error)}` : ""} </p>
                {TranJection ? <p className="text-green-500"> Your TranJection ID: <span className="font-bold">{TranJection}</span></p> : ""}

            </form>
        </div>
    );
};

export default CheckoutForm;