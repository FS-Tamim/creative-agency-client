import React, { useContext } from 'react';
import './MakeAdmin.css'
import SideBar from '../../SideBar/SideBar';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import { useHistory } from 'react-router-dom';

const MakeAdmin = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {



    fetch('https://cryptic-savannah-30453.herokuapp.com/makeAdmin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {

        if (data) {
          history.replace("/allServiceList");

        }
      })
  };
  return (
    <div className="orderMainContainer">
      <div className='row'>
        <div className="col-md-2">
          <SideBar></SideBar>
        </div>
        <div className="col-md-10  bg-white">


          <nav className="navbar navbar-expand-lg ">
            <h3 class="navbar-brand">Order</h3>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <h6>{loggedInUser.name}</h6>
              </li>
            </ul>
          </nav>

          <div className="rightPart">

            <div className=" formContainer  mt-5">
              <form className="event-form" onSubmit={handleSubmit(onSubmit)} >

                <label htmlFor="eventTitle">Email</label><br></br>
                <input className="input-box" name="email" placeholder=" join@gmail.com" ref={register({ required: true })} />
                {errors.name && <span className="error">Field is required</span>}
                <input className="btn btn-success ml-2 mb-1" type="Submit" />
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MakeAdmin;