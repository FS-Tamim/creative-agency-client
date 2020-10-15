import React, { useContext, useEffect, useState } from 'react';
import './ServiceList.css'
import { UserContext } from '../../../App';
import SingleUserService from '../SingleUserService/SingleUserService';
import SideBar from '../../SideBar/SideBar';

const ServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [userServices, setUserServices] = useState([]);



    useEffect(() => {
        fetch('https://cryptic-savannah-30453.herokuapp.com/userServices?email=' + loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setUserServices(data);
            });

    }, [])

    return (
        <div className="orderMainContainer">
            <div className='row'>
                <div className="col-md-2">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-10  bg-white">


                    <nav className="navbar navbar-expand-lg ">
                        <h3 class="navbar-brand">Service List</h3>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <h6>{loggedInUser.name}</h6>
                            </li>
                        </ul>
                    </nav>
                    <div className="right-part">
                        <section className="userServices mt-5">
                            <div className="container">

                                <div className="card-deck row text-center">
                                    {
                                        userServices.map(userService => <SingleUserService key={userService._id} userService={userService}></SingleUserService>)
                                    }

                                </div>
                            </div>
                        </section>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ServiceList;