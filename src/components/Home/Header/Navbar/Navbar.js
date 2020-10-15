import React, { useContext, useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import brandLogo from '../../../../utilities/images/logos/logo.png'
import { UserContext } from '../../../../App';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://cryptic-savannah-30453.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => {
                setIsAdmin(data);
            });
    }, [loggedInUser.email])
    return (

        <nav className="navbar navbar-expand-lg navbar-light">
            <Link to='/home'><img className='brandLogo' src={brandLogo} alt="logo"></img></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link mr-3" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-3" to="/home">Our Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-3" to="/home">Our Team</Link>
                    </li>
                    {
                        isAdmin ? <li className="nav-item">
                            <Link className="nav-link mr-5" to="/allServiceList">Dashboard</Link>
                        </li> : <li className="nav-item">
                                <Link className="nav-link mr-5" to="/userServices">Dashboard</Link>
                            </li>
                    }


                    {
                        loggedInUser.isSignedIn ? <li className="nav-item">
                            <Link className="nav-link mr-3 " to="/home"><button style={{ backgroundColor: '#111430', color: 'white' }} onClick={() => { setLoggedInUser({}) }} className='btn'>Logout</button></Link>
                        </li>
                            :
                            <li className="nav-item">
                                <Link className="nav-link mr-3 " to="/login"><button style={{ backgroundColor: '#111430', color: 'white' }} className='btn'>Login</button></Link>
                            </li>
                    }


                </ul>
            </div>
        </nav>

    );
};

export default Navbar;