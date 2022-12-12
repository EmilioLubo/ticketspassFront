import React from 'react'
import { Header } from './Header/Header'
import { Footer } from './Footer/Footer'
import './Main.css'

export default function Main(props) {

  return (
    <div className='Home'>  
        <Header/>
        <div>{props.children}</div>
        <Footer/>
    </div>
  )
}
export {Main}