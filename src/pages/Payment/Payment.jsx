import { loadStripe } from "@stripe/stripe-js";
import DynamicTitle from "../../Components/DynamicTitle/DynamicTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm ";

const Payment = () => {



    // To do 
    const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK)

    return (
        <div>
            <div>
                <DynamicTitle
                    discription="please "
                    title="PAYMENT"
                ></DynamicTitle>
            </div>
            <div>
                <Elements stripe={stripePromise}>
                   <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;