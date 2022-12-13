import React from "react"
import './Footer.css'
import { SocialIcon } from 'react-social-icons';


function Footer() {
    return (
        <footer className="footer">
            <div className="columns-footer">
            <div className="footer-col-1">
            <h3>TicketsPass+</h3>
                <ul className="footer-ul">
                    <li className="footer-li">Item 1</li>
                    <li className="footer-li">Item 2</li>
                    <li className="footer-li">Item 3</li>
                    <li className="footer-li">Item 4</li>
                    <li className="footer-li">Item 5</li>
                </ul>
            </div>
            <div className="footer-col-2">
                <h3>Support</h3>
                <ul className="footer-ul">
                    <li className="footer-li">Help & FAQ</li>
                    <li className="footer-li">Terms of Use</li>
                    <li className="footer-li">Privacy Policy</li>
                    <li className="footer-li">AD's Policy</li>
                    <li className="footer-li">Security</li>
                </ul>
            </div>
            <div className="footer-col-3">
            <h3>Languages</h3>
                <ul className="footer-ul">
                    <li className="footer-li">English</li>
                    <li className="footer-li">Spanish</li>
                </ul>
            </div>
            </div>
            <hr className="hr-footer-color-grey" />
            <div className="footer-second-line">
        <h2>Find us on</h2>
        <div className="container-btns-footer">
            <button className="footer-social-btns">
            <SocialIcon network="youtube" bgColor="#9F00FF" fgColor="#ffffff" />
                <h4 className="footer-social-text">Youtube</h4>
            </button>
            <button className="footer-social-btns">
            <SocialIcon network="instagram" bgColor="#9F00FF" fgColor="#ffffff"  />
            <h4 className="footer-social-text">Instagram</h4>
            </button>
            <button className="footer-social-btns">
            <SocialIcon network="tiktok" bgColor="#9F00FF"  fgColor="#ffffff" />
            <h4 className="footer-social-text">TikTok</h4>
            </button>
            <button className="footer-social-btns">
            <SocialIcon network="twitter" bgColor="#9F00FF" fgColor="#ffffff"  />
            <h4 className="footer-social-text">Twitter</h4>
            </button>
            <button className="footer-social-btns">
            <SocialIcon network="facebook" bgColor="#9F00FF" fgColor="#ffffff"  />
            <h4 className="footer-social-text">Facebook</h4>
            </button>
        </div>
    
        <div className="container-btns-footer">
            <button className="sponsor-btn-footer">Sponsor 1</button>
            <button className="sponsor-btn-footer">Sponsor 2</button>
            <button className="sponsor-btn-footer">Sponsor 3</button>
        </div>
        <hr className="hr-footer-color-grey" />
        <div>
            <h4 className="footer-text">© 2021 TicketsPass+. All rights reserved.</h4>
        </div>
            </div>
        </footer>
    )
}
export { Footer }