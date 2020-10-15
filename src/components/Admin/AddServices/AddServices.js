import React, { useContext, useState } from 'react';
import './AddServices.css';
import SideBar from '../../SideBar/SideBar';
import { UserContext } from '../../../App';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';

const AddServices = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    console.log(loggedInUser);
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
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
        const formData = new FormData()
        console.log(info);
        formData.append('file', file);
        formData.append('title', info.title);
        formData.append('description', info.description);
        console.log(formData);

        fetch('http://localhost:5000/addServices', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {

                history.replace('/home');
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

                        <div className="addServicesForm  mt-5">
                            <form onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className=" form-groupcol">
                                        <label htmlFor="exampleInputEmail1">Title</label>
                                        <input onBlur={handleBlur} type="text" className="form-control" name="title" placeholder="Event Title" />
                                    </div>
                                    <div className=" form-group col">
                                        <div className="upload-btn-wrapper form-group">
                                            <label>Icon</label><br></br>
                                            <button className="upload-btn"> <FontAwesomeIcon icon={faCloudUploadAlt} className="icon" />Upload image</button>
                                            <input onChange={handleFileChange} id="serviceImage" type="file" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Description</label>
                                    <textarea onBlur={handleBlur} type="text" className="form-control" name="description" placeholder="Event Description" />
                                </div>

                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AddServices;