import React from "react"
import './Header.css'
import NavbarBS from "./Navbar-BS/NavbarBS"


function Header() {
    return (
        <>
            <header>
                <NavbarBS/>
                <div className="color-line-topnav"></div>
            </header>
        </>
    )
}
export { Header }