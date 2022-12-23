import React from "react"
import './Footer.css'
import { SocialIcon } from 'react-social-icons';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Footer() {
    const {t,i18n} = useTranslation()
    return (
        <footer className="footer">
            <div className="columns-footer">
                <div className="footer-col-1">
                    <h3 className="footer-title-navg">{t("info")}</h3>
                    <ul className="footer-ul">
                        <Link className="footer-li  navDrop " to={"/about-us"}>{t("about_us")}
                        </Link>
                        <li className="footer-li">{t("work_us")}</li>
                    </ul>
                </div>
                <div className="footer-col-2">
                    <h3 className="footer-title-navg">{t('sponsor')}  </h3>
                    <div className="container-btns-footer">
                        <button className="sponsor-btn-footer"><img className="img-footer" src="https://images.squarespace-cdn.com/content/v1/53cebe13e4b0e8c9c90dd5b7/1574468994977-2DGLV7NCTGFNZ5OV281T/CMA_Foundation_NoTag_1C_Black-2.png?format=1000w" alt="" /></button>
                        <button className="sponsor-btn-footer"><img className="img-footer" src="https://images.squarespace-cdn.com/content/v1/57e008179de4bbf2fdde01ef/1614449418283-98ISATZNMX51YD3D5KSK/BT-ROCmusic-transparent-logo+%283%29.png?format=1500w" alt="" /></button>
                        <button className="sponsor-btn-footer"><img className="img-footer" src="https://miro.medium.com/max/1400/1*2FPJiUKoNB55CQV1Pu_iYQ.png" alt="" /></button>
                    </div>
                    <div className="qr" >
                        <h3 className="qr-title" >{t('down')}</h3>
                        <img  className="img-qr" src="../assets/img/qrcode.png" alt="qr code"/>
                    </div>
                </div>
                <div className="footer-col-3">
                    <h3 className="footer-title-navg">{t('lang')}</h3>
                    <ul className="footer-ul">
                        <li className="footer-li" onClick={()=>i18n.changeLanguage('en')} >{t('ingles')}</li>
                        <li className="footer-li" onClick={()=>i18n.changeLanguage('es')}>{t('español')} </li>
                        <li className="footer-li" onClick={()=>i18n.changeLanguage('fr')}>{t('french')} </li>
                        <li className="footer-li" onClick={()=>i18n.changeLanguage('de')}>{t('german')} </li>
                        <li className="footer-li" onClick={()=>i18n.changeLanguage('pt')}>{t('portugues')} </li>
                    </ul>
                </div>
            </div>
            <hr className="hr-footer-color-grey" />
            <div className="footer-second-line">
                <h2 className="other-titles-footer">{t('found_us')}</h2>
                <div className="container-btns-footer">
                    <button className="footer-social-btns">
                        <SocialIcon className="icon-social" network="youtube" bgColor="#9F00FF" fgColor="#ffffff" style={{ height: 40, width: 40 }} />
                        <h6 className="footer-social-text">Youtube</h6>
                    </button>
                    <a href="https://www.instagram.com/ticketspass/" target="_blank">
                    <button className="footer-social-btns">
                        <SocialIcon className="icon-social" network="instagram" bgColor="#9F00FF" fgColor="#ffffff" style={{ height: 40, width: 40 }} />
                        <h6 className="footer-social-text">Instagram</h6>
                    </button>
                            </a>
                    <button className="footer-social-btns">
                        <SocialIcon className="icon-social" network="tiktok" bgColor="#9F00FF" fgColor="#ffffff" style={{ height: 40, width: 40 }} />
                        <h6 className="footer-social-text">TikTok</h6>
                    </button>
                    <button className="footer-social-btns">
                        <SocialIcon className="icon-social" network="twitter" bgColor="#9F00FF" fgColor="#ffffff" style={{ height: 40, width: 40 }} />
                        <h6 className="footer-social-text">Twitter</h6>
                    </button>
                    <button className="footer-social-btns">
                       
                        <SocialIcon className="icon-social" network="facebook" bgColor="#9F00FF" fgColor="#ffffff" style={{ height: 40, width: 40 }} />
                        <h6 className="footer-social-text">Facebook</h6>
                    </button>
                </div>

                <div>
                    <h4 className="footer-text">© 2022 TicketsPass+. All rights reserved.</h4>
                </div>
            </div>
        </footer>
    )
}
export { Footer }