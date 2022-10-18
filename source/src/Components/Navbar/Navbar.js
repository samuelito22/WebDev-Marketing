import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import {IoIosArrowUp} from 'react-icons/io'

function Navbar() {
    const navigationLinks = [{
        mal_id: 0,
        top: "HOME",
        dropdown: [null]
        },{
        mal_id: 1,
        top: "ABOUT US",
        dropdown: [null]
        },{
        mal_id: 2,
        top: "SERVICES",
        dropdown: [null]
        },{
        mal_id: 4,
        top: "CONTACT US",
        dropdown: [null]
        }]

  return (
    <div className='navbar'>
        <div className='container'>
            <Link to='/' className='logo'><span style={{color:"var(--default)"}}>.</span>WebM</Link>
            <div className='navigation'>
                {navigationLinks.map( nav => (
                    <div key={nav.mal_id} className = "link">                        
                    <Link to="#" className='linkPrimary'>{nav.top}<IoIosArrowUp className='arrow' style={{display:"none"}}/></Link>
                    {/*<div className='dropdown'>
                        {nav.dropdown.map( drop => (
                            <Link to='#' className='linkSecondary'>{drop}</Link>
                        ))}
                        </div>*/}
                    </div>
                ))}
                <div className = "link">                        
                    <Link to="#" className='btn-hireUs'>HIRE US</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar