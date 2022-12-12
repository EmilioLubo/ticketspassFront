import React from 'react'
import AutoToTop from '../components/home1/AutoToTop/AutoToTop'
import { Header } from './Header/Header'
import { Footer } from './Footer/Footer'
import './Main.css'

export default function Main(props) {

  return (
    <div className='Home'>  
        <AutoToTop/>
        <Header/>
        <div className='Div'>{props.children}</div>
        <Footer/>
    </div>
  )
}
export {Main}