import axios from 'axios'
import React from 'react'
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2'
import { BASE_URL } from '../../api/url'

export default function Product(props) {
    let { token } = useSelector(store => store.user);
    let { item, setCart} = props

    const add = async() => {
        let headers = {headers: {Authorization: `Bearer ${token}`}}
        try {
            let res = await axios.post(`${BASE_URL}/api/carts`, {concertId: item.concertId, quantity: item.quantity + 1}, headers);
            setCart(res.data.response);
        }catch(error) {
            Swal.fire(
                'Error',
                error.response ? error.response.data.message || error.response.data : error.message,
                'error'
            )
        }
    }
    
    const remove = async() => {
        let headers = {headers: {Authorization: `Bearer ${token}`}}
        if (item.quantity > 1) {
            try {
                let res = await axios.post(`${BASE_URL}/api/carts`, {concertId: item.concertId, quantity: item.quantity - 1}, headers);
                setCart(res.data.response);
            } catch(error) {
                Swal.fire(
                    'Error',
                    error.response ? error.response.data.message || error.response.data : error.message,
                    'error'
                )
            }
        }
        else {
            let confirmation = await Swal.fire({
                title: 'Confirmation',
                text: "Are you sure you want to remove this item from the cart?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'Yes, delete it!'
            })
            if (confirmation.isConfirmed) {
                try {
                    let res = await axios.delete(`${BASE_URL}/api/carts?concertId=${item.concertId}`, headers);
                    if(res.data.response.items.length === 0) {
                        setCart(null)
                    } else {
                        setCart(res.data.response); 
                    }
                    Swal.fire(
                        'Deleted!',
                        'Your product has been deleted.',
                        'success'
                    )
                }catch(error) {
                    Swal.fire(
                        'Error',
                        error.response ? error.response.data.message || error.response.data : error.message,
                        'error'
                    )
                }
            }
        }
    }
    
    return (
        <tr className='align-middle'>
            <td className="text-center" style={{width: "200px"}}>
                <img src={item.photo} alt="concert" width="100px" />
            </td>
            <td className='text-center' style={{width: "200px"}}>
                {item.concertName} - {item.categoryName}
            </td>
            <td className='text-center' style={{width: "200px"}}>
                {item.price.toLocaleString()}
            </td>
            <td className='text-center' style={{width: "200px"}}>
                <div className='d-flex align-items-center justify-content-center h-100'>
                <button className="btn btn-primary mx-2 " onClick={remove}>-</button>
                {item.quantity}
                <button className="btn btn-primary mx-2" onClick={add}>+</button>
                </div>
            </td>
            <td className='text-center' style={{width: "200px"}}>
                {(item.price * item.quantity).toLocaleString()}
            </td>
            </tr>
    )
}
