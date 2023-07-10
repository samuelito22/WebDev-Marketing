import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='container'>
            <section className='text-section'>
                <Link to='/' className='logo'><span style={{color:"var(--default)"}}>.</span>WebM</Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor purus augue, 
                    nec bibendum purus gravida eget. Aenean mattis nunc eros, non faucibus nisi dapibus in. 
                    Proin quam ex, ultrices sed arcu quis, commodo faucibus est.</p>
            </section>
            <section className='nav-section'>
                <h1>Navigation</h1>
                <div className='nav-links'>
                <Link to='#Services' className='nav-link'>Services</Link>
                <Link to='#AboutUs' className='nav-link'>About us</Link>
                <Link to='#' className='nav-link'>Contact us</Link>
                <Link to='#' className='nav-link'>Hire us</Link>
                </div>
            </section>
        </div>
    </div>
  )
}

export default Footer
