import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
    return (
        <div className="header">
            <IconButton >
            <PersonIcon fontSize="Large" className="header_icon" />
            </IconButton>

            <img className="header_logo"
            src="https://www.cybersmile.org/wp-content/uploads/tinder-flame-crop-101.png"
            alt="" />

            <IconButton >
            <ForumIcon fontSize="Large" className="header_icon" />
            </IconButton>
        </div>
    )
}

export default Header
