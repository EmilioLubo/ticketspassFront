import React from 'react'
import { Header } from './Header/Header'
import { Footer } from './Footer/Footer'
import { Outlet } from 'react-router-dom'
import './Main.css'

export default function Main(props) {

  return (
    <div className='Home'>  
        <Header/>
        <div className="Div"><Outlet /></div>
        <Footer/>
    </div>
  )
}
export {Main}