import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faCalendar, faShoppingCart, faUserPlus, faShoppingBasket, faCommentDots, faPlus } from '@fortawesome/free-solid-svg-icons';
import logo from '../../utilities/images/logos/logo.png';
import { UserContext } from '../../App';

const SideBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => {
                setIsAdmin(data);
            });
    }, [])
    return (
        <div>
            <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
                <ul className="list-unstyled">
                    <li>
                        <Link to="/home" >
                            <img className='logo' src={logo} alt="logo" />

                        </Link>
                    </li>

                    {isAdmin ? <div>
                        <li>
                            <Link className="link" to="/allServiceList">
                                <FontAwesomeIcon icon={faShoppingBasket} /> <span className="sideBarLink">Service List</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="link" to="/addServices">
                                <FontAwesomeIcon icon={faPlus} /> <span className="sideBarLink">Add Service</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="link" to="/makeAdmin">
                                <FontAwesomeIcon icon={faUserPlus} /> <span className="sideBarLink">Make Admin</span>
                            </Link>
                        </li>

                    </div> : <div>
                            <li>
                                <Link className="link" to="/order">
                                    <FontAwesomeIcon icon={faShoppingCart} /> <span className="sideBarLink">Order</span>
                                </Link>
                            </li>
                            <li>
                                <Link className="link" to="/userServices">
                                    <FontAwesomeIcon icon={faShoppingBasket} /> <span className="sideBarLink">Service List</span>
                                </Link>
                            </li>

                            <li>
                                <Link className="link" to="/review">
                                    <FontAwesomeIcon icon={faCommentDots} /> <span className="sideBarLink">Review</span>
                                </Link>
                            </li>
                        </div>}

                </ul>
                <div>
                    <Link className="link" to="/home" onClick={() => { setLoggedInUser({}) }}><FontAwesomeIcon icon={faSignOutAlt} /> <span className="sideBarLink">Logout</span></Link>
                </div>
            </div>

        </div>
    );
};

export default SideBar;