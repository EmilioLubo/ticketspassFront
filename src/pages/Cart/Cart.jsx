import React, { useEffect, useState } from 'react'
import Product from '../../components/Product/Product'
import Swal from 'sweetalert2'
import { Link as Navlink } from 'react-router-dom'
import axios from 'axios';
import { BASE_URL } from "../../api/url";
import { useSelector } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export default function Cart() {
    const {t} = useTranslation()
    const { token } = useSelector(store => store.user);
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState(null)

    useEffect(() => {
        getCart();
    },[])


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

    const goToPayment = async () => {
        try {
            let headers = {headers: {Authorization: `Bearer ${token}`}}
            let res = await axios.get(`${BASE_URL}/api/carts/pay`, headers);
            let response = res.data.response;
            window.location.href = response.sandbox_init_point;
        }catch(error) {
            console.log(error)
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
                                    <th className="text-black text-center fs-1 fw-bold" colSpan="5">{t('shop_cart')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="text-main text-center fw-semibold"></td>
                                    <td className="text-main text-center fw-semibold">{t('product')}</td>
                                    <td className="text-main text-center fw-semibold">{t('price_u')}</td>
                                    <td className="text-main text-center fw-semibold">{t('quanty')}</td>
                                    <td className="text-main text-center fw-semibold">{t('price_t')}</td>
                                </tr>
                            </tbody>
                            <tbody>
                                {
                                    cart.items.map((item) => <Product setCart={setCart} item={item} key={item._id} />)
                                }
                            </tbody>
                            <tbody>
                                <tr>
                                    <td className="text-main text-center fw-semibold" colSpan="4">{t('total')}</td>
                                    <td className="text-main text-center fw-semibold">${
                                        cart.total.toLocaleString()
                                    }</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className='d-flex justify-content-center'>
                            <div className="d-flex justify-content-around w-50">
                                <button className="btn btn-danger" onClick={clearCart}>{t('cart_emp')}</button>
                                <Navlink to="/"><button className="btn btn-primary">{t('cart_ke')}</button></Navlink>
                                <button className="btn btn-success" onClick={goToPayment}>{t('pay')}</button>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="text-center p-5">
                        <img className="img-fluid" src="../assets/img/cartClear.png" alt="StockClear" width="300px" />
                        <h1>{t('shop_cart_found')}</h1>
                    </div>
                )
            }
        </>
    )
}
