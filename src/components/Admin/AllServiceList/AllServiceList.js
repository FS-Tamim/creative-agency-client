import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import SideBar from '../../SideBar/SideBar';
import SingleService from '../SingleService/SingleService';

const AllServiceList = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const [allServiceList, setAllServiceList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/allServiceList')
      .then(res => res.json())
      .then(data => setAllServiceList(data))
  }, [])

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

            <div className="addServicesForm  mt-5">
              <table class="table table-borderless">
                <thead>
                  <tr class="table-dark">
                    <th scope="col">Name</th>
                    <th scope="col">Email ID</th>
                    <th scope="col">Service</th>
                    <th scope="col">Project Details</th>
                    <th scope="col">Status</th>

                  </tr>
                </thead>
                <tbody>
                  {
                    allServiceList.map(service => <SingleService service={service}></SingleService>)
                  }
                </tbody>
              </table>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AllServiceList;