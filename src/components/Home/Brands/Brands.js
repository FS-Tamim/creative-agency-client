import React from 'react';
import './Brands.css';
import slack from '../../../utilities/images/logos/slack.png';
import google from '../../../utilities/images/logos/google.png';
import uber from '../../../utilities/images/logos/uber.png';
import netflix from '../../../utilities/images/logos/netflix.png';
import airbnb from '../../../utilities/images/logos/airbnb.png';

const Brands = () => {
    return (
        <div className='container mt-5 mb-5 '>
            <div className="card-deck brands">
                <div className="card col-md-2 brand">
                    <img src={slack} alt="" />
                </div>
                <div className="card col-md-2 brand">
                    <img src={google} alt="" />
                </div>
                <div className="card col-md-2 brand">
                    <img className='mb-4' src={uber} alt="" />
                </div>
                <div className="card col-md-2 brand">
                    <img src={netflix} alt="" />
                </div>
                <div className="card col-md-2 brand">
                    <img src={airbnb} alt="" />
                </div>

            </div>
        </div>
    );
};

export default Brands;