import React, { useContext, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import SideBar from '../../SideBar/SideBar';

const Reviews = () => {

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const [info, setInfo] = useState({});




  const handleBlur = e => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    const reviewData = { ...info };
    reviewData.photo = loggedInUser.photo;





    fetch('http://localhost:5000/review', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reviewData)
    })
      .then(res => res.json())
      .then(data => {

        history.replace('/home');
      })
  }
  return (
    <div className="orderMainContainer">
      <div className='row'>
        <div className="col-md-2">
          <SideBar></SideBar>
        </div>
        <div className="col-md-10  bg-white">


          <nav className="navbar navbar-expand-lg ">
            <h3 class="navbar-brand">Review</h3>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <h6>{loggedInUser.name}</h6>
              </li>
            </ul>
          </nav>

          <div className="rightPart">

            <div className="orderForm  mt-5">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Your name" />
                </div>
                <div className="form-group">
                  <input onBlur={handleBlur} type="text" className="form-control" name="companyName" placeholder="Company Name, Designation" />
                </div>

                <div className="form-group">
                  <textarea onBlur={handleBlur} type="text" className="form-control" name="description" placeholder="description" />
                </div>

                <button type="submit" className="btn orderBtn">Submit</button>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Reviews;