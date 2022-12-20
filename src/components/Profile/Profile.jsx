import React, { useEffect } from "react";
import { SocialIcon } from "react-social-icons";
import './Profile.css'
import { useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import axios from "axios";
import { BASE_URL } from "../../api/url";

// Hay un error con la funcion fetchData. Se accede correctamente a la información, siempre y cuando la pagina no sea recargada. Si la pagina no se recarga esta se muestra adecuadamente al usuario junto a los datos traidos correctamente. Sin embargo, si la pagina se recarga, las propiedades aparecen como undefined, dando un error en la consola y crasheando el componente entero. Mi teoria, el return devuelve los objetos antes de que las funciones se ejecuten. I dont know why.

export default function Profile() {
    let store = useSelector((store) => store.user.id)
    let token = store
    const [user, setUser] = useState()
    useEffect(() => {
        fetchData()//eslint-disable-next-line
    }, [])
    async function fetchData() {
        const response = await axios.get(`${BASE_URL}/api/auth/me/${token}`)
        const data = response.data.data
        setUser(data)
    }
    const [state, setState] = useState("details")
    return (
        <div className="Profile-Background">
            <div className="Profile-Container">
                <div className="Profile-ColumnLeft">
                    <div className="Profile-Options">
                        <div className="Profile-Block-Container-1">
                            <div className="Profile-Internal-Block0">
                                <h3>MY PROFILE</h3>
                            </div>
                            <div className="Profile-Internal-Block1">
                                <div className="Profile-Block1-Photo">
                                    {/* <img className="Profile-Photo" src={user.photo} alt="Generic Image" /> */}
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
                                    <SocialIcon className="icon-social" network="email" bgColor="#FF4E00" fgColor="white" style={{ height: 25, width: 25 }} />
                                </a>
                                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                                    <SocialIcon className="icon-social" network="facebook" bgColor="#00185F" fgColor="white" style={{ height: 25, width: 25 }} />
                                </a >
                                <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
                                    <SocialIcon className="icon-social" network="twitter" bgColor="#00DBDE" fgColor="white" style={{ height: 25, width: 25 }} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="Profile-Block-Container-2">
                        <div className="Profile-Internal-Block2">
                            <h6 onClick={e => setState("details")}>PERSONAL DETAILS</h6>
                        </div>
                        <div className="Profile-Internal-Block2">
                            <h6 onClick={e => setState("billing")}>BILLING ADDRESS</h6>
                        </div>
                        <div className="Profile-Internal-Block2">
                            <h6 onClick={e => setState("changePwd")}>CHANGE PASSWORD</h6>
                        </div>
                        <div className="Profile-Internal-Block2">
                            <h6 onClick={e => setState("activity")}>MY ACTIVITY</h6>
                        </div>
                        <div className="Profile-Internal-Block2">
                            <h6 onClick={e => setState("orders")}>MY ORDERS</h6>
                        </div>
                    </div>
                </div>
                <div className="Profile-ColumnRight">
                    <div className="Container-ColumnRight">
                        {state === "details" &&
                            <>
                                <div className="title-profile">
                                    <h2>Profile Details</h2>
                                    <h2 className="Alert">AVISO IMPORTANTE DEVS: Partes del codigo se encuentran comentadas por un error. Se dejo tambien comentado el error en el codigo.</h2>
                                </div>
                                <div className="personal-data">
                                    {/* <input type="text" disabled value={user.name} />
                                    <input type="text" disabled value={user.lastName} />
                                    <input type="text" disabled value={user.birthDate} /> */}
                                    <div>
                                        <h3>TicketPass TV Suscription</h3>
                                        <span>Inactiva</span>
                                        <h3>Account Level</h3>
                                        <span>10</span>
                                        <h3>Claim your daily reward</h3>
                                        <Button >Claim</Button>
                                        <h3>Creditos TP+:</h3>
                                        <p>21.002 creditos</p>
                                    </div>

                                </div>
                            </>

                        }
                        {state === "billing" &&
                            <>
                                <div className="title-profile">
                                    <h2>Billing Address</h2>
                                </div>
                                <div className="personal-data">
                                    <input type="text" disabled value="Puerreydon" />
                                    <input type="text" disabled value="Entre LaValle y Riscos" />
                                    <input type="text" disabled value="2500 A 9" />
                                    <input type="text" disabled value="Buenos Aires" />
                                    <input type="text" disabled value="Argentina" />
                                    <input type="text" disabled value="C4029" />
                                    <input type="text" disabled value="41.011.205" />
                                    <input type="text" disabled value="+54 9 11 23029922" />
                                </div>
                            </>
                        }
                        {state === "changePwd" &&
                            <div className="title-profile">
                                <h2>Profile Details</h2>
                                <label htmlFor="">
                                    Old Password
                                    <input type="password" disabled />
                                </label>
                                <label htmlFor="">
                                    New Password
                                    <input type="password" disabled placeholder="Example!1552" />
                                </label>
                                <label htmlFor="">
                                    Repeat the New Password
                                    <input type="password" disabled placeholder="Example!1552" />
                                </label>
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
                                           <div className="container-box-profile">
                                               <p>Order #20049 | Example Product | 15/05/2022</p>
                                           </div>
                                           <div className="container-box-profile">
                                               <p>Order #20049 | Example Product | 15/05/2022</p>
                                           </div>                <div className="container-box-profile">
                                               <p>Order #20049 | Example Product | 15/05/2022</p>
                                           </div>                <div className="container-box-profile">
                                               <p>Order #20049 | Example Product | 15/05/2022</p>
                                           </div>                <div className="container-box-profile">
                                               <p>Order #20049 | Example Product | 15/05/2022</p>
                                           </div>                <div className="container-box-profile">
                                               <p>Order #20049 | Example Product | 15/05/2022</p>
                                           </div>                <div className="container-box-profile">
                                               <p>Order #20049 | Example Product | 15/05/2022</p>
                                           </div>                <div className="container-box-profile">
                                               <p>Order #20049 | Example Product | 15/05/2022</p>
                                           </div>                <div className="container-box-profile">
                                               <p>Order #20049 | Example Product | 15/05/2022</p>
                                           </div>                <div className="container-box-profile">
                                               <p>Order #20049 | Example Product | 15/05/2022</p>
                                           </div>                <div className="container-box-profile">
                                               <p>Order #20049 | Example Product | 15/05/2022</p>
                                           </div>                <div className="container-box-profile">
                                               <p>Order #20049 | Example Product | 15/05/2022</p>
                                           </div>                <div className="container-box-profile">
                                               <p>Order #20049 | Example Product | 15/05/2022</p>
                                           </div>
                                           </div>
                                   </>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}