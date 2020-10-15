import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Service.css';
import ReactCardFlip from 'react-card-flip';
import { UserContext } from '../../../App';


const Service = ({ service }) => {

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


    <div className="col-md-4 col-sm-6 text-center">
      {
        isAdmin ?
          <Link to="/allServiceList" >

            <div className="image-container">
              <div className="image">
                <div className="side">
                  <img className="img-fluid mb-3 mt-2" src={`data:image/png;base64,${service.image.img}`} alt="" />
                </div>
                <div className="side back">
                  <img className="img-fluid mb-3 mt-2" src={`data:image/png;base64,${service.image.img}`} alt="" />
                </div>
              </div>
            </div>



            <h4 className='serviceTitle serviceLink' style={{ fontWeight: 'bold', color: 'black' }}>{service.title}</h4>
            <p style={{ color: 'black' }} className='serviceLink' >{service.description}</p>


          </Link>

          :
          <Link to={"/order/" + service._id}>

            <div className="image-container">
              <div className="image">
                <div className="side">
                  <img className="img-fluid mb-3 mt-2" src={`data:image/png;base64,${service.image.img}`} alt="" />
                </div>
                <div className="side back">
                  <img className="img-fluid mb-3 mt-2" src={`data:image/png;base64,${service.image.img}`} alt="" />
                </div>
              </div>
            </div>



            <h4 className='serviceTitle' style={{ fontWeight: 'bold', color: 'black' }}>{service.title}</h4>
            <p style={{ color: 'black' }} >{service.description}</p>


          </Link>
      }

    </div>






  );
};

export default Service;