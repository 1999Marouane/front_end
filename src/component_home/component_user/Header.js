import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='container'>
            <nav className="py-2  border-bottom">
                <div className="container d-flex flex-wrap">
                    <ul className="nav me-auto">
                        <li className="nav-item"><Link to="/" className="nav-link link-body-emphasis px-2 active" aria-current="page">Home</Link></li>
                        <li className="nav-item"><a href="#" className="nav-link link-body-emphasis px-2">Features</a></li>
                        <li className="nav-item"><a href="#" className="nav-link link-body-emphasis px-2">Pricing</a></li>
                        <li className="nav-item"><a href="#" className="nav-link link-body-emphasis px-2">FAQs</a></li>
                        <li className="nav-item"><a href="#" className="nav-link link-body-emphasis px-2">About</a></li>
                    </ul>
                    <ul className="nav">
                        <li className="nav-item"><Link to="/login" className="nav-link link-body-emphasis px-2">Login</Link></li>
                        <li className="nav-item"><Link to="/signUp" className="nav-link link-body-emphasis px-2">Sign up</Link></li>
                    </ul>
                </div>
            </nav>

        </div>
    )
}

export default Header