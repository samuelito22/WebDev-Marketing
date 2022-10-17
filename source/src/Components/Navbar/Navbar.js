import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import {IoIosArrowUp} from 'react-icons/io'

function Navbar() {
    const navigationLinks = [{
        mal_id: 0,
        top: "WORK",
        dropdown:["Secondary","Secondary","Secondary"]
    },{
        mal_id: 1,
        top: "ABOUT",
        dropdown:["Secondary","Secondary","Secondary"]
    },{
        mal_id: 2,
        top: "SERVICES",
        dropdown:["Secondary","Secondary","Secondary"]
    },{
        mal_id: 3,
        top: "BLOG",
        dropdown:["Secondary","Secondary","Secondary"]
    },{
        mal_id: 4,
        top: "CONTACT",
        dropdown:["Secondary","Secondary","Secondary"]
    }]

  return (
    <div className='navbar'>
        <div className='container'>
            <Link to='/' className='logo'><span style={{color:"green"}}>.</span>WebM</Link>
            <div className='navigation'>
                {navigationLinks.map( nav => (
                    <div key={nav.mal_id} className = "link">                        
                    <Link to="#" className='linkPrimary'>{nav.top}<IoIosArrowUp className='arrow' /></Link>
                    <div className='dropdown'>
                        {nav.dropdown.map( drop => (
                            <Link to='#' className='linkSecondary'>{drop}</Link>
                        ))}
                    </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Navbar