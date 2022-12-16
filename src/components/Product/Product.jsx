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
        <tr valign='baseline'>
            <td className="text-center">
                <img src={item.photo} className="img-fluid" alt="..." width="100px" />
            </td>
            <td className='text-center'>
                {item.name}
            </td>
            <td className='text-center'>
                {item.category.price}
            </td>
            <td className='text-center'>
                <button className="btn btn-primary m-4" onClick={remove}>-</button>
                {quantity}
                <button className="btn btn-primary m-4" onClick={add}>+</button>

            </td>
            <td className='text-center'>
                {item.category.price * quantity}
            </td>
            </tr>
    )
}
