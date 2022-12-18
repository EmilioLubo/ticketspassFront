import React, { useEffect, useState } from 'react'
import Product from '../../components/Product/Product'
import Swal from 'sweetalert2'
import { Link as Navlink } from 'react-router-dom'
import axios from 'axios';
import { BASE_URL, MERCADO_PAGO_KEY } from "../../api/url";
import { useSelector } from 'react-redux';
import { Spinner } from 'react-bootstrap';

export default function Cart() {

    const { token } = useSelector(store => store.user);
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState(null)

    useEffect(() => {
        getCart();
    }, [])

    const getCart = async () => {
        let headers = {headers: {Authorization: `Bearer ${token}`}}
        try {
            let res = await axios.get(`${BASE_URL}/api/carts`, headers);
            setCart(res.data.response);
            setLoading(false);
        }catch {
            setLoading(false);
        }
    }

    function clearCart() {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, clear cart!'
        }).then((result) => {
            if (result.isConfirmed) {
                let headers = {headers: {Authorization: `Bearer ${token}`}}
                axios.delete(`${BASE_URL}/api/carts/${cart._id}`, headers).then(res => {
                    Swal.fire(
                        'Deleted!',
                        'Your cart has been cleared.',
                        'success'
                    )
                    setCart(null);
                }).catch(error => {
                    Swal.fire(
                        'Error',
                        error.response ? error.response.data.message || error.resonse.data : error.message,
                        'error'
                    )
                });
            }
        })
    }

    return (
        <>
            {
                loading ? <div className="d-flex justify-content-center">
                <Spinner className="text-center" />
            </div> : !!cart ? (
                    <>
                        <div className='backNav'></div>
                        <table className="table container-fluid">
                            <thead>
                                <tr>
                                    <th className="text-black text-center fs-1 fw-bold" colSpan="5">Carrito de compras</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="text-main text-center fw-semibold">Imagen</td>
                                    <td className="text-main text-center fw-semibold">Producto</td>
                                    <td className="text-main text-center fw-semibold">Precio Unitario</td>
                                    <td className="text-main text-center fw-semibold">Cantidad</td>
                                    <td className="text-main text-center fw-semibold">Precio Total</td>
                                </tr>
                            </tbody>
                            <tbody>
                                {
                                    cart.items.map((item) => <Product setCart={setCart} item={item} key={item._id} />)
                                }
                            </tbody>
                            <tbody>
                                <tr>
                                    <td className="text-main text-center fw-semibold" colSpan="4">Total</td>
                                    <td className="text-main text-center fw-semibold">${
                                        cart.total.toLocaleString()
                                    }</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className='d-flex justify-content-center'>
                            <div className="d-flex justify-content-around w-50">
                                <p className="btn btn-danger" onClick={clearCart}>Vaciar Carrito</p>
                                <Navlink to="/"><p className="btn btn-primary">Seguir Comprando</p></Navlink>
                                <p className="btn btn-success" onClick={async () => {
                                    const preference = {
                                        paymode: "modal",
                                        back_urls: {
                                            success: "http://localhost:3000/",
                                            failure: "http://localhost:3000/",
                                            pending: "http://localhost:3000/"
                                        },
                                        payer: {
                                            name: "Lalo",
                                            surname: "Landa",
                                            email: "aleenetflix1995@gmail.com",
                                            phone: {
                                                area_code: "11",
                                                number: 22223333
                                            },
                                            address: {
                                                street_name: "False",
                                                street_number: 123,
                                                zip_code: "1111"
                                            }
                                        },
                                        items: cart.items.map(item => {
                                            return {
                                                title: `${item.concertName} - ${item.categoryName}`,
                                                description: 'Dispositivo móvil de Tienda e-commerce',
                                                picture_url: item.photo,
                                                unit_price: item.price,
                                                quantity: item.quantity,
                                                currency_id: "ARS",
                                                id: item.concertId
                                            }
                                        })
                                    };
                                    let response = await axios.post('https://api.mercadopago.com/checkout/preferences', preference, {
                                        headers: {
                                            "Content-Type": "application/json",
                                            Authorization: `Bearer ${MERCADO_PAGO_KEY}`
                                        }
                                    })
                                    console.log(response)
                                    window.open(response.data.init_point, "_blank")

                                }}>Abonar</p>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="text-center p-5">
                        <img className="img-fluid" src="../assets/img/cartClear.png" alt="StockClear" width="300px" />
                        <h1>There are no items in the cart</h1>
                    </div>
                )
            }
        </>
    )
}
