'use client'

import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";


const ButtonCheckout = () => {
    const [isloading, setLoading] = useState(false);
    const handleCheckout = async () => {
        if (isloading) return
        setLoading(true);

        try {

            const response = await axios.post('/api/billing/create-checkout', {
                productId: "667835"
            });
            console.log(response.data);
            window.open(response.data.checkoutUrl, '_blank');
            setLoading(false);
        }
        catch (error) {
            console.log(error);
            const errorMessage = error.response?.data?.error || "An error occurred";
            toast.error(errorMessage);
            setLoading(false);
        }
    }
    return <button onClick={() => handleCheckout()} className='btn btn-primary'>
        {isloading && <span className="loading loading-spinner loading-xs"></span>}
        Subscribe</button>
};
export default ButtonCheckout;  
