import React from 'react';
import './SingleReview.css'

const SingleReview = ({ singleReview }) => {
    return (

        <div className="col-md-4 col-sm-6  card">

            <div className='d-flex align-items-center justify-content-start'>
                <div>
                    <img className="img-fluid mb-3 mt-2 reviwerImage" src={singleReview.photo} alt="" />
                </div>
                <div>
                    <h4 className='serviceTitle'>{singleReview.name}</h4>
                    <h6>{singleReview.companyName}</h6>
                </div>
            </div>
            <p>{singleReview.description}</p>

        </div>

    );
};

export default SingleReview;