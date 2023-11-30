import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';
import { GoThreeBars } from 'react-icons/go';
import { MdOutlineClose } from 'react-icons/md'

const Navbar = () => {
    const [isNavShowing, setIsNavShowing] = useState(false);
    return (
        <nav>
            <div className='nav__container'>
                <a className='logo' href='#'>
                    LOQMAN
                </a>
                <ul className={`nav__links ${isNavShowing ? 'show__nav' : ''}`}>
                    <li><a href="#about">ABOUT</a></li>
                    <li><a href="#skills">SKILLS</a></li>
                    <li><a href="#projects">PROJECTS</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                </ul>
                <button className='nav__toggle-btn' onClick={() => setIsNavShowing(prev => !prev)}>
                    {
                        isNavShowing ? <MdOutlineClose size={22} /> : <GoThreeBars size={22}/>
                    }
                </button>
            </div>
        </nav>

    )
}

export default Navbar

