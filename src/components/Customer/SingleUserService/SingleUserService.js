import React from 'react';
import './SingleUserService.css';

const SingleUserService = ({ userService }) => {
    let style;
    if (userService.status == "pending") {

        style = {
            height: '50px',
            color: '#FF4545',
            backgroundColor: '#FFE3E3'
        }
    } else if (userService.status == "On Going") {

        style = {
            height: '50px',
            color: '#FFBD3E',
            backgroundColor: '#ffff9f'
        }
    } else {

        style = {
            height: '50px',
            color: '#009444',
            backgroundColor: '#C6FFE0'
        }
    }
    return (
        <div className="card col-md-4 col-sm-6 user-service-card">
            <div className="d-flex">
                <img style={{ height: '100px', width: '100px' }} className="img-fluid mb-3 mr-auto" src={`data:image/png;base64,${userService.serviceImage}`} alt="" />
                <button style={style} className="btn">{userService.status}</button>
            </div>
            <h4 style={{ fontWeight: 'bold', color: 'black' }}>{userService.service}</h4>
            <p style={{ color: 'black' }}>{userService.serviceDescription}</p>
        </div>
    );
};

export default SingleUserService;