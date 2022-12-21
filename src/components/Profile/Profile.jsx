import axios from "axios";
import { useTranslation } from "react-i18next";
import userActions from "../../redux/actions/userActions";
import { BASE_URL } from "../../api/url";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { SocialIcon } from "react-social-icons";
import { useRef, useState,useEffect } from "react";
import './Profile.css'

export default function Profile() {

    // Translation
    const { t } = useTranslation()
    
    // Redux
    let dispatch = useDispatch()
    let { reLogin, updateUser } = userActions
    let { user, token } = useSelector(store => store.user)
    let userId = user.id

    // Orders
    const [orders, setOrders] = useState([])

    async function getOrdersData(id, token) {
        let data = await axios.get(`${BASE_URL}/api/orders?id=${id}`, { headers: { 'Authorization': `Bearer ${token}` } })
        setOrders(data.data.response)
        console.log(orders)
    }

    // Refs
    const refName = useRef()
    const refLastName = useRef()
    const refBirthDate = useRef()
    const refEmail = useRef()
    const refPassword = useRef()
    const refPassword2 = useRef()

    // Update User
    const [reload, setReload] = useState(false)

    // Preloader
    useEffect(() => {
        dispatch(reLogin(token))
        getOrdersData(userId, token)
        // eslint-disable-next-line
    }, [reload])

    // View State
    const [state, setState] = useState("details")


    // Edit Profile Function
    function handleEditProfile(e) {

        // Prevent Refresh
        e.preventDefault()

        // Data to edit
        let data = {
           name: refName.current.value,
           lastName: refLastName.current.value,
           birthDate: refBirthDate.current.value,
        }
        let objectEdit = {
            data,
            userId,
        }
        // Dispatch to update user
        dispatch(updateUser(objectEdit))

        // Alert
        Swal.fire({
            title: 'Perfil Actualizado!',
            icon: 'success',
            confirmButtonText: 'OK'
        })
        setReload(!reload)
        setState("details")
    }

    // Edit Password Function
    function handleEditPassword(e) {

        // Prevent Refresh
        e.preventDefault()

        // Data to edit
        let data = {
           password: refPassword2.current.value,
        }
        let objectEdit = {
            data,
            userId,
        }
        // Dispatch to update user
        dispatch(updateUser(objectEdit))

        // Alert
        Swal.fire({
            title: 'Contraseña Actualizada!',
            icon: 'success',
            confirmButtonText: 'OK'
        })
        setReload(!reload)
        setState("details")
    }


    // Here we render the component

    return (
        <>
            <div className='backNav'></div>
            <div className="Profile-Background">
                <div className="Profile-Container">
                    <div className="Profile-ColumnLeft">
                        <div className="Profile-Options">
                            <div className="Profile-Block-Container-1">
                                <div className="Profile-Internal-Block0">
                                    <h3>{user.name}</h3>
                                </div>
                                <div className="Profile-Internal-Block1">
                                    <div className="Profile-Block1-Photo">
                                        <img className="Profile-Photo" src={user.photo} alt={user.name}/>
                                    </div>
                                    <div className="Profile-Block1-Script">
                                        <label for="file-upload" class="custom-file-upload">
                                            BROWSE
                                        </label>
                                        <input id="file-upload" type="file" />
                                    </div>
                                </div>
                                <div className="Profile-social-icons">
                                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                        <SocialIcon className="icon-social" network="facebook" bgColor="blue" fgColor="white" style={{ height: 25, width: 25 }} />
                                    </a>
                                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                                        <SocialIcon className="icon-social" network="instagram" bgColor="pink" fgColor="black" style={{ height: 25, width: 25 }} />
                                    </a >
                                    <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
                                        <SocialIcon className="icon-social" network="twitter" bgColor="#00DBDE" fgColor="white" style={{ height: 25, width: 25 }} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="Profile-Block-Container-2">
                            <div className="Profile-Internal-Block2">
                                <h6 onClick={e => setState("details")}>User Details</h6>
                            </div>
                            <div className="Profile-Internal-Block2">
                                <h6 onClick={e => setState("changePwd")}>Change Password</h6>
                            </div>
                            <div className="Profile-Internal-Block2">
                                <h6 onClick={e => setState("activity")}>Activity</h6>
                            </div>
                            <div className="Profile-Internal-Block2">
                                <h6 onClick={e => setState("orders")}>Orders</h6>
                            </div>
                        </div>
                    </div>
                    <div className="Profile-ColumnRight">
                        <div className="Container-ColumnRight">
                            {state === "details" &&
                                <>
                                    <div className="title-profile">
                                        <h2>Profile Details</h2>
                                    </div>
                                    <div className="personal-data">
                                        <p className="personal-data-p">{user.name}</p>
                                        <p className="personal-data-p">{user.lastName}</p>
                                        <p className="personal-data-p">{new Date(user.birthDate).toLocaleDateString()}</p>
                                        {/* <p type="text" className="personal-data-p" value="Puerreydon" />
                                    <p type="text" className="personal-data-p" value="Entre LaValle y Riscos" />
                                    <p type="text" className="personal-data-p" value="2500 A 9" />
                                    <p type="text" className="personal-data-p" value="Buenos Aires" />
                                    <p type="text" className="personal-data-p" value="Argentina" />
                                    <p type="text" className="personal-data-p" value="C4029" />
                                    <p type="text" className="personal-data-p" value="+54 9 11 23029922" /> */}
                                        <button className='btn-design-profile' onClick={e => setState("editprofile")}>Editar Perfil</button>
                                    </div>
                                </>
                            }
                            {state === "editprofile" &&
                                <>
                                    <div className="title-profile">
                                        <h2>Profile Details</h2>
                                    </div>
                                    <div className="personal-data">
                                        <label htmlFor="">
                                        Name:
                                        <input type="text"  ref={refName}      defaultValue={user.name}      placeholder={user.name} />
                                        </label>
                                        <label htmlFor="">
                                        Last Name:
                                        <input type="text"  ref={refLastName}  defaultValue={user.lastName}  placeholder={user.lastName} />
                                        </label>
                                        <label htmlFor="">
                                        Birth Date:
                                        <input type="date"  ref={refBirthDate} defaultValue={user.birthDate} placeholder={user.birthDate} />
                                        </label>
                                        {/* <input type="text" defaultValue={user.} placeholder="Puerreydo Edit" />
                                    <input type="text" defaultValue={user.} placeholder="Entre LaValle y Riscos" />
                                    <input type="text" defaultValue={user.} placeholder="2500 A 9" />
                                    <input type="text" defaultValue={user.} placeholder="Buenos Aires" />
                                    <input type="text" defaultValue={user.} placeholder="Argentina" />
                                    <input type="text" defaultValue={user.} placeholder="C4029" />
                                    <input type="text" defaultValue={user.} placeholder="+54 9 11 23029922" /> */}
                                    <div>
                                        <button className='btn-design-profile' onClick={e => setState("details")}>Cancel</button>
                                        <button className='btn-design-profile' onClick={e =>  handleEditProfile(e)}>Confirm Changes</button>
                                    </div>
                                    </div>
                                </>
                            }
                            {state === "changePwd" &&
                                <div className="title-profile">
                                    <h2>Profile Details</h2>
                                    <label htmlFor="">
                                        Old Password
                                        <input type="password" />
                                    </label>
                                    <label htmlFor="">
                                        New Password
                                        <input type="password" ref={refPassword} placeholder="Example!1552" />
                                    </label>
                                    <label htmlFor="">
                                        Repeat the New Password
                                        <input type="password" ref={refPassword2} placeholder="Example!1552" />
                                    </label>
                                    <div>
                                    <button className='btn-design-profile' onClick={e =>{
                                    {refPassword.current.value === refPassword2.current.value ? handleEditPassword(e) : Swal.fire({
                                        title: 'Las contraseñas no coinciden.',
                                        icon: 'error',
                                        confirmButtonText: 'Ok'
                                    })} 
                                    }}
                                        >Save new Password
                                    </button>
                                    </div>
                                </div>
                            }
                            {state === "activity" &&
                                <>
                                    <div className="title-profile">
                                        <h2>Your activity</h2>
                                    </div>
                                    <div className="title-profile">
                                        <h2>Your Reactions</h2>
                                    </div>
                                    <div class="scroll">
                                        <div className="container-box-profile">
                                            <p>You liked this concert: <span>Iron Maiden</span></p>
                                        </div>
                                        <div className="container-box-profile">
                                            <p>You Hated this concert: <span>Iron Maiden</span></p>
                                        </div>
                                    </div>
                                    <div className="title-profile">
                                        <h2>Your Comments</h2>
                                    </div>
                                    <div class="scroll">
                                        <div className="container-box-profile">
                                            <p>You commented this concert: Iron Maiden</p>
                                        </div>
                                        <div className="container-box-profile">
                                            <p>You commented this concert: Saxo Violento</p>
                                        </div>
                                    </div>
                                </>
                            }
                            {state === "orders" &&
                                <>
                                    <div className="title-profile">
                                        <h2>My Orders</h2>
                                    </div>
                                    <div class="scroll-orders">
                                        {orders.map((order) => {
                                            console.log(orders)
                                            return (
                                                <div className="container-box-profile">
                                                    <p>{order.items.map(e=> e.concertName)} | {new Date(order.date).toLocaleDateString()}</p>
                                                </div>
                                            )
                                        })}

                                    </div>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}