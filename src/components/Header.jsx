import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const navRef = useRef();
    const showNavbar = () =>{
        navRef.current.classList.toggle("responsive-nav");
    }
  return (
    <header className='header'>
        <h1>MovieCalendar</h1>
        <nav ref={navRef}>
            <Link className='links' to={'/'}>Movies</Link>
            <Link className='links' to={"/theatres"}>Theatres</Link>
            <Link className='links' to={"/me"}>Bookings</Link>

        </nav>
    </header>
  )
}

export default Header
