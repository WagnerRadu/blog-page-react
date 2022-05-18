import React from 'react'
import './style.css'

export default function NavBar() {
  return (
    <div>
        <nav className="nav">
            <ul className="nav-list">
                <li className="nav-item">
                    <a href="" className="nav-link">TRAVEL UPDATES</a>
                </li>
                <li className="nav-item">
                    <a href="" className="nav-link">REVIEWS</a>
                </li>
                <li className="nav-item">
                    <a href="" className="nav-link">ABOUT</a>
                </li>
                <li className="nav-item">
                    <a href="" className="nav-link">CONTACT</a>
                </li>
            </ul>
        </nav>
    </div>
  )
}