import React from 'react';
import './HeaderMain.css';

import frame from '../../../../utilities/images/logos/Frame.png'
import { Link } from 'react-router-dom';

const HeaderMain = () => {
    return (
        <main className="row d-flex align-items-center mt-5 ">
            <div className="col-md-4 col-sm-6 col-12 offset-md-1">
                <h1 style={{ color: '#111430', fontWeight: 'bold' }}>Let's Grow Your<br />Brand To The<br />Next Level</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima.</p>
                <Link to="#" style={{ backgroundColor: '#111430', color: 'white' }} className="btn">Hire Us</Link>
            </div>
            <div className=" col-md-6 col-sm-6 col-12">
                <img src={frame} alt="" className="img-fluid frame" />
            </div>
        </main>
    );
};

export default HeaderMain;