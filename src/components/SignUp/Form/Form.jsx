import React, { useRef } from "react";
import Swal from 'sweetalert2';
import axios from 'axios'
import {BASE_URL} from '../../../api/url'
import './Form.css'
import { useTranslation } from "react-i18next";

export default function Form() {
    const nameRef = useRef()
    const lastNameRef = useRef()
    const photoRef = useRef()
    const ageRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const formRef = useRef()
    const {t} = useTranslation()

    async function saveData(e) {
        e.preventDefault()
        let userValue = {
            name: nameRef.current.value,
            lastName: lastNameRef.current.value,
            photo: photoRef.current.value,
            birthDate: ageRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }

        try {
            let res = await axios.post(`${BASE_URL}/api/auth/sign-up`, userValue)
            console.log(res.data)
            if (res.data.success) {
                Swal.fire({
                    icon: 'success',
                    title: t('alert_create'),
                    text: t('alert_verify'),
                })
                formRef.current.reset()
            }
            else {
                console.log(res)
                Swal.fire({
                    icon: 'error',
                    title: 'We found an error...',
                    text: `Errors: ${res.response.data.message}`,
                })
            }
        }catch(error){
            if(Array.isArray(error.response.data.message)){
                console.log(error.response.data.message)
                Swal.fire({
                    icon: "error",
                    title: error.response.data.message.join(' <br> '),
                    showConfirmButton: true,
                });
            }else{
                console.log(error.response.data.message)
                Swal.fire({
                    icon: "error",
                    title: error.response.data.message,
                    showConfirmButton: true,
                });
            }
        }
    }

    return (
        <>
            <form ref={formRef} className="formSign" id="miFormulario">
                <div className="form-shadows-content">
                    <div className="form-title-div">
                    <h2 className="title2Sign">{t('sign_up')}</h2>
                    </div>
                <div className="form-bodySign">
                    <label htmlFor="">{t('name')}</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John"
                        className="form__input"
                        ref={nameRef}
                        required
                    />
                        <label htmlFor="">{t('Lname')}</label>
                    <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        placeholder="Doe"
                        className="form__input"
                        ref={lastNameRef}
                        required
                    />
                        <label htmlFor="">{t('photo')}</label>
                    <input
                        className="form__input"
                        type='text'
                        id='photoInput'
                        placeholder="https://yourphoto.com"
                        ref={photoRef}
                        required
                    />
                        <label htmlFor="">{t('birth')}</label>
                    <input
                        className="form__input"
                        type='date'
                        id='age'
                        ref={ageRef}
                        required
                    />
                        <label htmlFor="">{t('email')}</label>
                    <input
                        id="Email"
                        type="email"
                        placeholder="YourEmail@mail.com"
                        className="form__input"
                        ref={emailRef}
                        required
                    />
                        <label htmlFor="">{t('pass')}</label>
                    <input
                        id="Password"
                        type="password"
                        placeholder="*********"
                        className="form__input"
                        ref={passwordRef}
                        required
                    />
                    <div className="submitSign">
                        <input onClick={saveData} className="submit2Sign" type='button' value={t('register')} />
                    </div>
                </div>
                </div>
            </form>
        </>
    );
}