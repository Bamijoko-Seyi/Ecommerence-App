import React from 'react';
import { useContext } from 'react';
import { ShopContext } from '../assets/context/ShopContext';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import {toast} from 'react-toastify'

const Verify = () => {

    const {navigate, token, setCartItems} = useContext(ShopContext)
    const [searchParams, setSearchParams] = useSearchParams()

    const success = searchParams.get('success')
    const orderId = searchParams.get('orderId')

    const verifyPayment = async () => {
        try{
            if(!token){
                return null
            }

            const response = await axios.post(backendUrl + '/api/order/verifyStripe',{success,orderId} , {success:{token}})

            if (response.data.success){
                setCartItems({})
                navigate('/orders')
            } else{
                navigate('/cart')
            }
        } catch(error){
            console.log(error)
            toast.error(error.message)
        }
    }

    useEffect(()=>{
        verifyPayment()
    },[token])

    return (
        <div>
            Verify
        </div>
    );
}

export default Verify;
