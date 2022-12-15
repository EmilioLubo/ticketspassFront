import React from "react"
import './Footer.css'
import { SocialIcon } from 'react-social-icons';


function Footer() {
    return (
        <footer className="footer">
            <div className="columns-footer">
            <div className="footer-col-1">
            <h3 className="footer-title-navg">About Us</h3>
                <p className="footer-about-us">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ipsam, fugit ducimus totam in iste explicabo temporibus tempore deserunt nam minus itaque quisquam, necessitatibus error. Soluta dolorem libero eaque laborum.</p>
            </div>
            <div className="footer-col-2">
                <h3  className="footer-title-navg">Support</h3>
                <ul className="footer-ul">
                    <li className="footer-li">Help & FAQ</li>
                    <li className="footer-li">Terms of Use</li>
                    <li className="footer-li">Privacy Policy</li>
                    <li className="footer-li">AD's Policy</li>
                    <li className="footer-li">Security</li>
                </ul>
            </div>
            <div className="footer-col-3">
            <h3  className="footer-title-navg">Languages</h3>
                <ul className="footer-ul">
                    <li className="footer-li">English</li>
                    <li className="footer-li">Spanish</li>
                </ul>
            </div>
            </div>
            <hr className="hr-footer-color-grey" />
            <div className="footer-second-line">
        <h2 className="other-titles-footer">Find us on</h2>
        <div className="container-btns-footer">
            <button className="footer-social-btns">
            <SocialIcon className="icon-social" network="youtube" bgColor="#9F00FF" fgColor="#ffffff" />
                <h4 className="footer-social-text">Youtube</h4>
            </button>
            <button className="footer-social-btns">
            <SocialIcon  className="icon-social" network="instagram" bgColor="#9F00FF" fgColor="#ffffff"  />
            <h4 className="footer-social-text">Instagram</h4>
            </button>
            <button className="footer-social-btns">
            <SocialIcon className="icon-social"  network="tiktok" bgColor="#9F00FF"  fgColor="#ffffff" />
            <h4 className="footer-social-text">TikTok</h4>
            </button>
            <button className="footer-social-btns">
            <SocialIcon className="icon-social"  network="twitter" bgColor="#9F00FF" fgColor="#ffffff"  />
            <h4 className="footer-social-text">Twitter</h4>
            </button>
            <button className="footer-social-btns">
            <SocialIcon className="icon-social"  network="facebook" bgColor="#9F00FF" fgColor="#ffffff"  />
            <h4 className="footer-social-text">Facebook</h4>
            </button>
        </div>
        <hr className="hr-footer-color-grey" />
            <h2  className="other-titles-footer">Our Sponsors</h2>
        <div className="container-btns-footer">
            <button className="sponsor-btn-footer"><img className="img-footer" src="https://images.squarespace-cdn.com/content/v1/53cebe13e4b0e8c9c90dd5b7/1574468994977-2DGLV7NCTGFNZ5OV281T/CMA_Foundation_NoTag_1C_Black-2.png?format=1000w" alt="" /></button>
            <button className="sponsor-btn-footer"><img className="img-footer" src="https://images.squarespace-cdn.com/content/v1/57e008179de4bbf2fdde01ef/1614449418283-98ISATZNMX51YD3D5KSK/BT-ROCmusic-transparent-logo+%283%29.png?format=1500w" alt="" /></button>
            <button className="sponsor-btn-footer"><img className="img-footer" src="https://miro.medium.com/max/1400/1*2FPJiUKoNB55CQV1Pu_iYQ.png" alt="" /></button>
        </div>
        <hr className="hr-footer-color-grey" />
        <div>
            <h4 className="footer-text">© 2022 TicketsPass+. All rights reserved.</h4>
        </div>
            </div>
        </footer>
    )
}
export { Footer }