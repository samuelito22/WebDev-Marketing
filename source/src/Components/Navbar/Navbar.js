import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import {IoIosArrowUp} from 'react-icons/io'

function Navbar() {
    const navigationLinks = [{
        mal_id: 0,
        top: "SERVICES",
        dropdown: [null],
        link:"#Services"
        },{
        mal_id: 1,
        top: "ABOUT US",
        dropdown: [null],
        link:"#About"
        },
        {
        mal_id: 2,
        top: "PORTFOLIO",
        dropdown: [null],
        link: "https://zorocut.com/Projects"
        }]

  return (
    <div className='navbar'>
        <div className='container'>
            <Link to='/' className='logo'><span style={{color:"var(--default)"}}>.</span>WebM</Link>
            <div className='navigation'>
                {navigationLinks.map( nav => (
                    <div key={nav.mal_id} className = "link">                        
                    <a href={nav.link} className='linkPrimary'>{nav.top}<IoIosArrowUp className='arrow' style={{display:"none"}}/></a>
                    {/*<div className='dropdown'>
                        {nav.dropdown.map( drop => (
                            <Link to='#' className='linkSecondary'>{drop}</Link>
                        ))}
                        </div>*/}
                    </div>
                ))}
                <div className = "link">                        
                    <a href="#Contact" className='btn-hireUs'>HIRE US</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar