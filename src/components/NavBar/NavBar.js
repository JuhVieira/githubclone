import React from 'react'

import './NavBar.scss'

const Navbar = ({user}) => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand d-flex align-items-center" href="/">
            <img src={user.avatar_url} width="50" height="50" className="mr-3 avatar" alt="user" />
            {user.name}
        </a>
    </nav>
);

export default Navbar