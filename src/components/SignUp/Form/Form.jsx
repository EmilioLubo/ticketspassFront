import React, { useRef } from "react";
import Swal from 'sweetalert2';
import axios from 'axios'
import {BASE_URL} from '../../../api/url'
import './Form.css'

export default function Form() {
    const nameRef = useRef()
    const lastNameRef = useRef()
    const photoRef = useRef()
    const ageRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const formRef = useRef()

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
                    title: 'The user has been created successfully!',
                    text: `Activate your account login in your email.`,
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
                    <h2 className="title2Sign">Sign Up</h2>
                    </div>
                <div className="form-bodySign">
                    <label htmlFor="">Name</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John"
                        className="form__input"
                        ref={nameRef}
                        required
                    />
                        <label htmlFor="">LastName</label>
                    <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        placeholder="Doe"
                        className="form__input"
                        ref={lastNameRef}
                        required
                    />
                        <label htmlFor="">Photo</label>
                    <input
                        className="form__input"
                        type='text'
                        id='photoInput'
                        placeholder="https://yourphoto.com"
                        ref={photoRef}
                        required
                    />
                        <label htmlFor="">Birthday</label>
                    <input
                        className="form__input"
                        type='date'
                        id='age'
                        ref={ageRef}
                        required
                    />
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