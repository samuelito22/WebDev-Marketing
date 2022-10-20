import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='container'>
            <section style={{"textAlign":"center"}}>
                <Link to='/' className='logo'><span style={{color:"var(--default)"}}>.</span>WebM</Link>
                <p style={{fontWeight:"700",fontSize:"0.9rem"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor purus augue, 
                    nec bibendum purus gravida eget. Aenean mattis nunc eros, non faucibus nisi dapibus in. 
                    Proin quam ex, ultrices sed arcu quis, commodo faucibus est.</p>
            </section>
            <section style={{"textAlign":"center",display:"flex",flexDirection:"column"}}>
                <h1 style={{margin:"auto",fontSize:"large"}}>Navigation</h1>
                <Link to='#Services' style={{margin:"auto",fontSize:"0.9rem",fontWeight:"700",color:"black",textDecoration:"underline"}}>Services</Link>
                <Link to='#AboutUs' style={{margin:"auto",fontSize:"0.9rem",fontWeight:"700",color:"black",textDecoration:"underline"}}>About us</Link>
                <Link to='https://zorocut.com/Projects' style={{margin:"auto",fontSize:"0.9rem",fontWeight:"700",color:"black",textDecoration:"underline"}}>Portfolio</Link>
                <Link to='#' style={{margin:"auto",fontSize:"0.9rem",fontWeight:"700",color:"black",textDecoration:"underline"}}>Contact us</Link>
                <Link to='#' style={{margin:"auto",fontSize:"0.9rem",fontWeight:"700",color:"black",textDecoration:"underline"}}>Hire us</Link>
            </section>
        </div>
    </div>
  )
}

export default Footer