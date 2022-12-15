import React, { useRef } from "react";
import Swal from 'sweetalert2';
import '../../SignUp/Form/Form.css'
import { useDispatch } from 'react-redux'
import userActions from "../../../redux/actions/userActions";
import { useNavigate } from "react-router-dom";

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
            let response = await dispatch(login(userValue))
            let res = response.payload.res
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
                formRef.current.reset()
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'We found an error...',
                    text: `Errors: `,
                })
            }
        }catch(error){
            if(Array.isArray(error)){
                Swal.fire({
                    icon: "error",
                     title: error,
                    showConfirmButton: true,
                });
            }else{
                Swal.fire({
                    icon: "error",
                    title: error,
                    // title: error.response.data.message,
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
                    <h2 className="title2Sign">Sign In</h2>
                    </div>
                <div className="form-bodySign">
                        <label htmlFor="">Email</label>
                    <input
                        id="Email"
                        type="email"
                        placeholder="YourEmail@mail.com"
                        className="form__input"
                        ref={emailRef}
                        required
                    />
                        <label htmlFor="">Password</label>
                    <input
                        id="Password"
                        type="password"
                        placeholder="*********"
                        className="form__input"
                        ref={passwordRef}
                        required
                    />
                    <div className="submitSign">
                        <input onClick={saveData} className="submit2Sign" type='button' value='Register' />
                    </div>
                </div>
                </div>
            </form>
        </>
    );
}