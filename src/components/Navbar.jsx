import React, {useState} from 'react'
import {Link, NavLink} from 'react-router-dom'
import {links} from '../data'
import {FiMenu} from 'react-icons/fi'
import {MdOutlineClose} from 'react-icons/md'

import Logo from '../assets/logo.png'

const Navbar = () => {
    const [isNavShowing, setIsNavShowing] = useState(false);

  return (
    <nav>
        <div className="container nav__container">
            <Link to='/' className='logo' onClick={() => setIsNavShowing(false)}>
                <img src={Logo} alt="Nav Logo" />
            </Link>
            
            <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
                {
                    links.map(({name, path}, index)=>{
                        return (
                            <li key={index}>
                                <NavLink to={path} className={({isActive}) => isActive ? 'active-nav' : ''}onClick={() => setIsNavShowing(prev => !prev)}>{name}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
            <button className="nav__toggle-btn" onClick={() => setIsNavShowing(prev => !prev)}>
                {
                    isNavShowing ? <MdOutlineClose/> : <FiMenu/>
                }
            </button>
        </div>
    </nav>
  )
}

export default Navbar