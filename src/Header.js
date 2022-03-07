import React, { useState } from 'react'
import './Header.css'
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import Search from './Search';



function Header() {
    const [showSearch, setShowSearch] = useState(false);
    return (
        <div className='header'>
            <Link to='/'>
                <img
                    className="header__icon"
                    src='https://avatars.sched.co/9/ea/11809449/avatar.jpg?d1c'
                    alt=""
                />
            </Link>
           
            <div className='header__center'>
                <input type="text" onClick={() => setShowSearch(!showSearch)} />
                <SearchIcon style={{cursor:'pointer'}} />
            </div>
            <div className='banner__search'>
                {showSearch && <Search setShowSearch={setShowSearch} showSearch={showSearch}/>}
            </div>

            <div className='header__right'>
                <p>Conviertete en aliado</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>
        </div>
    )
}

export default Header
