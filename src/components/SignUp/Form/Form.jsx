import React, { useRef } from "react";
import Swal from 'sweetalert2';
import axios from 'axios'
import { BASE_URL } from '../../../api/url'
import './Form.css'
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Form() {
    const navigate = useNavigate()

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
        } catch (error) {
            if (Array.isArray(error.response.data.message)) {
                console.log(error.response.data.message)
                Swal.fire({
                    icon: "error",
                    title: error.response.data.message.join(' <br> '),
                    showConfirmButton: true,
                });
            } else {
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
            <div className="full-container-fluid d-flex container-login">
                <div className="w-100">
                    <form ref={formRef} className="formSign pb-5" >
                        <div className="form-shadows-content pb-3">
                            <div className="form-title-div pt-5 pb-3 text-center">
                                <h2 className="title2Sign">Register Your Account</h2>
                            </div>
                        </div>
                        <div className="form-bodySign pt-3 w-50">
                            <div class="inputGroup">
                                <input id="name" type="text" required autocomplete="off" ref={nameRef} />
                                <label for="name">Name</label>
                            </div>
                            <div class="inputGroup">
                                <input id="lastName" type="text" required autocomplete="off" ref={lastNameRef} />
                                <label for="lastName">LastName</label>
                            </div>
                            <div class="inputGroup">
                                <input id="photo" type="text" required autocomplete="off" ref={photoRef} />
                                <label for="photo">Photo Url</label>
                            </div>
                            <div class="inputGroup">
                                <input id="age" type="date" required autocomplete="off" ref={ageRef} />
                            </div>
                            <div class="inputGroup">
                                <input id="email" type="email" required autocomplete="off" ref={emailRef} />
                                <label for="email">Email</label>
                            </div>
                            <div class="inputGroup">
                                <input id="password" type="password" required autocomplete="off" ref={passwordRef} />
                                <label for="password">Password</label>
                            </div>
                            <div className="d-flex justify-content-center">
                                <p onClick={saveData} className="submit2Sign">Sign Up</p>
                            </div>
                        </div>
                    </form>              
                </div>
                <div className="right">
                    <div className="right-content-title text-center">
                        <h1 className="title">Do you already have an account ?</h1>
                        <h5 className="subTitle">Sign in to get started!</h5>
                        <button className="submit2SignUp" onClick={() => navigate('/signin')}>Sign In</button>
                    </div>
                </div>
            </div >
        </>
    );
}