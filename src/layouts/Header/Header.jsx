import React from "react"
import './Header.css'
import NavbarBS from "./Navbar-BS/NavbarBS"


function Header() {
    return (
        <>
            <header>
                <div className="color-line-topnav"></div>
                <NavbarBS/>
            </header>
        </>
    )
}
export { Header }