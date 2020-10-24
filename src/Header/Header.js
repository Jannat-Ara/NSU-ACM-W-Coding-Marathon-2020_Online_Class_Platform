import React from 'react';
import {Switch,Link} from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart,faCartArrowDown, faUser, faHome, faChalkboardTeacher} from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    return (
        <div className="header">
            <nav>
                {/* <Switch>
                    <Link to="/home"><a href="">Home <FontAwesomeIcon icon={faHome} /></a>  
                    </Link>
                </Switch> */}
                <Switch>
                    <Link to="/tutors"><a href="">Tutors <FontAwesomeIcon icon={faChalkboardTeacher} /></a>
                    </Link>
                </Switch>
                <Switch>
                    <Link to="/explore_courses"><a href="">Explore Courses <FontAwesomeIcon icon={faHeart} /></a>
                    </Link>
                </Switch>
                <Switch>
                    <Link to="/myProfile"><a href="">My Profile <FontAwesomeIcon icon={faUser} /></a> 
                    </Link>
                </Switch>
                <Switch>
                  <Link to="/cart"><a href="">Cart<FontAwesomeIcon icon={faCartArrowDown} /></a>
                    </Link>
                </Switch>
                

                 {/* <a href="/tutors">Tutors <FontAwesomeIcon icon={faChalkboardTeacher} /></a>
                <a href="/explore_courses">Explore Courses <FontAwesomeIcon icon={faHeart} /></a>
                <a href="/cart">Cart<FontAwesomeIcon icon={faCartArrowDown} /></a>
                <a href="/myProfile">My Profile <FontAwesomeIcon icon={faUser} /></a> */}
            </nav>
        </div>
    );
};

export default Header;