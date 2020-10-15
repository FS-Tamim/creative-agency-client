import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import SideBar from '../../SideBar/SideBar';
import './Order.css';

const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const { serviceId } = useParams();
    const [serviceData, setServiceData] = useState({});
    const [status, setStatus] = useState("pending");
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);


    useEffect(() => {
        fetch(`https://cryptic-savannah-30453.herokuapp.com/getServiceData/${serviceId}`)
            .then(res => res.json())
            .then(data => setServiceData(data))
    }, [])
    if (serviceData[0] != undefined) {


        var title = serviceData[0].title;
    }


    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        if (file != null) {
            formData.append('file', file);
        }

        if (serviceData[0] != undefined) {
            formData.append('service', serviceData[0].title);
            formData.append('serviceImage', serviceData[0].image.img);
            formData.append('serviceDescription', serviceData[0].description);
        }


        formData.append('name', info.name);
        formData.append('email', loggedInUser.email);
        formData.append('service', info.service);
        formData.append('details', info.details);
        formData.append('price', info.price);
        formData.append('status', status);

        fetch('https://cryptic-savannah-30453.herokuapp.com/order', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                history.replace('/userServices');
            })
            .catch(error => {

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
                        <h3 class="navbar-brand">Order</h3>
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
                                    <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Your name or company name" />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" name="email" defaultValue={loggedInUser.email} />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="service" defaultValue={title} />
                                </div>
                                <div className="form-group">
                                    <textarea onBlur={handleBlur} type="text" className="form-control" name="details" placeholder="Project Details" />
                                </div>
                                <div className="form-row">
                                    <div className="form-group col">
                                        <input onBlur={handleBlur} type="text" className="form-control" name="price" placeholder="price" />
                                    </div>
                                    <div className="form-group col">
                                        <div className="upload-btn-wrapper">
                                            <button className="upload-btn"> <FontAwesomeIcon icon={faCloudUploadAlt} className="icon" />Upload project file</button>
                                            <input onChange={handleFileChange} id="serviceImage" type="file" />
                                        </div>
                                    </div>
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

export default Order;