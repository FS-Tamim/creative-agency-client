import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import Button from '@material-ui/core/Button';
import google from '../../utilities/logos/google.png';
import './Login.css';
import logo from '../../utilities/images/logos/logo.png';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import { handleGoogleSignIn, initializeFirebaseFramework } from '../firebaseConfig/firebaseManager';


initializeFirebaseFramework();
const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };
    const GoogleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                setLoggedInUser(res);
                storeAuthToken();
                history.replace(from);
            })
    }
    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
            .then(function (idToken) {
                sessionStorage.setItem('token', idToken);
            }).catch(function (error) {

            });
    }
    return (
        <div className='text-center'>
            <Link to='/home'><img className='loginPageLogo' src={logo}></img></Link>
            <div className="LogInPage">

                <p>Login With</p>
                <Button
                    onClick={GoogleSignIn}
                    variant="contained"
                    className='socialIconButton'>
                    <img className="socialIcon" src={google} alt='google' /><span className="socialIconText"> Continue with google</span>
                </Button>
                <p>Don't have an Account? <Link to="/login">Create an Account</Link></p>
            </div>
        </div>
    );
};

export default Login;