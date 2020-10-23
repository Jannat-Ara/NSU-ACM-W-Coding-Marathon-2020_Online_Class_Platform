import React from 'react';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee ,faHeart,faCartArrowDown, faUser, faHome} from '@fortawesome/free-solid-svg-icons'
const Header = () => {
    return (
        <div className="header">
            <nav>
                <a href="/home">Home <FontAwesomeIcon icon={faHome} /></a>
                <a href="/explore_courses">Explore Courses <FontAwesomeIcon icon={faHeart} /></a>
                <a href="/cart">Cart<FontAwesomeIcon icon={faCartArrowDown} /></a>
                <a href="/myProfile">My Profile <FontAwesomeIcon icon={faUser} /></a>
            </nav>
        </div>
    );
};

export default Header;