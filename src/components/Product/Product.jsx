import React, { useState } from 'react'
import Swal from 'sweetalert2'

export default function Product(props) {

    let { item, cart , fx} = props

    const [total, setTotal] = useState(item.price)
    const [quantity, setQuantity] = useState(1)

    function add() {
        setQuantity(quantity + 1)
        setTotal(total + item.price) 
    }
    

    function remove() {
        if (quantity > 1) {
            setQuantity(quantity - 1)
            setTotal(total - item.price)
        }
        else {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    cart = cart.filter((product) => product._id !== item._id)
                    localStorage.setItem('cart', JSON.stringify(cart))
                    fx()
                    Swal.fire(
                        'Deleted!',
                        'Your product has been deleted.',
                        'success'
                    )
                }
            })
        }
    }



    return (
        <tr>
            <td className="text-center">
                <img src={item.img} className="img-fluid" alt="..." width="100px" />
            </td>
            <td className='text-center'>
                {item.name}
            </td>
            <td className='text-center'>
                {item.price}
            </td>
            <td className='d-flex justify-content-around'>
                <button className="btn btn-primary" onClick={remove}>-</button>
                {quantity}
                <button className="btn btn-primary" onClick={add}>+</button>

            </td>
            <td className='text-center'>
                {item.price * quantity}
            </td>
            </tr>
    )
}
