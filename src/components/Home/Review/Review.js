import React, { useEffect, useState } from 'react';
import './Review.css';
import SingleReview from '../SingleReview/SingleReview';

const Review = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <section className="reviews">
                <div className="container">
                    <h5 className="text-center clientFeedback  mb-5 mt-5">Client <span className='feedback'>Feedback</span></h5>
                    <div className="row card-deck">

                        {
                            reviews.map(singleReview => <SingleReview key={singleReview._id} singleReview={singleReview} ></SingleReview>)
                        }


                    </div>
                </div>
            </section>

        </div>
    );
};

export default Review;