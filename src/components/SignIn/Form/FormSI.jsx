import React, { useRef } from "react";
import Swal from 'sweetalert2';
import '../../SignUp/Form/Form.css'
import { useDispatch } from 'react-redux'
import userActions from "../../../redux/actions/userActions";
import { useNavigate } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';

export default function Form() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { login } = userActions
    const emailRef = useRef()
    const passwordRef = useRef()
    const formRef = useRef()

    async function saveData(e) {
        e.preventDefault()
        let userValue = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }
        try {
            let response = await dispatch(login(userValue)).unwrap()
            let res = response.res
            if (res.success) {
                Swal.fire({
                    title: res.message,
                    html: "We're redirecting you to Home Page...",
                    timer: 2200,
                    timerProgressBar: true,
                    willClose: () => {
                        navigate('/')
                    }
                })
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'We found an error...',
                    text: `Errors: `,
                })
            }
        } catch (error) {
            console.log(error);
            if (Array.isArray(error)) {
                Swal.fire({
                    icon: "error",
                    title: error,
                    showConfirmButton: true,
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Wrong email or password.",
                    showConfirmButton: true,
                });
            }
        }
    }
    return (
        <>
            <div className='backNav'></div>
            <div className="full-container-fluid d-flex container-login">
                <div className="w-100">
                    <form ref={formRef} className="formSign pb-5" >
                        <div className="form-shadows-content pb-3">
                            <div className="form-title-div pt-5 pb-3 text-center">
                                <h2 className="title2Sign">Login to Your Account</h2>
                            </div>
                            <div className="d-flex flex-column align-items-center gap-3 mt-2">
                                <h5>Login usins social networks</h5>
                                <div className="social-networks">
                                    <SocialIcon className="icon-social" network="facebook" fgColor="#ffffff" style={{ height: 40, width: 40 }} />
                                    <SocialIcon className="icon-social" network="instagram" fgColor="#ffffff" style={{ height: 40, width: 40 }} />
                                    <SocialIcon className="icon-social" network="google" fgColor="#ffffff" style={{ height: 40, width: 40 }} />
                                </div>
                            </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <div className="bar" style={{ flex: 1, backgroundColor: "rgb(150, 150, 200)", height: "3px" }} />

                            <p style={{ margin: "0 10px" }}>Or</p>

                            <div className="bar" style={{ flex: 1, backgroundColor: "rgb(150, 150, 200)", height: "3px" }} />
                        </div>
                        <div className="form-bodySign pt-3 w-50">
                            <div class="inputGroup">
                                <input id="email" type="email" required autocomplete="off" ref={emailRef} />
                                <label for="email">Email</label>
                            </div>
                            <div class="inputGroup">
                                <input id="password" type="password" required autocomplete="off" ref={passwordRef} />
                                <label for="password">Password</label>
                            </div>
                            <div className="d-flex justify-content-center">
                                <p onClick={saveData} className="submit2Sign">Sign In</p>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="right">
                        <div className="right-content-title text-center">
                            <h1 className="title">New Here?</h1>
                            <h5 className="subTitle">Create an account to get started!</h5>
                            <button className="submit2SignUp" onClick={() => navigate('/signup')}>Sign Up</button>
                        </div>
                </div>
            </div >
        </>
    );
}